import { Controller, Get } from '@nestjs/common';
import { WsService } from './ws.service';

@Controller()
export class WsController {
  constructor(private readonly wsService: WsService) {}

  @Get()
  getHello(): string {
    return this.wsService.getHello();
  }
}
