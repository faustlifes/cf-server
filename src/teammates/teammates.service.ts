import { Injectable } from '@nestjs/common';
import { RethinkService } from '../providers/rethink.service';
import { CreateTeammateDto } from './dto/create-teammate.dto';

@Injectable()
export class TeammatesService {
  private readonly tableName = 'teammates';

  constructor(private readonly rethinkService: RethinkService) {}

  async findAll() {
    return this.rethinkService.findAll(this.tableName);
  }

  async findOne(id: string) {
    return this.rethinkService.findById(this.tableName, id);
  }

  async create(createTeammateDto: CreateTeammateDto) {
    return this.rethinkService.insert(this.tableName, createTeammateDto);
  }

  async update(id: string, updateTeammateDto: any) {
    return this.rethinkService.update(this.tableName, id, updateTeammateDto);
  }

  async remove(id: string) {
    return this.rethinkService.delete(this.tableName, id);
  }
}
