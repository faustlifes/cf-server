import { Injectable } from '@nestjs/common';
import { RethinkService } from '../providers/rethink.service';
import { CreateSliderItemDto } from './dto/create-slider-item.dto';

@Injectable()
export class SliderService {
  private readonly tableName = 'sliders';

  constructor(private readonly rethinkService: RethinkService) {}

  async findAll() {
    return this.rethinkService.findAll(this.tableName);
  }

  async findOne(id: string) {
    return this.rethinkService.findById(this.tableName, id);
  }

  async create(createSliderItemDto: CreateSliderItemDto) {
    return this.rethinkService.insert(this.tableName, createSliderItemDto);
  }

  async update(id: string, updateSliderItemDto: any) {
    return this.rethinkService.update(this.tableName, id, updateSliderItemDto);
  }

  async remove(id: string) {
    return this.rethinkService.delete(this.tableName, id);
  }
}
