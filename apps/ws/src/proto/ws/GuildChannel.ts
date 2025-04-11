// Original file: apps/ws/src/proto/ws.proto

import type { IdName as _ws_IdName, IdName__Output as _ws_IdName__Output } from '../ws/IdName';
import type { ChannelPermissionOverwrites as _ws_ChannelPermissionOverwrites, ChannelPermissionOverwrites__Output as _ws_ChannelPermissionOverwrites__Output } from '../ws/ChannelPermissionOverwrites';
import type { Guild as _ws_Guild, Guild__Output as _ws_Guild__Output } from '../ws/Guild';
import type { Long } from '@grpc/proto-loader';

export interface GuildChannel {
  'id'?: (string);
  'name'?: (string);
  'guildId'?: (string);
  'parent'?: (_ws_IdName | null);
  'topic'?: (string);
  'position'?: (number);
  'lastMessageId'?: (string);
  'nsfw'?: (boolean);
  'rateLimitPerUser'?: (number);
  'type'?: (number);
  'bitrate'?: (number | string | Long);
  'permissionOverwrites'?: (_ws_ChannelPermissionOverwrites)[];
  'guild'?: (_ws_Guild | null);
}

export interface GuildChannel__Output {
  'id'?: (string);
  'name'?: (string);
  'guildId'?: (string);
  'parent'?: (_ws_IdName__Output);
  'topic'?: (string);
  'position'?: (number);
  'lastMessageId'?: (string);
  'nsfw'?: (boolean);
  'rateLimitPerUser'?: (number);
  'type'?: (number);
  'bitrate'?: (Long);
  'permissionOverwrites'?: (_ws_ChannelPermissionOverwrites__Output)[];
  'guild'?: (_ws_Guild__Output);
}
