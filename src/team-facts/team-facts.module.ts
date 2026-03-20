import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamFactsController } from './team-facts.controller';
import { TeamFactsService } from './team-facts.service';
import { TeamFactEntity } from '../entities/TeamFact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamFactEntity])],
  controllers: [TeamFactsController],
  providers: [TeamFactsService]
})
export class TeamFactsModule {}
