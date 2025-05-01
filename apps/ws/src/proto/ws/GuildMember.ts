// Original file: apps/ws/src/proto/ws.proto

import type { GuildRole as _ws_GuildRole, GuildRole__Output as _ws_GuildRole__Output } from '../ws/GuildRole';
import type { Guild as _ws_Guild, Guild__Output as _ws_Guild__Output } from '../ws/Guild';

export interface GuildMember {
  'id'?: (string);
  'username'?: (string);
  'guildId'?: (string);
  'displayName'?: (string);
  'globalName'?: (string);
  'avatar'?: (string);
  'accent'?: (number);
  'bot'?: (boolean);
  'system'?: (boolean);
  'roles'?: (_ws_GuildRole)[];
  'permissions'?: (string)[];
  'joinedAt'?: (string);
  'createdAt'?: (string);
  'pending'?: (boolean);
  'guild'?: (_ws_Guild | null);
}

export interface GuildMember__Output {
  'id'?: (string);
  'username'?: (string);
  'guildId'?: (string);
  'displayName'?: (string);
  'globalName'?: (string);
  'avatar'?: (string);
  'accent'?: (number);
  'bot'?: (boolean);
  'system'?: (boolean);
  'roles'?: (_ws_GuildRole__Output)[];
  'permissions'?: (string)[];
  'joinedAt'?: (string);
  'createdAt'?: (string);
  'pending'?: (boolean);
  'guild'?: (_ws_Guild__Output);
}
