import { Controller, Get, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutContentDto } from './dto/create-about-content.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  find() {
    return this.aboutService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createAboutContentDto: CreateAboutContentDto) {
    return this.aboutService.create(createAboutContentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateAboutContentDto: any) {
    return this.aboutService.update(id, updateAboutContentDto);
  }
}
