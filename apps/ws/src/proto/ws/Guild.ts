// Original file: apps/ws/src/proto/ws.proto

import type { Long } from '@grpc/proto-loader';

export interface Guild {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'icon'?: (string);
  'features'?: (string)[];
  'joinedTimestamp'?: (number | string | Long);
  'maximumMembers'?: (number | string | Long);
  'rulesChannelId'?: (string);
  'publicUpdatesChannelId'?: (string);
  'preferredLocale'?: (string);
  'ownerId'?: (string);
  'memberCount'?: (number | string | Long);
  'channelCount'?: (number);
  'verificationLevel'?: (number);
  'premiumTier'?: (number);
  'mfaLevel'?: (number);
  'afkChannelId'?: (string);
  'afkTimeout'?: (number);
  'systemChannelId'?: (string);
  'systemChannelFlags'?: (number);
  'defaultMessageNotifications'?: (number);
  'explicitContentFilter'?: (number);
  'premiumProgressBarEnabled'?: (boolean);
  'createdAt'?: (string);
}

export interface Guild__Output {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'icon'?: (string);
  'features'?: (string)[];
  'joinedTimestamp'?: (Long);
  'maximumMembers'?: (Long);
  'rulesChannelId'?: (string);
  'publicUpdatesChannelId'?: (string);
  'preferredLocale'?: (string);
  'ownerId'?: (string);
  'memberCount'?: (Long);
  'channelCount'?: (number);
  'verificationLevel'?: (number);
  'premiumTier'?: (number);
  'mfaLevel'?: (number);
  'afkChannelId'?: (string);
  'afkTimeout'?: (number);
  'systemChannelId'?: (string);
  'systemChannelFlags'?: (number);
  'defaultMessageNotifications'?: (number);
  'explicitContentFilter'?: (number);
  'premiumProgressBarEnabled'?: (boolean);
  'createdAt'?: (string);
}
