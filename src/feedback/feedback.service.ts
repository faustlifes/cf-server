import { Injectable } from '@nestjs/common';
import { RethinkService } from '../providers/rethink.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  private readonly tableName = 'feedback';

  constructor(private readonly rethinkService: RethinkService) {}

  async findAll() {
    return this.rethinkService.findAll(this.tableName);
  }

  async findOne(id: string) {
    return this.rethinkService.findById(this.tableName, id);
  }

  async create(createFeedbackDto: CreateFeedbackDto) {
    return this.rethinkService.insert(this.tableName, createFeedbackDto);
  }

  async update(id: string, updateFeedbackDto: any) {
    return this.rethinkService.update(this.tableName, id, updateFeedbackDto);
  }

  async remove(id: string) {
    return this.rethinkService.delete(this.tableName, id);
  }
}
