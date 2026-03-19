import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RethinkService } from '../providers/rethink.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly tableName = 'users';

  constructor(private readonly rethinkService: RethinkService) {}

  async findAll() {
    return this.rethinkService.findAll(this.tableName);
  }

  async findOne(id: string) {
    return this.rethinkService.findById(this.tableName, id);
  }

  async findByEmail(email: string) {
    const results = await this.rethinkService.findAll(this.tableName);
    return results.find(user => user.email === email);
  }

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.pass, salt);
    
    return this.rethinkService.insert(this.tableName, {
      ...createUserDto,
      pass: hashedPassword,
    });
  }

  async update(id: string, updateUserDto: any) {
    if (updateUserDto.pass) {
      const salt = await bcrypt.genSalt();
      updateUserDto.pass = await bcrypt.hash(updateUserDto.pass, salt);
    }
    return this.rethinkService.update(this.tableName, id, updateUserDto);
  }

  async remove(id: string) {
    return this.rethinkService.delete(this.tableName, id);
  }
}
