import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SliderController } from './slider.controller';
import { SliderService } from './slider.service';
import { SliderItemEntity } from '../entities/SliderItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SliderItemEntity])],
  controllers: [SliderController],
  providers: [SliderService]
})
export class SliderModule {}
