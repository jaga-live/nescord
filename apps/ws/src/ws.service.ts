import { Injectable } from '@nestjs/common';

@Injectable()
export class WsService {
  getHello(): string {
    return 'Hello World!';
  }
}
