import { createRestManager, RestManager } from '@discordeno/rest';
import { RestServerOptions } from '../interface/rest-server.interface';

export class RestService {
  private static instance: RestService;
  public discordRest: RestManager;

  private constructor(options: RestServerOptions) {
    this.discordRest = createRestManager({
      token: options.botToken,
    });
  }

  public static initialize(options: RestServerOptions): void {
    if (!RestService.instance) {
      RestService.instance = new RestService(options);
    }
  }

  public static getInstance(options: RestServerOptions): RestService {
    if (!RestService.instance) {
      RestService.instance = new RestService(options);
    }

    return RestService.instance;
  }
}
