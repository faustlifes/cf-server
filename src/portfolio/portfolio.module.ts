import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { PortfolioItemEntity } from '../entities/PortfolioItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PortfolioItemEntity])],
  controllers: [PortfolioController],
  providers: [PortfolioService]
})
export class PortfolioModule {}
