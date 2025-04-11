// Original file: apps/ws/src/proto/ws.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Guild as _ws_Guild, Guild__Output as _ws_Guild__Output } from '../ws/Guild';
import type { GuildChannel as _ws_GuildChannel, GuildChannel__Output as _ws_GuildChannel__Output } from '../ws/GuildChannel';
import type { GuildChannelUpdate as _ws_GuildChannelUpdate, GuildChannelUpdate__Output as _ws_GuildChannelUpdate__Output } from '../ws/GuildChannelUpdate';
import type { GuildMember as _ws_GuildMember, GuildMember__Output as _ws_GuildMember__Output } from '../ws/GuildMember';
import type { GuildMemberUpadte as _ws_GuildMemberUpadte, GuildMemberUpadte__Output as _ws_GuildMemberUpadte__Output } from '../ws/GuildMemberUpadte';
import type { GuildMessage as _ws_GuildMessage, GuildMessage__Output as _ws_GuildMessage__Output } from '../ws/GuildMessage';
import type { GuildMessageReactionAdd as _ws_GuildMessageReactionAdd, GuildMessageReactionAdd__Output as _ws_GuildMessageReactionAdd__Output } from '../ws/GuildMessageReactionAdd';
import type { GuildMessageUpdate as _ws_GuildMessageUpdate, GuildMessageUpdate__Output as _ws_GuildMessageUpdate__Output } from '../ws/GuildMessageUpdate';
import type { GuildRole as _ws_GuildRole, GuildRole__Output as _ws_GuildRole__Output } from '../ws/GuildRole';
import type { GuildRoleUpdate as _ws_GuildRoleUpdate, GuildRoleUpdate__Output as _ws_GuildRoleUpdate__Output } from '../ws/GuildRoleUpdate';
import type { GuildUpdate as _ws_GuildUpdate, GuildUpdate__Output as _ws_GuildUpdate__Output } from '../ws/GuildUpdate';
import type { NoResponse as _ws_NoResponse, NoResponse__Output as _ws_NoResponse__Output } from '../ws/NoResponse';

