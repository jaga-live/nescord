import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EventsServiceClient as _ws_EventsServiceClient, EventsServiceDefinition as _ws_EventsServiceDefinition } from './ws/EventsService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ws: {
    ChannelPermissionOverwrites: MessageTypeDefinition
    EventsService: SubtypeConstructor<typeof grpc.Client, _ws_EventsServiceClient> & { service: _ws_EventsServiceDefinition }
    Guild: MessageTypeDefinition
    GuildChannel: MessageTypeDefinition
    GuildChannelUpdate: MessageTypeDefinition
    GuildEmoji: MessageTypeDefinition
    GuildMember: MessageTypeDefinition
    GuildMemberUpdate: MessageTypeDefinition
    GuildMessage: MessageTypeDefinition
    GuildMessageReactionAdd: MessageTypeDefinition
    GuildMessageUpdate: MessageTypeDefinition
    GuildRole: MessageTypeDefinition
    GuildRoleUpdate: MessageTypeDefinition
    GuildUpdate: MessageTypeDefinition
    GuildUser: MessageTypeDefinition
    IdName: MessageTypeDefinition
    MessageAttachment: MessageTypeDefinition
    MessageAuthor: MessageTypeDefinition
    MessageMention: MessageTypeDefinition
    MessageReference: MessageTypeDefinition
    NoResponse: MessageTypeDefinition
  }
}

