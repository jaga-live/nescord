import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { EventsServiceHandlers } from '../proto/ws/EventsService';
import { Guild__Output } from '../proto/ws/Guild';
import { NoResponse } from '../proto/ws/NoResponse';
import { GuildChannel__Output } from '../proto/ws/GuildChannel';
import { GuildMember__Output } from '../proto/ws/GuildMember';
import { GuildRole__Output } from '../proto/ws/GuildRole';
import { WsListener } from '../ws-listener';

export class WsGrpcController implements EventsServiceHandlers {
  [name: string]: any;
  private listener: WsListener;

  constructor(listener: WsListener) {
    this.listener = listener;
  }

  private handleEvent<T>(
    eventName: string,
    call: ServerUnaryCall<T, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    try {
      this.listener.emit(eventName, call.request);
      callback(null, {});
    } catch (error) {
      callback(error as Error, null);
    }
  }

  messageCreate(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.messageCreate.name, call, callback);
  }

  messageUpdate(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.messageUpdate.name, call, callback);
  }

  messageDelete(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.messageDelete.name, call, callback);
  }

  messageReactionAdd(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.messageReactionAdd.name, call, callback);
  }

  messageReactionRemove(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.messageReactionRemove.name, call, callback);
  }

  guildCreate(
    call: ServerUnaryCall<Guild__Output, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.guildCreate.name, call, callback);
  }

  guildUpdate(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.guildUpdate.name, call, callback);
  }

  guildDelete(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.guildDelete.name, call, callback);
  }

  channelCreate(
    call: ServerUnaryCall<GuildChannel__Output, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.channelCreate.name, call, callback);
  }

  channelDelete(
    call: ServerUnaryCall<GuildChannel__Output, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.channelDelete.name, call, callback);
  }

  channelUpdate(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.channelUpdate.name, call, callback);
  }

  guildMemberAdd(
    call: ServerUnaryCall<GuildMember__Output, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.guildMemberAdd.name, call, callback);
  }

  guildMemberUpdate(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.guildMemberUpdate.name, call, callback);
  }

  guildMemberRemove(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.guildMemberRemove.name, call, callback);
  }

  roleCreate(
    call: ServerUnaryCall<GuildRole__Output, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.roleCreate.name, call, callback);
  }

  roleUpdate(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.roleUpdate.name, call, callback);
  }

  roleDelete(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.roleDelete.name, call, callback);
  }

  voiceStateUpdate(
    call: ServerUnaryCall<any, NoResponse>,
    callback: sendUnaryData<NoResponse>,
  ) {
    this.handleEvent(this.voiceStateUpdate.name, call, callback);
  }
}
