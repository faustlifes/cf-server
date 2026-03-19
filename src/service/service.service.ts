import { Injectable } from '@nestjs/common';
import { RethinkService } from '../providers/rethink.service';
import { CreateServiceItemDto } from './dto/create-service-item.dto';

@Injectable()
export class ServiceService {
  private readonly tableName = 'services';

  constructor(private readonly rethinkService: RethinkService) {}

  async findAll() {
    return this.rethinkService.findAll(this.tableName);
  }

  async findOne(id: string) {
    return this.rethinkService.findById(this.tableName, id);
  }

  async create(createServiceItemDto: CreateServiceItemDto) {
    return this.rethinkService.insert(this.tableName, createServiceItemDto);
  }

  async update(id: string, updateServiceItemDto: any) {
    return this.rethinkService.update(this.tableName, id, updateServiceItemDto);
  }

  async remove(id: string) {
    return this.rethinkService.delete(this.tableName, id);
  }
}
