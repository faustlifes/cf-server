import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { TeamFactsService } from './team-facts.service';
import { CreateTeamFactDto } from './dto/create-team-fact.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('team-facts')
export class TeamFactsController {
  constructor(private readonly teamFactsService: TeamFactsService) {}

  @Get()
  findAll() {
    return this.teamFactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamFactsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTeamFactDto: CreateTeamFactDto) {
    return this.teamFactsService.create(createTeamFactDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeamFactDto: any) {
    return this.teamFactsService.update(id, updateTeamFactDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamFactsService.remove(id);
  }
}
