import { Keyv } from 'keyv';
import { RestServerOptions } from '../../interface/rest-server.interface';
import { DataFormat } from '../../interface/rest-client.interface';
import { MemberDto } from '../../dto/member.dto';

export class CacheService {
  private static instance: CacheService;
  private options: RestServerOptions;
  private memberCache: Keyv;
  private guildCache: Keyv;

  private constructor(options: RestServerOptions) {
    this.options = options;
    this.memberCache = new Keyv();
    this.guildCache = new Keyv();
  }

  public static initialize(options: RestServerOptions): void {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService(options);
    }
  }

  public static getInstance(options: RestServerOptions): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService(options);
    }

    return CacheService.instance;
  }

  async setMember(memberId: string, member: any) {
    await this.memberCache.set(
      memberId,
      member,
      this.options.cache?.member || 1000 * 60 * 60 * 24,
    );
  }

  async getMember(memberId: string, format = DataFormat.Raw) {
    const cache = await this.memberCache.get(memberId);

    if (!cache) {
      return null;
    }

    return format === DataFormat.Formatted ? new MemberDto(cache) : cache;
  }

  async setGuild(guildId: string, guild: any) {
    await this.guildCache.set(
      guildId,
      guild,
      this.options.cache?.guild || 1000 * 60 * 60 * 24,
    );
  }

  async getGuild(guildId: string, format = DataFormat.Raw) {
    const cache = await this.guildCache.get(guildId);

    if (!cache) {
      return null;
    }

    return format === DataFormat.Formatted ? new MemberDto(cache) : cache;
  }
}
