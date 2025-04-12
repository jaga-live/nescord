import { Message, MessageReaction, TextChannel, User } from 'discord.js';
import { GuildChannelDto } from './guild-channel.dto';
import { GuildMemberDto, GuildUserDto } from './guild-member.dto';
import { GuildDto } from './guild.dto';

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
  public reference: { guildId: string; channelId: string; messageId: string };
  public createdAt: Date;
  public channel: GuildChannelDto;
  public guild: GuildDto;

  constructor(message: Message) {
    this.id = message.id;
    this.guildId = message.guildId;
    this.channelId = message.channelId;
    this.content = message.content;
    this.mentions = this.extractMessageMentions(message);
    this.attachments = message.attachments.map(
      (e) => new GuildMessageAttachmentsDto(e),
    );
    this.reference = message.reference;
    this.createdAt = message.createdAt;
    this.channel = new GuildChannelDto(message.channel as TextChannel);
    this.guild = new GuildDto(message.guild);

    const guildMember = {
      ...message.author,
      guild: { id: message.guildId },
      user: {
        username: message.author.username,
        globalName: message.author.globalName,
        banner: message.author.banner,
        bot: message.author.bot,
        system: message.author.system,
      },
      displayName: message.author.displayName,
      roles: message.member.roles,
      permissions: message.member.permissions,
    };

    this.author = new GuildMemberDto(guildMember as any);
  }

  private extractMessageMentions(message: Message) {
    return {
      everyone: message.mentions.everyone,
      users: message.mentions.users.map((user) => ({
        id: user.id,
        bot: user.bot,
        system: user.system,
        username: user.username,
        globalName: user.globalName,
        avatar: user.avatar,
      })),
    };
  }
}

export class GuildMessageUpdateDto {
  public oldMessage: GuildMessageDto;
  public newMessage: GuildMessageDto;

  constructor(oldMessage: Message, newMessage: Message) {
    this.oldMessage = new GuildMessageDto(oldMessage);
    this.newMessage = new GuildMessageDto(newMessage);
  }
}

export class GuildMessageReactionDto extends GuildMessageDto {
  public emoji: GuildMessageEmoji;
  public reactions: GuildMessageEmoji[] = [];

  constructor(message: MessageReaction, member: User) {
    super(message.message as Message);

    this.emoji = {
      id: message.emoji.id,
      name: message.emoji.name,
      animated: message.emoji.animated,
      imageURL: message.emoji.imageURL(),
      createdAt: this.createdAt,
      user: new GuildUserDto(member),
    };

    for (const reaction of message.message.reactions.cache) {
      this.reactions.push({
        id: reaction[1].emoji.id,
        name: reaction[1].emoji.name,
        animated: reaction[1].emoji.animated,
      });
    }
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

  constructor(attachment) {
    this.name = attachment.name;
    this.id = attachment.id;
    this.size = attachment.size;
    this.url = attachment.url;
    this.proxyURL = attachment.proxyURL;
    this.height = attachment.height;
    this.width = attachment.width;
    this.contentType = attachment.contentType;
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
  user?: GuildUserDto;
  imageURL?: string;
  createdAt?: Date;
}
