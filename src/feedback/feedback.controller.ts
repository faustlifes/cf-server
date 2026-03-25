import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { BaseController } from '../common/base.controller';
import { Public } from '../auth/public.decorator';

@Controller('feedback')
export class FeedbackController extends BaseController {
  constructor(private readonly feedbackService: FeedbackService) {
    super();
  }

  @Public()
  @Get()
  findAll() {
    return this.feedbackService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedbackService.findOne(id);
  }

  @Post()
  create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return this.feedbackService.create(createFeedbackDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFeedbackDto: any) {
    return this.feedbackService.update(id, updateFeedbackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedbackService.remove(id);
  }
}
