import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { WsListenerOptions } from '../interface/ws-listener-options.interface';
import { EventsServiceHandlers } from '../proto/ws/EventsService';
import { Guild__Output } from '../proto/ws/Guild';
import { NoResponse } from '../proto/ws/NoResponse';
import { GuildChannel__Output } from '../proto/ws/GuildChannel';
import { GuildChannelUpdate__Output } from '../proto/ws/GuildChannelUpdate';
import { GuildMember__Output } from '../proto/ws/GuildMember';
import { GuildMemberUpadte__Output } from '../proto/ws/GuildMemberUpadte';
import { GuildRole__Output } from '../proto/ws/GuildRole';
import { GuildRoleUpdate__Output } from '../proto/ws/GuildRoleUpdate';
import { GuildUpdate__Output } from '../proto/ws/GuildUpdate';
import { WsListener } from '../ws-listener';

export class WsGrpcController implements EventsServiceHandlers {
  [name: string]: any;
  private listener: WsListener;

  constructor(options: WsListenerOptions, listener: WsListener) {
    this.options = options;
    this.listener = listener;
  }

  async messageCreate(call: ServerUnaryCall<any, any>) {
    this.listener.emit(this.messageCreate.name, call.request);
  }

  async messageUpdate(call: ServerUnaryCall<any, any>) {
    this.listener.emit(this.messageUpdate.name, call.request);
  }

  async messageDelete(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
  ) {
    this.listener.emit(this.messageDelete.name, call.request);
  }

  async messageReactionAdd(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
  ) {
    this.listener.emit(this.messageReactionAdd.name, call.request);
  }

  async messageReactionRemove(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
  ) {
    this.listener.emit(this.messageReactionRemove.name, call.request);
  }

  async guildCreate(call: ServerUnaryCall<Guild__Output, NoResponse>) {
    this.listener.emit(this.guildCreate.name, call.request);
  }

  async guildUpdate(call: ServerUnaryCall<GuildUpdate__Output, NoResponse>) {
    this.listener.emit(this.guildUpdate.name, call.request);
  }

  async guildDelete(call: ServerUnaryCall<Guild__Output, NoResponse>) {
    this.listener.emit(this.guildDelete.name, call.request);
  }

  async channelCreate(call: ServerUnaryCall<GuildChannel__Output, NoResponse>) {
    this.listener.emit(this.channelCreate.name, call.request);
  }

  async channelDelete(call: ServerUnaryCall<GuildChannel__Output, NoResponse>) {
    this.listener.emit(this.channelDelete.name, call.request);
  }

  async channelUpdate(
    call: ServerUnaryCall<GuildChannelUpdate__Output, NoResponse>,
  ) {
    this.listener.emit(this.channelUpdate.name, call.request);
  }

  async guildMemberAdd(call: ServerUnaryCall<GuildMember__Output, NoResponse>) {
    this.listener.emit(this.guildMemberAdd.name, call.request);
  }

  async guildMemberUpdate(
    call: ServerUnaryCall<GuildMemberUpadte__Output, NoResponse>,
  ) {
    this.listener.emit(this.guildMemberUpdate.name, call.request);
  }

  async roleCreate(call: ServerUnaryCall<GuildRole__Output, NoResponse>) {
    this.listener.emit(this.roleCreate.name, call.request);
  }

  async roleUpdate(call: ServerUnaryCall<GuildRoleUpdate__Output, NoResponse>) {
    this.listener.emit(this.roleUpdate.name, call.request);
  }

  async roleDelete(call: ServerUnaryCall<GuildRole__Output, NoResponse>) {
    this.listener.emit(this.roleDelete.name, call.request);
  }
}
