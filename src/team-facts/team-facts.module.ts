import { Module } from '@nestjs/common';
import { TeamFactsController } from './team-facts.controller';
import { TeamFactsService } from './team-facts.service';

@Module({
  controllers: [TeamFactsController],
  providers: [TeamFactsService]
})
export class TeamFactsModule {}
