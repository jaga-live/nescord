export class MemberDto {
  id: string;
  guildId: string;
  username: string;
  discriminator: string;
  avatar: string;

  constructor(member) {
    this.id = member?.user?.id;
    this.guildId = member?.guildId;
    this.username = member?.user?.username;
    this.discriminator = member?.user?.discriminator;
    this.avatar = member?.user?.avatar;
  }
}
