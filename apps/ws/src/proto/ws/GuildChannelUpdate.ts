// Original file: apps/ws/src/proto/ws.proto

import type { GuildChannel as _ws_GuildChannel, GuildChannel__Output as _ws_GuildChannel__Output } from '../ws/GuildChannel';

export interface GuildChannelUpdate {
  'oldChannel'?: (_ws_GuildChannel | null);
  'newChannel'?: (_ws_GuildChannel | null);
}

export interface GuildChannelUpdate__Output {
  'oldChannel'?: (_ws_GuildChannel__Output);
  'newChannel'?: (_ws_GuildChannel__Output);
}
