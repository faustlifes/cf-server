import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeammateEntity } from '../entities/Teammate.entity';
import { CreateTeammateDto } from './dto/create-teammate.dto';

@Injectable()
export class TeammatesService {
  constructor(
    @InjectRepository(TeammateEntity)
    private readonly teammateRepository: Repository<TeammateEntity>,
  ) {}

  async findAll() {
    return this.teammateRepository.find();
  }

  async findOne(id: string) {
    return this.teammateRepository.findOne({ where: { id } });
  }

  async create(createTeammateDto: CreateTeammateDto) {
    const teammate = this.teammateRepository.create(createTeammateDto);
    return this.teammateRepository.save(teammate);
  }

  async update(id: string, updateTeammateDto: any) {
    const existing = await this.teammateRepository.findOne({ where: { id } });
    if (!existing) throw new NotFoundException(`Teammate ${id} not found`);
    await this.teammateRepository.update(id, updateTeammateDto);
    return this.teammateRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    return this.teammateRepository.delete(id);
  }
}
