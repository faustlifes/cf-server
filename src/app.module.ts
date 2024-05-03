import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './controllers/user.controller';
import { AppService } from './app.service';
import { MysqlModule } from './providers/mysql.module';

@Module({
  imports: [MysqlModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
