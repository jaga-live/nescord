import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { EventsHandler } from './handlers/events.handler';

@Module({
  imports: [],
  controllers: [EventsHandler],
  providers: [CoreService],
})
export class CoreModule {}
