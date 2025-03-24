import { injectable } from 'inversify';
import { MessageService } from './message.service';
import { MemberServerService } from './member.service';
import { RestServerOptions } from '../../interface/rest-server.interface';

@injectable()
export class ResourceHandlerService {
  private messageService: MessageService;
  private memberServerService: MemberServerService;

  constructor(options: RestServerOptions) {
    this.messageService = new MessageService(options);
    this.memberServerService = new MemberServerService(options);
  }

  async handle(request: any) {
    if (request.body) {
      request.body = JSON.parse(request.body);
    }

    switch (request.resource) {
      case 'message': {
        return this.messageService.handle(request);
      }

      case 'member': {
        return this.memberServerService.handle(request);
      }
    }
  }
}
