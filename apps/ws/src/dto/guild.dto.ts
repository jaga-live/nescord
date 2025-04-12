import {
  Guild,
  GuildDefaultMessageNotifications,
  GuildExplicitContentFilter,
  GuildMFALevel,
  GuildPremiumTier,
  GuildVerificationLevel,
} from 'discord.js';

export class GuildDto {
  public id: string;
  public name: string;
  public description: string;
  public icon: string;
  public features: string[];
  public joinedTimestamp: number;
  public maximumMembers: number;
  public rulesChannelId: string;
  public publicUpdatesChannelId: string;
  public preferredLocale: string;
  public ownerId: string;
  public memberCount: number;
  public channelCount: number;
  public verificationLevel: GuildVerificationLevel;
  public premiumTier: GuildPremiumTier;
  public mfaLevel: GuildMFALevel;
  public afkChannelId: string;
  public afkTimeout: number;
  public systemChannelId: string;
  public systemChannelFlags: string;
  public defaultMessageNotifications: GuildDefaultMessageNotifications;
  public explicitContentFilter: GuildExplicitContentFilter;
  public premiumProgressBarEnabled: boolean;
  public createdAt: Date;

  constructor(guild: Guild) {
    this.id = guild.id;
    this.name = guild.name;
    this.description = guild.description;
    this.icon = guild.icon;
    this.features = guild.features;
    this.joinedTimestamp = guild.joinedTimestamp;
    this.maximumMembers = guild.maximumMembers;
    this.rulesChannelId = guild.rulesChannelId;
    this.publicUpdatesChannelId = guild.publicUpdatesChannelId;
    this.preferredLocale = guild.preferredLocale;
    this.ownerId = guild.ownerId;
    this.memberCount = guild.memberCount;
    this.channelCount = guild.channels?.cache.size;
    this.verificationLevel = guild.verificationLevel;
    this.premiumTier = guild.premiumTier;
    this.mfaLevel = guild.mfaLevel;
    this.afkChannelId = guild.afkChannelId;
    this.afkChannelId = guild.afkChannelId;
    this.afkTimeout = guild.afkTimeout;
    this.systemChannelId = guild.systemChannelId;
    this.systemChannelFlags = guild.systemChannelFlags?.bitfield.toString();
    this.defaultMessageNotifications = guild.defaultMessageNotifications;
    this.explicitContentFilter = guild.explicitContentFilter;
    this.premiumProgressBarEnabled = guild.premiumProgressBarEnabled;
    this.createdAt = guild.createdAt;
  }
}

export class GuildUpdateDto {
  public oldGuild: GuildDto;
  public newGuild: GuildDto;

  constructor(oldGuild: Guild, newGuild: Guild) {
    this.oldGuild = new GuildDto(oldGuild);
    this.newGuild = new GuildDto(newGuild);
  }
}
