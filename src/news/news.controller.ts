import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { BaseController } from '../common/base.controller';
import { Public } from '../auth/public.decorator';

@Controller('news')
export class NewsController extends BaseController {
  constructor(private readonly newsService: NewsService) {
    super();
  }

  @Public()
  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: any) {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }
}
