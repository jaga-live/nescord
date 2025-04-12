// Original file: apps/ws/src/proto/ws.proto

import type { GuildMessage as _ws_GuildMessage, GuildMessage__Output as _ws_GuildMessage__Output } from '../ws/GuildMessage';

export interface GuildMessageUpdate {
  'oldMessage'?: (_ws_GuildMessage | null);
  'newMessage'?: (_ws_GuildMessage | null);
}

export interface GuildMessageUpdate__Output {
  'oldMessage'?: (_ws_GuildMessage__Output);
  'newMessage'?: (_ws_GuildMessage__Output);
}
