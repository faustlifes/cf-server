import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutContentDto } from './dto/create-about-content.dto';
import { BaseController } from '../common/base.controller';
import { Public } from '../auth/public.decorator';

@Controller('about')
export class AboutController extends BaseController {
  constructor(private readonly aboutService: AboutService) {
    super();
  }

  @Public()
  @Get()
  find() {
    return this.aboutService.find();
  }

  @Post()
  create(@Body() createAboutContentDto: CreateAboutContentDto) {
    return this.aboutService.create(createAboutContentDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAboutContentDto: any) {
    return this.aboutService.update(id, updateAboutContentDto);
  }
}