export interface EventsServiceClient extends grpc.Client {
  channelCreate(argument: _ws_GuildChannel, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelCreate(argument: _ws_GuildChannel, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelCreate(argument: _ws_GuildChannel, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelCreate(argument: _ws_GuildChannel, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  channelDelete(argument: _ws_GuildChannel, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelDelete(argument: _ws_GuildChannel, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelDelete(argument: _ws_GuildChannel, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelDelete(argument: _ws_GuildChannel, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  channelUpdate(argument: _ws_GuildChannelUpdate, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelUpdate(argument: _ws_GuildChannelUpdate, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelUpdate(argument: _ws_GuildChannelUpdate, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelUpdate(argument: _ws_GuildChannelUpdate, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildCreate(argument: _ws_Guild, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildCreate(argument: _ws_Guild, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildCreate(argument: _ws_Guild, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildCreate(argument: _ws_Guild, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildMemberAdd(argument: _ws_GuildMember, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberAdd(argument: _ws_GuildMember, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberAdd(argument: _ws_GuildMember, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberAdd(argument: _ws_GuildMember, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildMemberUpdate(argument: _ws_GuildMemberUpadte, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberUpdate(argument: _ws_GuildMemberUpadte, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberUpdate(argument: _ws_GuildMemberUpadte, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberUpdate(argument: _ws_GuildMemberUpadte, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildUpdate(argument: _ws_GuildUpdate, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildUpdate(argument: _ws_GuildUpdate, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildUpdate(argument: _ws_GuildUpdate, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildUpdate(argument: _ws_GuildUpdate, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageCreate(argument: _ws_GuildMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageCreate(argument: _ws_GuildMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageCreate(argument: _ws_GuildMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageCreate(argument: _ws_GuildMessage, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageDelete(argument: _ws_GuildMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageDelete(argument: _ws_GuildMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageDelete(argument: _ws_GuildMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageDelete(argument: _ws_GuildMessage, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageReactionAdd(argument: _ws_GuildMessageReactionAdd, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionAdd(argument: _ws_GuildMessageReactionAdd, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionAdd(argument: _ws_GuildMessageReactionAdd, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionAdd(argument: _ws_GuildMessageReactionAdd, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageUpdate(argument: _ws_GuildMessageUpdate, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageUpdate(argument: _ws_GuildMessageUpdate, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageUpdate(argument: _ws_GuildMessageUpdate, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageUpdate(argument: _ws_GuildMessageUpdate, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  roleCreate(argument: _ws_GuildRole, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleCreate(argument: _ws_GuildRole, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleCreate(argument: _ws_GuildRole, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleCreate(argument: _ws_GuildRole, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  roleUpdate(argument: _ws_GuildRoleUpdate, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleUpdate(argument: _ws_GuildRoleUpdate, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleUpdate(argument: _ws_GuildRoleUpdate, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleUpdate(argument: _ws_GuildRoleUpdate, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EventsServiceHandlers extends grpc.UntypedServiceImplementation {
  channelCreate: grpc.handleUnaryCall<_ws_GuildChannel__Output, _ws_NoResponse>;
  
  channelDelete: grpc.handleUnaryCall<_ws_GuildChannel__Output, _ws_NoResponse>;
  
  channelUpdate: grpc.handleUnaryCall<_ws_GuildChannelUpdate__Output, _ws_NoResponse>;
  
  guildCreate: grpc.handleUnaryCall<_ws_Guild__Output, _ws_NoResponse>;
  
  guildMemberAdd: grpc.handleUnaryCall<_ws_GuildMember__Output, _ws_NoResponse>;
  
  guildMemberUpdate: grpc.handleUnaryCall<_ws_GuildMemberUpadte__Output, _ws_NoResponse>;
  
  guildUpdate: grpc.handleUnaryCall<_ws_GuildUpdate__Output, _ws_NoResponse>;
  
  messageCreate: grpc.handleUnaryCall<_ws_GuildMessage__Output, _ws_NoResponse>;
  
  messageDelete: grpc.handleUnaryCall<_ws_GuildMessage__Output, _ws_NoResponse>;
  
  messageReactionAdd: grpc.handleUnaryCall<_ws_GuildMessageReactionAdd__Output, _ws_NoResponse>;
  
  messageUpdate: grpc.handleUnaryCall<_ws_GuildMessageUpdate__Output, _ws_NoResponse>;
  
  roleCreate: grpc.handleUnaryCall<_ws_GuildRole__Output, _ws_NoResponse>;
  
  roleUpdate: grpc.handleUnaryCall<_ws_GuildRoleUpdate__Output, _ws_NoResponse>;
  
}

export interface EventsServiceDefinition extends grpc.ServiceDefinition {
  channelCreate: MethodDefinition<_ws_GuildChannel, _ws_NoResponse, _ws_GuildChannel__Output, _ws_NoResponse__Output>
  channelDelete: MethodDefinition<_ws_GuildChannel, _ws_NoResponse, _ws_GuildChannel__Output, _ws_NoResponse__Output>
  channelUpdate: MethodDefinition<_ws_GuildChannelUpdate, _ws_NoResponse, _ws_GuildChannelUpdate__Output, _ws_NoResponse__Output>
  guildCreate: MethodDefinition<_ws_Guild, _ws_NoResponse, _ws_Guild__Output, _ws_NoResponse__Output>
  guildMemberAdd: MethodDefinition<_ws_GuildMember, _ws_NoResponse, _ws_GuildMember__Output, _ws_NoResponse__Output>
  guildMemberUpdate: MethodDefinition<_ws_GuildMemberUpadte, _ws_NoResponse, _ws_GuildMemberUpadte__Output, _ws_NoResponse__Output>
  guildUpdate: MethodDefinition<_ws_GuildUpdate, _ws_NoResponse, _ws_GuildUpdate__Output, _ws_NoResponse__Output>
  messageCreate: MethodDefinition<_ws_GuildMessage, _ws_NoResponse, _ws_GuildMessage__Output, _ws_NoResponse__Output>
  messageDelete: MethodDefinition<_ws_GuildMessage, _ws_NoResponse, _ws_GuildMessage__Output, _ws_NoResponse__Output>
  messageReactionAdd: MethodDefinition<_ws_GuildMessageReactionAdd, _ws_NoResponse, _ws_GuildMessageReactionAdd__Output, _ws_NoResponse__Output>
  messageUpdate: MethodDefinition<_ws_GuildMessageUpdate, _ws_NoResponse, _ws_GuildMessageUpdate__Output, _ws_NoResponse__Output>
  roleCreate: MethodDefinition<_ws_GuildRole, _ws_NoResponse, _ws_GuildRole__Output, _ws_NoResponse__Output>
  roleUpdate: MethodDefinition<_ws_GuildRoleUpdate, _ws_NoResponse, _ws_GuildRoleUpdate__Output, _ws_NoResponse__Output>
}
