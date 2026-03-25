import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseController } from './common/base.controller';
import { Public } from './auth/public.decorator';

@Controller()
export class AppController extends BaseController {
  constructor(private readonly appService: AppService) {
    super();
  }

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
