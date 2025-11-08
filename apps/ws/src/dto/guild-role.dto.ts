export class GuildRoleDto {
  public id: string;
  public name?: string;
  public guildId?: string;
  public color?: number;
  public permissions?: string;
  public position?: number;
  public managed?: boolean;
  public mentionable?: boolean;
  public flags?: string;
  public icon?: string;
  public hoist?: boolean;

  constructor(role: any) {
    this.id = role.role?.id || role.id;
    this.name = role.role?.name || role.name;
    this.guildId = role.guild_id || role.guildId;
    this.color = role.role?.color || role.color;
    this.permissions = role.role?.permissions || role.permissions;
    this.position = role.role?.position || role.position;
    this.managed = role.role?.managed || role.managed;
    this.mentionable = role.role?.mentionable || role.mentionable;
    this.flags = role.role?.flags?.toString() || role.flags?.toString();
    this.icon = role.role?.icon || role.icon;
    this.hoist = role.role?.hoist || role.hoist;
  }
}

export class GuildRoleDeleteDto {
  public id: string;
  public guildId: string;

  constructor(role: any) {
    this.id = role.role_id || role.id;
    this.guildId = role.guild_id || role.guildId;
  }
}
