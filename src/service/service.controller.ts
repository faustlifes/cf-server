import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceItemDto } from './dto/create-service-item.dto';
import { BaseController } from '../common/base.controller';
import { Public } from '../auth/public.decorator';

@Controller('services')
export class ServiceController extends BaseController {
  constructor(private readonly serviceService: ServiceService) {
    super();
  }

  @Public()
  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }

  @Post()
  create(@Body() createServiceItemDto: CreateServiceItemDto) {
    return this.serviceService.create(createServiceItemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateServiceItemDto: any) {
    return this.serviceService.update(id, updateServiceItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}
