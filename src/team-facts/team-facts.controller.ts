import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeamFactsService } from './team-facts.service';
import { CreateTeamFactDto } from './dto/create-team-fact.dto';
import { BaseController } from '../common/base.controller';
import { Public } from '../auth/public.decorator';

@Controller('team-facts')
export class TeamFactsController extends BaseController {
  constructor(private readonly teamFactsService: TeamFactsService) {
    super();
  }

  @Public()
  @Get()
  findAll() {
    return this.teamFactsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamFactsService.findOne(id);
  }

  @Post()
  create(@Body() createTeamFactDto: CreateTeamFactDto) {
    return this.teamFactsService.create(createTeamFactDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeamFactDto: any) {
    return this.teamFactsService.update(id, updateTeamFactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamFactsService.remove(id);
  }
}
