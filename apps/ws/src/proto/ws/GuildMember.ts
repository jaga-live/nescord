// Original file: apps/ws/src/proto/ws.proto


export interface GuildMember {
  'id'?: (string);
  'username'?: (string);
  'guildId'?: (string);
  'globalName'?: (string);
  'displayName'?: (string);
  'nick'?: (string);
  'avatar'?: (string);
  'banner'?: (string);
  'userAvatar'?: (string);
  'userBanner'?: (string);
  'bot'?: (boolean);
  'system'?: (boolean);
  'roleIds'?: (string)[];
  'joinedAt'?: (string);
  'pending'?: (boolean);
  'discriminator'?: (string);
}

export interface GuildMember__Output {
  'id'?: (string);
  'username'?: (string);
  'guildId'?: (string);
  'globalName'?: (string);
  'displayName'?: (string);
  'nick'?: (string);
  'avatar'?: (string);
  'banner'?: (string);
  'userAvatar'?: (string);
  'userBanner'?: (string);
  'bot'?: (boolean);
  'system'?: (boolean);
  'roleIds'?: (string)[];
  'joinedAt'?: (string);
  'pending'?: (boolean);
  'discriminator'?: (string);
}
