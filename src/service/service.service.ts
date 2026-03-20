import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceItemEntity } from '../entities/ServiceItem.entity';
import { CreateServiceItemDto } from './dto/create-service-item.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(ServiceItemEntity)
    private readonly serviceRepository: Repository<ServiceItemEntity>,
  ) {}

  async findAll() {
    return this.serviceRepository.find();
  }

  async findOne(id: string) {
    return this.serviceRepository.findOne({ where: { id } });
  }

  async create(createServiceItemDto: CreateServiceItemDto) {
    const item = this.serviceRepository.create(createServiceItemDto);
    return this.serviceRepository.save(item);
  }

  async update(id: string, updateServiceItemDto: any) {
    await this.serviceRepository.update(id, updateServiceItemDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.serviceRepository.delete(id);
  }
}
