// Original file: apps/ws/src/proto/ws.proto

import type { GuildMember as _ws_GuildMember, GuildMember__Output as _ws_GuildMember__Output } from '../ws/GuildMember';

export interface GuildMemberVoiceState {
  'member'?: (_ws_GuildMember | null);
  'guildId'?: (string);
  'channelId'?: (string);
  'sessionId'?: (string);
  'deaf'?: (boolean);
  'mute'?: (boolean);
  'selfDeaf'?: (boolean);
  'selfMute'?: (boolean);
  'selfVideo'?: (boolean);
  'suppress'?: (boolean);
}

export interface GuildMemberVoiceState__Output {
  'member'?: (_ws_GuildMember__Output);
  'guildId'?: (string);
  'channelId'?: (string);
  'sessionId'?: (string);
  'deaf'?: (boolean);
  'mute'?: (boolean);
  'selfDeaf'?: (boolean);
  'selfMute'?: (boolean);
  'selfVideo'?: (boolean);
  'suppress'?: (boolean);
}
