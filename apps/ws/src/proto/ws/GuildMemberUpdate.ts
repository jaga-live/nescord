// Original file: apps/ws/src/proto/ws.proto

import type { GuildMember as _ws_GuildMember, GuildMember__Output as _ws_GuildMember__Output } from '../ws/GuildMember';

export interface GuildMemberUpdate {
  'oldMember'?: (_ws_GuildMember | null);
  'newMember'?: (_ws_GuildMember | null);
}

export interface GuildMemberUpdate__Output {
  'oldMember'?: (_ws_GuildMember__Output);
  'newMember'?: (_ws_GuildMember__Output);
}
