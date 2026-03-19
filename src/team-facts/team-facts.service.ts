import { Injectable } from '@nestjs/common';
import { RethinkService } from '../providers/rethink.service';
import { CreateTeamFactDto } from './dto/create-team-fact.dto';

@Injectable()
export class TeamFactsService {
  private readonly tableName = 'team_facts';

  constructor(private readonly rethinkService: RethinkService) {}

  async findAll() {
    return this.rethinkService.findAll(this.tableName);
  }

  async findOne(id: string) {
    return this.rethinkService.findById(this.tableName, id);
  }

  async create(createTeamFactDto: CreateTeamFactDto) {
    return this.rethinkService.insert(this.tableName, createTeamFactDto);
  }

  async update(id: string, updateTeamFactDto: any) {
    return this.rethinkService.update(this.tableName, id, updateTeamFactDto);
  }

  async remove(id: string) {
    return this.rethinkService.delete(this.tableName, id);
  }
}
