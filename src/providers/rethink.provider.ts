import * as rethink from 'rethinkdb';
import { ConfigService } from '@nestjs/config';

export const RethinkProvider = {
  provide: 'RethinkProvider',
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const host = configService.get<string>('DB_HOST', 'localhost');
    const port = configService.get<number>('DB_PORT', 28015);
    const conn = await rethink.connect({ host, port });
    return conn;
  },
};
