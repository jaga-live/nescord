export class GuildMemberDto {
  public id: string;
  public username: string;
  public discriminator: string;
  public guildId: string;
  public globalName: string;
  public displayName: string;
  public nick: string;
  public avatar: string;
  public banner: string;
  public userAvatar: string;
  public userBanner: string;
  public bot: boolean;
  public system: boolean;
  public roleIds: string[];
  public joinedAt: Date;
  public pending: boolean;

  constructor(member?: any) {
    if (!member) {
      return;
    }

    this.id = member.user?.id || member.id;
    this.guildId = member.guild_id || member.guildId;
    this.username = member.user?.username || member.username;
    this.discriminator = member.user?.discriminator || member.discriminator;
    this.globalName = member.user?.global_name || member.globalName;
    this.displayName = member.user?.display_name || member.displayName;
    this.nick = member.nick;
    this.avatar = member.avatar;
    this.banner = member.banner;
    this.userAvatar = member.user?.avatar;
    this.userBanner = member.user?.banner;
    this.bot = member.user?.bot === true;
    this.system = member.user?.system === true;
    this.roleIds = member.roles || [];
    this.joinedAt = member.joined_at || member.joinedAt;
    this.pending = member.pending;
  }
}
