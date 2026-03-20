import { Controller } from '@nestjs/common';
import { BaseController } from '../common/base.controller';

@Controller('content')
export class ContentController extends BaseController {
  constructor() {
    super();
  }
}
