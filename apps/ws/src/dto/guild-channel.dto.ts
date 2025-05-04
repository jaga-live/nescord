import { OverwriteType, TextChannel, VoiceChannel } from 'discord.js';
import { IdNameDto } from './id-name.dto';
import { GuildDto } from './guild.dto';

export class GuildChannelDto {
  public id: string;
  public name: string;
  public guildId: string;
  public parent: IdNameDto;
  public topic: string;
  public position: number;
  public lastMessageId: string;
  public nsfw: boolean;
  public rateLimitPerUser: number;
  public type: number;
  public bitrate: number;
  public permissionOverwrites: ChannelPermissionOverwritesDto[];
  public guild: GuildDto;

  constructor(channel: TextChannel) {
    this.id = channel.id;
    this.name = channel.name;
    this.topic = channel.topic;
    this.type = channel.type;
    this.nsfw = channel.nsfw;
    this.guildId = channel.guildId;
    this.position = channel.rawPosition;
    this.lastMessageId = channel.lastMessageId;
    this.rateLimitPerUser = channel.rateLimitPerUser;
    this.permissionOverwrites = channel.permissionOverwrites?.cache?.map(
      (e) => ({
        id: e.id,
        type: e.type,
      }),
    );
    this.guild = new GuildDto(channel.guild);

    if (channel.parent) {
      this.parent = {
        id: channel.parent?.id,
        name: channel.parent?.name,
      };
    }

    //Voice Channel
    const voiceChannel = channel as unknown as VoiceChannel;
    this.bitrate = voiceChannel.bitrate;
  }
}

export class GuildChannelUpdateDto {
  public oldChannel: GuildChannelDto;
  public newChannel: GuildChannelDto;

  constructor(oldChannel: TextChannel, newChannel: TextChannel) {
    this.oldChannel = new GuildChannelDto(oldChannel);
    this.newChannel = new GuildChannelDto(newChannel);
  }
}

export class ChannelPermissionOverwritesDto {
  id: string;
  type: OverwriteType;
}
