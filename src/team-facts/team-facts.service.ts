import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamFactEntity } from '../entities/TeamFact.entity';
import { CreateTeamFactDto } from './dto/create-team-fact.dto';

@Injectable()
export class TeamFactsService {
  constructor(
    @InjectRepository(TeamFactEntity)
    private readonly teamFactRepository: Repository<TeamFactEntity>,
  ) {}

  async findAll() {
    return this.teamFactRepository.find();
  }

  async findOne(id: string) {
    return this.teamFactRepository.findOne({ where: { id } });
  }

  async create(createTeamFactDto: CreateTeamFactDto) {
    const fact = this.teamFactRepository.create(createTeamFactDto);
    return this.teamFactRepository.save(fact);
  }

  async update(id: string, updateTeamFactDto: any) {
    const existing = await this.teamFactRepository.findOne({ where: { id } });
    if (!existing) throw new NotFoundException(`Team fact ${id} not found`);
    await this.teamFactRepository.update(id, updateTeamFactDto);
    return this.teamFactRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    return this.teamFactRepository.delete(id);
  }
}
