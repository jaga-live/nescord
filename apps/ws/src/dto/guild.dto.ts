export class GuildDto {
  public id: string;
  public name: string;
  public description: string;
  public icon: string;
  public features: string[];
  public joinedAt: string;
  public maxMembers: number;
  public rulesChannelId: string;
  public publicUpdatesChannelId: string;
  public preferredLocale: string;
  public ownerId: string;
  public verificationLevel: number;
  public premiumTier: number;
  public mfaLevel: number;
  public afkChannelId: string;
  public afkTimeout: number;
  public systemChannelId: string;
  public systemChannelFlags: number;
  public defaultMessageNotifications: number;
  public explicitContentFilter: number;
  public premiumProgressBarEnabled: boolean;
  public premiumSubscriptionCount: number;

  constructor(guild: any) {
    if (!guild) {
      return;
    }

    this.id = guild.id;
    this.name = guild.name;
    this.description = guild.description;
    this.icon = guild.icon;
    this.features = guild.features;
    this.joinedAt = guild.joined_at;
    this.maxMembers = guild.max_members;
    this.rulesChannelId = guild.rules_channel_id;
    this.publicUpdatesChannelId = guild.public_updates_channel_id;
    this.preferredLocale = guild.preferred_locale;
    this.ownerId = guild.owner_id;
    this.verificationLevel = guild.verification_level;
    this.premiumTier = guild.premium_tier;
    this.mfaLevel = guild.mfa_level;
    this.afkChannelId = guild.afk_channel_id;
    this.afkTimeout = guild.afk_timeout;
    this.systemChannelId = guild.system_channel_id;
    this.systemChannelFlags = guild.system_channel_flags;
    this.defaultMessageNotifications = guild.default_message_notifications;
    this.explicitContentFilter = guild.explicit_content_filter;
    this.premiumProgressBarEnabled = guild.premium_progress_bar_enabled;
    this.premiumSubscriptionCount = guild.premium_subscription_count;
  }
}
