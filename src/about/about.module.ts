import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutController } from './about.controller';
import { AboutService } from './about.service';
import { AboutContentEntity } from '../entities/AboutContent.entity';
import { SkillEntity } from '../entities/Skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AboutContentEntity, SkillEntity])],
  controllers: [AboutController],
  providers: [AboutService]
})
export class AboutModule {}
