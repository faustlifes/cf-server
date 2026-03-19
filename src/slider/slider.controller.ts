import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { SliderService } from './slider.service';
import { CreateSliderItemDto } from './dto/create-slider-item.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('sliders')
export class SliderController {
  constructor(private readonly sliderService: SliderService) {}

  @Get()
  findAll() {
    return this.sliderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sliderService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSliderItemDto: CreateSliderItemDto) {
    return this.sliderService.create(createSliderItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateSliderItemDto: any) {
    return this.sliderService.update(id, updateSliderItemDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sliderService.remove(id);
  }
}
