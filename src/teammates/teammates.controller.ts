import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeammatesService } from './teammates.service';
import { CreateTeammateDto } from './dto/create-teammate.dto';
import { BaseController } from '../common/base.controller';
import { Public } from '../auth/public.decorator';

@Controller('teammates')
export class TeammatesController extends BaseController {
  constructor(private readonly teammatesService: TeammatesService) {
    super();
  }

  @Public()
  @Get()
  findAll() {
    return this.teammatesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teammatesService.findOne(id);
  }

  @Post()
  create(@Body() createTeammateDto: CreateTeammateDto) {
    return this.teammatesService.create(createTeammateDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeammateDto: any) {
    return this.teammatesService.update(id, updateTeammateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teammatesService.remove(id);
  }
}
