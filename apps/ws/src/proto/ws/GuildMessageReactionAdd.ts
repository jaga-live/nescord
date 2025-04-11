// Original file: apps/ws/src/proto/ws.proto

import type { GuildMember as _ws_GuildMember, GuildMember__Output as _ws_GuildMember__Output } from '../ws/GuildMember';
import type { MessageMention as _ws_MessageMention, MessageMention__Output as _ws_MessageMention__Output } from '../ws/MessageMention';
import type { MessageAttachment as _ws_MessageAttachment, MessageAttachment__Output as _ws_MessageAttachment__Output } from '../ws/MessageAttachment';
import type { GuildChannel as _ws_GuildChannel, GuildChannel__Output as _ws_GuildChannel__Output } from '../ws/GuildChannel';
import type { Guild as _ws_Guild, Guild__Output as _ws_Guild__Output } from '../ws/Guild';
import type { GuildEmoji as _ws_GuildEmoji, GuildEmoji__Output as _ws_GuildEmoji__Output } from '../ws/GuildEmoji';

export interface GuildMessageReactionAdd {
  'id'?: (string);
  'guildId'?: (string);
  'channelId'?: (string);
  'author'?: (_ws_GuildMember | null);
  'content'?: (string);
  'mentions'?: (_ws_MessageMention | null);
  'attachments'?: (_ws_MessageAttachment)[];
  'createdAt'?: (string);
  'channel'?: (_ws_GuildChannel | null);
  'guild'?: (_ws_Guild | null);
  'emoji'?: (_ws_GuildEmoji | null);
  'reactions'?: (_ws_GuildEmoji)[];
}

export interface GuildMessageReactionAdd__Output {
  'id'?: (string);
  'guildId'?: (string);
  'channelId'?: (string);
  'author'?: (_ws_GuildMember__Output);
  'content'?: (string);
  'mentions'?: (_ws_MessageMention__Output);
  'attachments'?: (_ws_MessageAttachment__Output)[];
  'createdAt'?: (string);
  'channel'?: (_ws_GuildChannel__Output);
  'guild'?: (_ws_Guild__Output);
  'emoji'?: (_ws_GuildEmoji__Output);
  'reactions'?: (_ws_GuildEmoji__Output)[];
}
