import { Module, Global } from '@nestjs/common';
import { RethinkProvider } from './rethink.provider';
import { RethinkService } from './rethink.service';

@Global()
@Module({
  providers: [RethinkProvider, RethinkService],
  exports: [RethinkProvider, RethinkService],
})
export class DatabaseModule {}
