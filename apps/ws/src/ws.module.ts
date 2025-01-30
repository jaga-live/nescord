import { Module } from '@nestjs/common';
import { WsController } from './ws.controller';
import { WsService } from './ws.service';

@Module({
  imports: [],
  controllers: [WsController],
  providers: [WsService],
})
export class WsModule {}
