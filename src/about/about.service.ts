import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AboutContentEntity } from '../entities/AboutContent.entity';
import { CreateAboutContentDto } from './dto/create-about-content.dto';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(AboutContentEntity)
    private readonly aboutRepository: Repository<AboutContentEntity>,
  ) {}

  async find() {
    return this.aboutRepository.findOne({ 
      where: {}, 
      relations: ['skills'] 
    });
  }

  async create(createAboutContentDto: CreateAboutContentDto) {
    const about = this.aboutRepository.create(createAboutContentDto);
    return this.aboutRepository.save(about);
  }

  async update(id: string, updateAboutContentDto: any) {
    await this.aboutRepository.update(id, updateAboutContentDto);
    return this.find();
  }
}
