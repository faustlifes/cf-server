import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/User.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

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

  public encodePassword(name: string, pass: string): string {
    const encodedPass = Buffer.from(pass).toString('base64');
    return Buffer.from(`${name}:${encodedPass}`).toString('base64');
  }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = this.encodePassword(createUserDto.name, createUserDto.pass);
    
    const user = this.userRepository.create({
      ...createUserDto,
      pass: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: any) {
    const user = await this.findOne(id);
    if (!user) return null;

    if (updateUserDto.pass || updateUserDto.name) {
      const name = updateUserDto.name || user.name;
      const pass = updateUserDto.pass || user.pass; 
      // Note: If updating only name, we'd need the original password phrase to re-encode.
      // However, if we only have the encoded pass, we can't easily "re-salt" it with the new name
      // unless we assume the base64 structure is reversible and we decode it.
      
      if (updateUserDto.pass) {
        updateUserDto.pass = this.encodePassword(name, updateUserDto.pass);
      } else if (updateUserDto.name) {
        // If only name changes, we should ideally re-encode the existing password with the new name.
        // Since this is base64, we can decode the old one.
        try {
          const decoded = Buffer.from(user.pass, 'base64').toString();
          const [, oldEncodedPass] = decoded.split(':');
          updateUserDto.pass = Buffer.from(`${updateUserDto.name}:${oldEncodedPass}`).toString('base64');
        } catch (e) {
          // Fallback if password was not in the expected format
        }
      }
    }
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.userRepository.delete(id);
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    const { email, oldPassword, newPassword, confirmNewPassword } = resetPasswordDto;

    if (newPassword !== confirmNewPassword) {
      throw new Error('New passwords do not match');
    }

    const user = await this.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const encodedOldPass = this.encodePassword(user.name, oldPassword);
    if (user.pass !== encodedOldPass) {
      throw new Error('Invalid old password');
    }

    const hashedNewPassword = this.encodePassword(user.name, newPassword);
    user.pass = hashedNewPassword;
    return this.userRepository.save(user);
  }
}
