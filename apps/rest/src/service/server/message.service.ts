import { RestManager } from '@discordeno/rest';
import { RestService } from '../rest.service';
import { RestServerOptions } from '../../interface/rest-server.interface';

export class MessageService {
  private discordRest: RestManager;

  constructor(options: RestServerOptions) {
    this.discordRest = RestService.getInstance(options).discordRest;
  }

  async handle(request: any) {
    return this[request.action](request);
  }

  async sendMessage(request: any) {
    const { query, body } = request;

    await this.discordRest.sendMessage(query.channelId, {
      content: body.content,
    });
  }
}
