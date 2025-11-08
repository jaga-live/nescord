// Original file: apps/ws/src/proto/ws.proto

import type { GuildMember as _ws_GuildMember, GuildMember__Output as _ws_GuildMember__Output } from '../ws/GuildMember';
import type { MessageMention as _ws_MessageMention, MessageMention__Output as _ws_MessageMention__Output } from '../ws/MessageMention';
import type { MessageAttachment as _ws_MessageAttachment, MessageAttachment__Output as _ws_MessageAttachment__Output } from '../ws/MessageAttachment';
import type { MessageReference as _ws_MessageReference, MessageReference__Output as _ws_MessageReference__Output } from '../ws/MessageReference';

export interface GuildMessage {
  'id'?: (string);
  'guildId'?: (string);
  'channelId'?: (string);
  'author'?: (_ws_GuildMember | null);
  'content'?: (string);
  'mentions'?: (_ws_MessageMention | null);
  'attachments'?: (_ws_MessageAttachment)[];
  'reference'?: (_ws_MessageReference | null);
  'timestamp'?: (string);
  'editedTimestamp'?: (string);
}

export interface GuildMessage__Output {
  'id'?: (string);
  'guildId'?: (string);
  'channelId'?: (string);
  'author'?: (_ws_GuildMember__Output);
  'content'?: (string);
  'mentions'?: (_ws_MessageMention__Output);
  'attachments'?: (_ws_MessageAttachment__Output)[];
  'reference'?: (_ws_MessageReference__Output);
  'timestamp'?: (string);
  'editedTimestamp'?: (string);
}
