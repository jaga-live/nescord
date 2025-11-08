// Original file: apps/ws/src/proto/ws.proto

import type { ChannelPermissionOverwrites as _ws_ChannelPermissionOverwrites, ChannelPermissionOverwrites__Output as _ws_ChannelPermissionOverwrites__Output } from '../ws/ChannelPermissionOverwrites';
import type { Long } from '@grpc/proto-loader';

export interface GuildChannel {
  'id'?: (string);
  'guildId'?: (string);
  'name'?: (string);
  'topic'?: (string);
  'type'?: (number);
  'parentId'?: (string);
  'position'?: (number);
  'lastMessageId'?: (string);
  'nsfw'?: (boolean);
  'rateLimitPerUser'?: (number);
  'userLimit'?: (number);
  'bitrate'?: (number | string | Long);
  'permissionOverwrites'?: (_ws_ChannelPermissionOverwrites)[];
}

export interface GuildChannel__Output {
  'id'?: (string);
  'guildId'?: (string);
  'name'?: (string);
  'topic'?: (string);
  'type'?: (number);
  'parentId'?: (string);
  'position'?: (number);
  'lastMessageId'?: (string);
  'nsfw'?: (boolean);
  'rateLimitPerUser'?: (number);
  'userLimit'?: (number);
  'bitrate'?: (Long);
  'permissionOverwrites'?: (_ws_ChannelPermissionOverwrites__Output)[];
}
