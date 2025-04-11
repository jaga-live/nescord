// Original file: apps/ws/src/proto/ws.proto

import type { Guild as _ws_Guild, Guild__Output as _ws_Guild__Output } from '../ws/Guild';

export interface GuildUpdate {
  'oldGuild'?: (_ws_Guild | null);
  'newGuild'?: (_ws_Guild | null);
}

export interface GuildUpdate__Output {
  'oldGuild'?: (_ws_Guild__Output);
  'newGuild'?: (_ws_Guild__Output);
}
