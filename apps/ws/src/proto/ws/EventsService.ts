// Original file: apps/ws/src/proto/ws.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Guild as _ws_Guild, Guild__Output as _ws_Guild__Output } from '../ws/Guild';
import type { GuildChannel as _ws_GuildChannel, GuildChannel__Output as _ws_GuildChannel__Output } from '../ws/GuildChannel';
import type { GuildMember as _ws_GuildMember, GuildMember__Output as _ws_GuildMember__Output } from '../ws/GuildMember';
import type { GuildMemberVoiceState as _ws_GuildMemberVoiceState, GuildMemberVoiceState__Output as _ws_GuildMemberVoiceState__Output } from '../ws/GuildMemberVoiceState';
import type { GuildMessage as _ws_GuildMessage, GuildMessage__Output as _ws_GuildMessage__Output } from '../ws/GuildMessage';
import type { GuildMessageReaction as _ws_GuildMessageReaction, GuildMessageReaction__Output as _ws_GuildMessageReaction__Output } from '../ws/GuildMessageReaction';
import type { GuildRole as _ws_GuildRole, GuildRole__Output as _ws_GuildRole__Output } from '../ws/GuildRole';
import type { GuildRoleDelete as _ws_GuildRoleDelete, GuildRoleDelete__Output as _ws_GuildRoleDelete__Output } from '../ws/GuildRoleDelete';
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
  
  channelUpdate(argument: _ws_GuildChannel, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelUpdate(argument: _ws_GuildChannel, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelUpdate(argument: _ws_GuildChannel, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  channelUpdate(argument: _ws_GuildChannel, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildCreate(argument: _ws_Guild, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildCreate(argument: _ws_Guild, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildCreate(argument: _ws_Guild, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildCreate(argument: _ws_Guild, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildDelete(argument: _ws_Guild, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildDelete(argument: _ws_Guild, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildDelete(argument: _ws_Guild, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildDelete(argument: _ws_Guild, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildMemberAdd(argument: _ws_GuildMember, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberAdd(argument: _ws_GuildMember, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberAdd(argument: _ws_GuildMember, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberAdd(argument: _ws_GuildMember, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildMemberRemove(argument: _ws_GuildMember, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberRemove(argument: _ws_GuildMember, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberRemove(argument: _ws_GuildMember, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberRemove(argument: _ws_GuildMember, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildMemberUpdate(argument: _ws_GuildMember, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberUpdate(argument: _ws_GuildMember, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberUpdate(argument: _ws_GuildMember, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildMemberUpdate(argument: _ws_GuildMember, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  guildUpdate(argument: _ws_Guild, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildUpdate(argument: _ws_Guild, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildUpdate(argument: _ws_Guild, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  guildUpdate(argument: _ws_Guild, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageCreate(argument: _ws_GuildMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageCreate(argument: _ws_GuildMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageCreate(argument: _ws_GuildMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageCreate(argument: _ws_GuildMessage, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageDelete(argument: _ws_GuildMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageDelete(argument: _ws_GuildMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageDelete(argument: _ws_GuildMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageDelete(argument: _ws_GuildMessage, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageReactionAdd(argument: _ws_GuildMessageReaction, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionAdd(argument: _ws_GuildMessageReaction, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionAdd(argument: _ws_GuildMessageReaction, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionAdd(argument: _ws_GuildMessageReaction, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageReactionRemove(argument: _ws_GuildMessageReaction, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionRemove(argument: _ws_GuildMessageReaction, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionRemove(argument: _ws_GuildMessageReaction, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageReactionRemove(argument: _ws_GuildMessageReaction, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  messageUpdate(argument: _ws_GuildMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageUpdate(argument: _ws_GuildMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageUpdate(argument: _ws_GuildMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  messageUpdate(argument: _ws_GuildMessage, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  roleCreate(argument: _ws_GuildRole, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleCreate(argument: _ws_GuildRole, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleCreate(argument: _ws_GuildRole, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleCreate(argument: _ws_GuildRole, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  roleDelete(argument: _ws_GuildRoleDelete, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleDelete(argument: _ws_GuildRoleDelete, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleDelete(argument: _ws_GuildRoleDelete, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleDelete(argument: _ws_GuildRoleDelete, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  roleUpdate(argument: _ws_GuildRole, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleUpdate(argument: _ws_GuildRole, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleUpdate(argument: _ws_GuildRole, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  roleUpdate(argument: _ws_GuildRole, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
  voiceStateUpdate(argument: _ws_GuildMemberVoiceState, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  voiceStateUpdate(argument: _ws_GuildMemberVoiceState, metadata: grpc.Metadata, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  voiceStateUpdate(argument: _ws_GuildMemberVoiceState, options: grpc.CallOptions, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  voiceStateUpdate(argument: _ws_GuildMemberVoiceState, callback: grpc.requestCallback<_ws_NoResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EventsServiceHandlers extends grpc.UntypedServiceImplementation {
  channelCreate: grpc.handleUnaryCall<_ws_GuildChannel__Output, _ws_NoResponse>;
  
  channelDelete: grpc.handleUnaryCall<_ws_GuildChannel__Output, _ws_NoResponse>;
  
  channelUpdate: grpc.handleUnaryCall<_ws_GuildChannel__Output, _ws_NoResponse>;
  
  guildCreate: grpc.handleUnaryCall<_ws_Guild__Output, _ws_NoResponse>;
  
  guildDelete: grpc.handleUnaryCall<_ws_Guild__Output, _ws_NoResponse>;
  
  guildMemberAdd: grpc.handleUnaryCall<_ws_GuildMember__Output, _ws_NoResponse>;
  
  guildMemberRemove: grpc.handleUnaryCall<_ws_GuildMember__Output, _ws_NoResponse>;
  
  guildMemberUpdate: grpc.handleUnaryCall<_ws_GuildMember__Output, _ws_NoResponse>;
  
  guildUpdate: grpc.handleUnaryCall<_ws_Guild__Output, _ws_NoResponse>;
  
  messageCreate: grpc.handleUnaryCall<_ws_GuildMessage__Output, _ws_NoResponse>;
  
  messageDelete: grpc.handleUnaryCall<_ws_GuildMessage__Output, _ws_NoResponse>;
  
  messageReactionAdd: grpc.handleUnaryCall<_ws_GuildMessageReaction__Output, _ws_NoResponse>;
  
  messageReactionRemove: grpc.handleUnaryCall<_ws_GuildMessageReaction__Output, _ws_NoResponse>;
  
  messageUpdate: grpc.handleUnaryCall<_ws_GuildMessage__Output, _ws_NoResponse>;
  
  roleCreate: grpc.handleUnaryCall<_ws_GuildRole__Output, _ws_NoResponse>;
  
  roleDelete: grpc.handleUnaryCall<_ws_GuildRoleDelete__Output, _ws_NoResponse>;
  
  roleUpdate: grpc.handleUnaryCall<_ws_GuildRole__Output, _ws_NoResponse>;
  
  voiceStateUpdate: grpc.handleUnaryCall<_ws_GuildMemberVoiceState__Output, _ws_NoResponse>;
  
}

export interface EventsServiceDefinition extends grpc.ServiceDefinition {
  channelCreate: MethodDefinition<_ws_GuildChannel, _ws_NoResponse, _ws_GuildChannel__Output, _ws_NoResponse__Output>
  channelDelete: MethodDefinition<_ws_GuildChannel, _ws_NoResponse, _ws_GuildChannel__Output, _ws_NoResponse__Output>
  channelUpdate: MethodDefinition<_ws_GuildChannel, _ws_NoResponse, _ws_GuildChannel__Output, _ws_NoResponse__Output>
  guildCreate: MethodDefinition<_ws_Guild, _ws_NoResponse, _ws_Guild__Output, _ws_NoResponse__Output>
  guildDelete: MethodDefinition<_ws_Guild, _ws_NoResponse, _ws_Guild__Output, _ws_NoResponse__Output>
  guildMemberAdd: MethodDefinition<_ws_GuildMember, _ws_NoResponse, _ws_GuildMember__Output, _ws_NoResponse__Output>
  guildMemberRemove: MethodDefinition<_ws_GuildMember, _ws_NoResponse, _ws_GuildMember__Output, _ws_NoResponse__Output>
  guildMemberUpdate: MethodDefinition<_ws_GuildMember, _ws_NoResponse, _ws_GuildMember__Output, _ws_NoResponse__Output>
  guildUpdate: MethodDefinition<_ws_Guild, _ws_NoResponse, _ws_Guild__Output, _ws_NoResponse__Output>
  messageCreate: MethodDefinition<_ws_GuildMessage, _ws_NoResponse, _ws_GuildMessage__Output, _ws_NoResponse__Output>
  messageDelete: MethodDefinition<_ws_GuildMessage, _ws_NoResponse, _ws_GuildMessage__Output, _ws_NoResponse__Output>
  messageReactionAdd: MethodDefinition<_ws_GuildMessageReaction, _ws_NoResponse, _ws_GuildMessageReaction__Output, _ws_NoResponse__Output>
  messageReactionRemove: MethodDefinition<_ws_GuildMessageReaction, _ws_NoResponse, _ws_GuildMessageReaction__Output, _ws_NoResponse__Output>
  messageUpdate: MethodDefinition<_ws_GuildMessage, _ws_NoResponse, _ws_GuildMessage__Output, _ws_NoResponse__Output>
  roleCreate: MethodDefinition<_ws_GuildRole, _ws_NoResponse, _ws_GuildRole__Output, _ws_NoResponse__Output>
  roleDelete: MethodDefinition<_ws_GuildRoleDelete, _ws_NoResponse, _ws_GuildRoleDelete__Output, _ws_NoResponse__Output>
  roleUpdate: MethodDefinition<_ws_GuildRole, _ws_NoResponse, _ws_GuildRole__Output, _ws_NoResponse__Output>
  voiceStateUpdate: MethodDefinition<_ws_GuildMemberVoiceState, _ws_NoResponse, _ws_GuildMemberVoiceState__Output, _ws_NoResponse__Output>
}
