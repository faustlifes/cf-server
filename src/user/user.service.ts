import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../entities/User.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.pass, salt);
    
    const user = this.userRepository.create({
      ...createUserDto,
      pass: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: any) {
    if (updateUserDto.pass) {
      const salt = await bcrypt.genSalt();
      updateUserDto.pass = await bcrypt.hash(updateUserDto.pass, salt);
    }
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.userRepository.delete(id);
  }
}
