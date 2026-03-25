import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';
import { ServiceItemEntity } from '../entities/ServiceItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceItemEntity])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}
