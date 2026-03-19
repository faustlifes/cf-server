import { Injectable } from '@nestjs/common';
import { RethinkService } from '../providers/rethink.service';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  private readonly tableName = 'news';

  constructor(private readonly rethinkService: RethinkService) {}

  async findAll() {
    return this.rethinkService.findAll(this.tableName);
  }

  async findOne(id: string) {
    return this.rethinkService.findById(this.tableName, id);
  }

  async create(createNewsDto: CreateNewsDto) {
    return this.rethinkService.insert(this.tableName, createNewsDto);
  }

  async update(id: string, updateNewsDto: any) {
    return this.rethinkService.update(this.tableName, id, updateNewsDto);
  }

  async remove(id: string) {
    return this.rethinkService.delete(this.tableName, id);
  }
}
