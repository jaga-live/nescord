// Original file: apps/ws/src/proto/ws.proto

import type { Long } from '@grpc/proto-loader';

export interface Guild {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'icon'?: (string);
  'features'?: (string)[];
  'joinedAt'?: (string);
  'maxMembers'?: (number | string | Long);
  'rulesChannelId'?: (string);
  'publicUpdatesChannelId'?: (string);
  'preferredLocale'?: (string);
  'ownerId'?: (string);
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
  'premiumSubscriptionCount'?: (number);
}

export interface Guild__Output {
  'id'?: (string);
  'name'?: (string);
  'description'?: (string);
  'icon'?: (string);
  'features'?: (string)[];
  'joinedAt'?: (string);
  'maxMembers'?: (Long);
  'rulesChannelId'?: (string);
  'publicUpdatesChannelId'?: (string);
  'preferredLocale'?: (string);
  'ownerId'?: (string);
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
  'premiumSubscriptionCount'?: (number);
}
