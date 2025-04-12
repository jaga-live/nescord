import { handleUnaryCall, sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
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

  async messageUpdate(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
  ) {
    console.log(call.request);
  }

  async messageDelete(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
  ) {
    console.log(call.request);
  }

  async messageReactionAdd(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
  ) {
    console.log(call.request);
  }

  async messageReactionRemove(
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>,
  ) {
    console.log(call.request);
  }

  guildCreate: handleUnaryCall<Guild__Output, NoResponse>;
  guildUpdate: handleUnaryCall<GuildUpdate__Output, NoResponse>;
  guildDelete: handleUnaryCall<Guild__Output, NoResponse>;
  channelCreate: handleUnaryCall<GuildChannel__Output, NoResponse>;
  channelDelete: handleUnaryCall<GuildChannel__Output, NoResponse>;
  channelUpdate: handleUnaryCall<GuildChannelUpdate__Output, NoResponse>;
  guildMemberAdd: handleUnaryCall<GuildMember__Output, NoResponse>;
  guildMemberUpdate: handleUnaryCall<GuildMemberUpadte__Output, NoResponse>;
  roleCreate: handleUnaryCall<GuildRole__Output, NoResponse>;
  roleUpdate: handleUnaryCall<GuildRoleUpdate__Output, NoResponse>;
}
