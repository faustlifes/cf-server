import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsEntity } from '../entities/News.entity';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async findAll() {
    return this.newsRepository.find();
  }

  async findOne(id: string) {
    return this.newsRepository.findOne({ where: { id } });
  }

  async create(createNewsDto: CreateNewsDto) {
    const news = this.newsRepository.create(createNewsDto);
    return this.newsRepository.save(news);
  }

  async update(id: string, updateNewsDto: any) {
    await this.newsRepository.update(id, updateNewsDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.newsRepository.delete(id);
  }
}
