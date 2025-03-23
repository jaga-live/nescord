import { injectable } from 'inversify';
import { MemberServerService } from './member-server.service';
import { RestServerOptions } from '../../interface/rest-server.interface';

@injectable()
export class ResourceHandlerService {
  private memberServerService: MemberServerService;

  constructor(options: RestServerOptions) {
    this.memberServerService = new MemberServerService(options);
  }

  async handle(request: any) {
    switch (request.resource) {
      case 'member':
        return this.memberServerService.handle(request);
    }
  }
}
