// Original file: apps/ws/src/proto/ws.proto

import type { GuildRole as _ws_GuildRole, GuildRole__Output as _ws_GuildRole__Output } from '../ws/GuildRole';

export interface GuildRoleUpdate {
  'oldRole'?: (_ws_GuildRole | null);
  'newRole'?: (_ws_GuildRole | null);
}

export interface GuildRoleUpdate__Output {
  'oldRole'?: (_ws_GuildRole__Output);
  'newRole'?: (_ws_GuildRole__Output);
}
