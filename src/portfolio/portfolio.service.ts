import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PortfolioItemEntity } from '../entities/PortfolioItem.entity';
import { CreatePortfolioItemDto } from './dto/create-portfolio-item.dto';
import { UpdatePortfolioItemDto } from './dto/update-portfolio-item.dto';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(PortfolioItemEntity)
    private readonly portfolioRepository: Repository<PortfolioItemEntity>,
  ) {}

  async findAll() {
    return this.portfolioRepository.find();
  }

  async findOne(id: string) {
    return this.portfolioRepository.findOne({ where: { id } });
  }

  async create(createPortfolioItemDto: CreatePortfolioItemDto) {
    const item = this.portfolioRepository.create(createPortfolioItemDto);
    return this.portfolioRepository.save(item);
  }

  async update(id: string, updatePortfolioItemDto: UpdatePortfolioItemDto) {
    const existing = await this.portfolioRepository.findOne({ where: { id } });
    if (!existing) throw new NotFoundException(`Portfolio item ${id} not found`);
    await this.portfolioRepository.update(id, updatePortfolioItemDto);
    return this.portfolioRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    return this.portfolioRepository.delete(id);
  }
}
