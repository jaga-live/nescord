// Original file: apps/ws/src/proto/ws.proto

import type { GuildUser as _ws_GuildUser, GuildUser__Output as _ws_GuildUser__Output } from '../ws/GuildUser';

export interface GuildEmoji {
  'id'?: (string);
  'name'?: (string);
  'animated'?: (boolean);
  'imageURL'?: (string);
  'createdAt'?: (string);
  'user'?: (_ws_GuildUser | null);
}

export interface GuildEmoji__Output {
  'id'?: (string);
  'name'?: (string);
  'animated'?: (boolean);
  'imageURL'?: (string);
  'createdAt'?: (string);
  'user'?: (_ws_GuildUser__Output);
}
