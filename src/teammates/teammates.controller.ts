import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { TeammatesService } from './teammates.service';
import { CreateTeammateDto } from './dto/create-teammate.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('teammates')
export class TeammatesController {
  constructor(private readonly teammatesService: TeammatesService) {}

  @Get()
  findAll() {
    return this.teammatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teammatesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTeammateDto: CreateTeammateDto) {
    return this.teammatesService.create(createTeammateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeammateDto: any) {
    return this.teammatesService.update(id, updateTeammateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teammatesService.remove(id);
  }
}
