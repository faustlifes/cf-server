import { Injectable } from '@nestjs/common';
import { RethinkService } from '../providers/rethink.service';
import { CreateAboutContentDto } from './dto/create-about-content.dto';

@Injectable()
export class AboutService {
  private readonly tableName = 'about';

  constructor(private readonly rethinkService: RethinkService) {}

  async find() {
    const results = await this.rethinkService.findAll(this.tableName);
    return results.length > 0 ? results[0] : null;
  }

  async create(createAboutContentDto: CreateAboutContentDto) {
    return this.rethinkService.insert(this.tableName, createAboutContentDto);
  }

  async update(id: string, updateAboutContentDto: any) {
    return this.rethinkService.update(this.tableName, id, updateAboutContentDto);
  }
}
