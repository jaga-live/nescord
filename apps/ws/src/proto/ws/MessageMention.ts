// Original file: apps/ws/src/proto/ws.proto

import type { MessageAuthor as _ws_MessageAuthor, MessageAuthor__Output as _ws_MessageAuthor__Output } from '../ws/MessageAuthor';

export interface MessageMention {
  'everyone'?: (boolean);
  'users'?: (_ws_MessageAuthor)[];
}

export interface MessageMention__Output {
  'everyone'?: (boolean);
  'users'?: (_ws_MessageAuthor__Output)[];
}
