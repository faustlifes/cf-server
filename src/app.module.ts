import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './providers/database.module';
import { NewsModule } from './news/news.module';
import { ContentModule } from './content/content.module';
import { TeammatesModule } from './teammates/teammates.module';
import { AuthModule } from './auth/auth.module';
import { SliderModule } from './slider/slider.module';
import { AboutModule } from './about/about.module';
import { ServiceModule } from './service/service.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { TeamFactsModule } from './team-facts/team-facts.module';
import { FeedbackModule } from './feedback/feedback.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 100,
    }]),
    DatabaseModule,
    NewsModule,
    ContentModule,
    TeammatesModule,
    AuthModule,
    SliderModule,
    AboutModule,
    ServiceModule,
    PortfolioModule,
    TeamFactsModule,
    FeedbackModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
