import { GuildMember, PartialGuildMember, Role, User } from 'discord.js';
import { GuildRoleDto } from './guild-role.dto';
import { GuildDto } from './guild.dto';

export class GuildMemberDto {
  public id: string;
  public username: string;
  public guildId: string;
  public displayName: string;
  public globalName: string;
  public avatar: string;
  public banner: string;
  public accent: number;
  public bot: boolean;
  public system: boolean;
  public roles: GuildRoleDto[];
  public permissions: string[];
  public joinedAt: Date;
  public createdAt: Date;
  public pending: boolean;
  public guild: GuildDto;

  constructor(member?: GuildMember | PartialGuildMember) {
    if (!member) {
      return;
    }

    this.id = member.id;
    this.guildId = member.guild?.id;
    this.username = member.user?.username;
    this.displayName = member.displayName;
    this.globalName = member.user?.globalName;
    this.avatar = member.avatar;
    this.banner = member.user?.banner;
    this.bot = member.user?.bot;
    this.system = member.user?.system;
    this.roles = member.roles?.cache?.map((role) => new GuildRoleDto(role));
    this.permissions = member.permissions?.toArray();
    this.joinedAt = member.joinedAt;
    this.createdAt = member.user?.createdAt;
    this.pending = member.pending;
    this.guild = new GuildDto(member.guild);
  }

  public static fromApiResponse(data: any): GuildMemberDto {
    const guildMemberDto: GuildMemberDto = new GuildMemberDto();

    guildMemberDto.id = data.user?.id;
    guildMemberDto.globalName = data.user?.global_name;
    guildMemberDto.username = data.user?.username;
    guildMemberDto.displayName = data.nick;
    guildMemberDto.guildId = data.guild_id;
    guildMemberDto.avatar = data.user?.avatar;
    guildMemberDto.banner = data.user?.banner;
    guildMemberDto.bot = data.user?.bot;
    guildMemberDto.system = data.user?.system;
    guildMemberDto.accent = data.user?.accent_color;
    guildMemberDto.roles = data.roles?.map(
      (roleId: string) => new GuildRoleDto({ id: roleId } as Role),
    );
    guildMemberDto.joinedAt = data.joined_at;
    guildMemberDto.pending = data.pending;

    return guildMemberDto;
  }
}

export class GuildMemberUpdateDto {
  public oldMember: GuildMemberDto;
  public newMember: GuildMemberDto;

  constructor(
    oldMember: GuildMember | PartialGuildMember,
    newMember: GuildMember | PartialGuildMember,
  ) {
    this.oldMember = new GuildMemberDto(oldMember);
    this.newMember = new GuildMemberDto(newMember);
  }
}

export class GuildUserDto {
  public id: string;
  public username: string;
  public globalName: string;
  public avatar: string;
  public banner: string;
  public accent: number;
  public bot: boolean;
  public system: boolean;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.globalName = user.globalName;
    this.avatar = user.avatar;
    this.banner = user.banner;
    this.bot = user.bot;
    this.system = user.system;
  }
}
