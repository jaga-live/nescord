import { RestManager } from '@discordeno/rest';
import { RestService } from '../rest.service';
import { CacheService } from './cache.service';
import { RestServerOptions } from '../../interface/rest-server.interface';

export class MemberServerService {
  private discordRest: RestManager;
  private cacheService: CacheService;

  constructor(options: RestServerOptions) {
    this.discordRest = RestService.getInstance(options).discordRest;
    this.cacheService = CacheService.getInstance(options);
  }

  async handle(request: any) {
    return this[request.action](request);
  }

  async getMember(request: any) {
    const { query, ignoreCache, format } = request;

    if (!ignoreCache) {
      const memberCache = await this.cacheService.getMember(
        query.memberId,
        format,
      );

      if (memberCache) {
        return memberCache;
      }
    }

    const data = await this.discordRest.getMember(
      query.guildId,
      query.memberId,
    );

    await this.cacheService.setMember(query.memberId, {
      ...data,
      guildId: query.guildId,
    });

    return data; //TODO add common helper for formatting data
  }
}
