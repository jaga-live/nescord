export class GuildChannelDto {
  public id: string;
  public guildId: string;
  public name: string;
  public topic: string;
  public type: number;
  public parentId: string;
  public position: number;
  public lastMessageId: string;
  public nsfw: boolean;
  public rateLimitPerUser: number;
  public userLimit: number;
  public bitrate: number;
  public permissionOverwrites: ChannelPermissionOverwritesDto[];

  constructor(channel: any) {
    if (!channel) {
      return;
    }

    this.id = channel.id;
    this.guildId = channel.guild_id;
    this.name = channel.name;
    this.topic = channel.topic;
    this.type = channel.type;
    this.parentId = channel.parent_id;
    this.position = channel.position;
    this.lastMessageId = channel.last_message_id;
    this.nsfw = channel.nsfw;
    this.rateLimitPerUser = channel.rate_limit_per_user;
    this.userLimit = channel.user_limit;
    this.bitrate = channel.bitrate;
    this.permissionOverwrites = channel.permission_overwrites;
  }
}

export class ChannelPermissionOverwritesDto {
  id: string;
  type: number;
  deny: string;
  allow: string;
}
