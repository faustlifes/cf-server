import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeedbackEntity } from '../entities/Feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(FeedbackEntity)
    private readonly feedbackRepository: Repository<FeedbackEntity>,
  ) {}

  async findAll() {
    return this.feedbackRepository.find();
  }

  async findOne(id: string) {
    return this.feedbackRepository.findOne({ where: { id } });
  }

  async create(createFeedbackDto: CreateFeedbackDto) {
    const feedback = this.feedbackRepository.create(createFeedbackDto);
    return this.feedbackRepository.save(feedback);
  }

  async update(id: string, updateFeedbackDto: any) {
    await this.feedbackRepository.update(id, updateFeedbackDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.feedbackRepository.delete(id);
  }
}
