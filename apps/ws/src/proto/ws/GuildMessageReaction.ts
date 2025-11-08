// Original file: apps/ws/src/proto/ws.proto

import type { GuildMember as _ws_GuildMember, GuildMember__Output as _ws_GuildMember__Output } from '../ws/GuildMember';
import type { GuildEmoji as _ws_GuildEmoji, GuildEmoji__Output as _ws_GuildEmoji__Output } from '../ws/GuildEmoji';

export interface GuildMessageReaction {
  'messageId'?: (string);
  'messageAuthorId'?: (string);
  'channelId'?: (string);
  'guildId'?: (string);
  'author'?: (_ws_GuildMember | null);
  'authorId'?: (string);
  'emoji'?: (_ws_GuildEmoji | null);
}

export interface GuildMessageReaction__Output {
  'messageId'?: (string);
  'messageAuthorId'?: (string);
  'channelId'?: (string);
  'guildId'?: (string);
  'author'?: (_ws_GuildMember__Output);
  'authorId'?: (string);
  'emoji'?: (_ws_GuildEmoji__Output);
}
