import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeammatesController } from './teammates.controller';
import { TeammatesService } from './teammates.service';
import { TeammateEntity } from '../entities/Teammate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeammateEntity])],
  controllers: [TeammatesController],
  providers: [TeammatesService]
})
export class TeammatesModule {}
