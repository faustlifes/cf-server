import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SliderItemEntity } from '../entities/SliderItem.entity';
import { CreateSliderItemDto } from './dto/create-slider-item.dto';

@Injectable()
export class SliderService {
  constructor(
    @InjectRepository(SliderItemEntity)
    private readonly sliderRepository: Repository<SliderItemEntity>,
  ) {}

  async findAll() {
    return this.sliderRepository.find();
  }

  async findOne(id: string) {
    return this.sliderRepository.findOne({ where: { id } });
  }

  async create(createSliderItemDto: CreateSliderItemDto) {
    const item = this.sliderRepository.create(createSliderItemDto);
    return this.sliderRepository.save(item);
  }

  async update(id: string, updateSliderItemDto: any) {
    await this.sliderRepository.update(id, updateSliderItemDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.sliderRepository.delete(id);
  }
}
