import { GuildMemberDto } from './guild-member.dto';

export class GuildMessageDto {
  public id: string;
  public guildId: string;
  public channelId: string;
  public author: GuildMemberDto;
  public content: string;
  public mentions: {
    everyone: boolean;
    users: Array<MessageAuthor>;
  };
  public attachments: GuildMessageAttachmentsDto[];
  public reference: {
    messageId: string;
    guildId: string;
    channelId: string;
    type: number;
  };
  public timestamp: string;
  public edited_timestamp: string;

  constructor(message: any) {
    this.id = message.id;
    this.guildId = message.guild_id;
    this.channelId = message.channel_id;
    this.content = message.content;
    this.mentions = this.extractMessageMentions(message);
    this.attachments = message.attachments?.map(
      (e: any) => new GuildMessageAttachmentsDto(e),
    );
    this.reference = {
      messageId: message.message_reference?.message_id,
      guildId: message.message_reference?.guild_id,
      channelId: message.message_reference?.channel_id,
      type: message.message_reference?.type,
    };
    this.timestamp = message.timestamp;
    this.edited_timestamp = message.edited_timestamp;

    const guildMember = {
      user: message.author,
      roles: message.member?.roles,
      joined_at: message.member?.joined_at,
      pending: message.member?.pending,
      banner: message.member?.banner,
      avatar: message.member?.avatar,
      guild_id: message.guild_id,
    };

    this.author = new GuildMemberDto(guildMember);
  }

  private extractMessageMentions(message: any) {
    return {
      everyone: message.mention_everyone,
      users: message.mentions?.map((user: any) => ({
        id: user.id,
        bot: user.bot === true,
        system: user.system === true,
        username: user.username,
        globalName: user.global_name,
        avatar: user.avatar,
      })),
    };
  }
}

export class GuildMessageReactionDto {
  public messageId: string;
  public messageAuthorId: string;
  public channelId: string;
  public guildId: string;
  public author: GuildMemberDto;
  public authorId: string;
  public emoji: GuildMessageEmoji;

  constructor(message: any) {
    this.messageId = message.message_id;
    this.messageAuthorId = message.message_author_id;
    this.channelId = message.channel_id;
    this.guildId = message.guild_id;
    this.author = new GuildMemberDto(message.member);
    this.authorId = message.user_id;
    this.emoji = {
      name: message.emoji?.name,
      id: message.emoji?.id,
      animated: message.emoji?.animated === true,
    };
  }
}

export class GuildMessageAttachmentsDto {
  public name: string;
  public id: string;
  public size: number;
  public url: string;
  public proxyURL: string;
  public height: number;
  public width: number;
  public contentType: string;
  public description: string;

  constructor(attachment: any) {
    this.name = attachment.filename;
    this.id = attachment.id;
    this.size = attachment.size;
    this.url = attachment.url;
    this.proxyURL = attachment.proxy_url;
    this.height = attachment.height;
    this.width = attachment.width;
    this.contentType = attachment.content_type;
    this.description = attachment.description;
  }
}

class MessageAuthor {
  id: string;
  bot: boolean;
  system: boolean;
  username: string;
  globalName: string;
  avatar: string;
}

class GuildMessageEmoji {
  name: string;
  id: string;
  animated: boolean;
}
