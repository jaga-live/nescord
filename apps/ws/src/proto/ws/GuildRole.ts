// Original file: apps/ws/src/proto/ws.proto


export interface GuildRole {
  'id'?: (string);
  'name'?: (string);
  'guildId'?: (string);
  'color'?: (number);
  'permissions'?: (string);
  'position'?: (number);
  'managed'?: (boolean);
  'mentionable'?: (boolean);
  'flags'?: (string);
  'icon'?: (string);
  'hoist'?: (boolean);
  'createdAt'?: (string);
}

export interface GuildRole__Output {
  'id'?: (string);
  'name'?: (string);
  'guildId'?: (string);
  'color'?: (number);
  'permissions'?: (string);
  'position'?: (number);
  'managed'?: (boolean);
  'mentionable'?: (boolean);
  'flags'?: (string);
  'icon'?: (string);
  'hoist'?: (boolean);
  'createdAt'?: (string);
}
