import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { CreatePortfolioItemDto } from './dto/create-portfolio-item.dto';
import { BaseController } from '../common/base.controller';
import { Public } from '../auth/public.decorator';

@Controller('portfolio')
export class PortfolioController extends BaseController {
  constructor(private readonly portfolioService: PortfolioService) {
    super();
  }

  @Public()
  @Get()
  findAll() {
    return this.portfolioService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portfolioService.findOne(id);
  }

  @Post()
  create(@Body() createPortfolioItemDto: CreatePortfolioItemDto) {
    return this.portfolioService.create(createPortfolioItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePortfolioItemDto: any) {
    return this.portfolioService.update(id, updatePortfolioItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portfolioService.remove(id);
  }
}
