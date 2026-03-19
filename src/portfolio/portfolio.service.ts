import { Injectable } from '@nestjs/common';
import { RethinkService } from '../providers/rethink.service';
import { CreatePortfolioItemDto } from './dto/create-portfolio-item.dto';

@Injectable()
export class PortfolioService {
  private readonly tableName = 'portfolio';

  constructor(private readonly rethinkService: RethinkService) {}

  async findAll() {
    return this.rethinkService.findAll(this.tableName);
  }

  async findOne(id: string) {
    return this.rethinkService.findById(this.tableName, id);
  }

  async create(createPortfolioItemDto: CreatePortfolioItemDto) {
    return this.rethinkService.insert(this.tableName, createPortfolioItemDto);
  }

  async update(id: string, updatePortfolioItemDto: any) {
    return this.rethinkService.update(this.tableName, id, updatePortfolioItemDto);
  }

  async remove(id: string) {
    return this.rethinkService.delete(this.tableName, id);
  }
}
