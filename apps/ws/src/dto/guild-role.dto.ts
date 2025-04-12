import { Role } from 'discord.js';

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
  public createdAt?: Date;

  constructor(role: Role) {
    this.id = role.id;
    this.name = role.name;
    this.guildId = role.guild?.id;
    this.color = role.color;
    this.permissions = role.permissions?.bitfield?.toString();
    this.position = role.position;
    this.managed = role.managed;
    this.mentionable = role.mentionable;
    this.flags = role.flags?.bitfield?.toString();
    this.icon = role.icon;
    this.hoist = role.hoist;
    this.createdAt = role.createdAt;
  }
}

export class GuildRoleUpdateDto {
  public oldRole: GuildRoleDto;
  public newRole: GuildRoleDto;

  constructor(oldRole: Role, newRole: Role) {
    this.oldRole = new GuildRoleDto(oldRole);
    this.newRole = new GuildRoleDto(newRole);
  }
}
