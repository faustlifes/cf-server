import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SliderService } from './slider.service';
import { CreateSliderItemDto } from './dto/create-slider-item.dto';
import { BaseController } from '../common/base.controller';
import { Public } from '../auth/public.decorator';

@Controller('sliders')
export class SliderController extends BaseController {
  constructor(private readonly sliderService: SliderService) {
    super();
  }

  @Public()
  @Get()
  findAll() {
    return this.sliderService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sliderService.findOne(id);
  }

  @Post()
  create(@Body() createSliderItemDto: CreateSliderItemDto) {
    return this.sliderService.create(createSliderItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSliderItemDto: any) {
    return this.sliderService.update(id, updateSliderItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sliderService.remove(id);
  }
}
