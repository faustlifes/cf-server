import { Module } from '@nestjs/common';
import { TeammatesController } from './teammates.controller';
import { TeammatesService } from './teammates.service';

@Module({
  controllers: [TeammatesController],
  providers: [TeammatesService]
})
export class TeammatesModule {}
