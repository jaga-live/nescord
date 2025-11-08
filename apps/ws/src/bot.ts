import { ClusterClient, getInfo } from 'discord-hybrid-sharding';
import { WsClientOptions } from './interface/ws-client-options.interface';
import {
  GuildMessageDto,
  GuildMessageReactionDto,
} from './dto/guild-message.dto';
import { GrpcClient } from './microservice/gRPC';
import { GuildMemberDto } from './dto/guild-member.dto';
import { GuildChannelDto } from './dto/guild-channel.dto';
import { GuildDto } from './dto/guild.dto';
import { GuildRoleDto, GuildRoleDeleteDto } from './dto/guild-role.dto';
import { Client, GatewayDispatchEvents } from '@discordjs/core';
import { REST } from '@discordjs/rest';
import { WebSocketManager } from '@discordjs/ws';
import { GuildMemberVoiceStateDto } from './dto/guild-member-voice-state.dto';
import { EventType } from './enum/event-type.enum';

const options: WsClientOptions = JSON.parse(process.env.discordOptions);
const rest = new REST({ version: '10' }).setToken(options.token);
let intents: number;

if (Array.isArray(options.intents)) {
  intents =
    options.intents.length > 0
      ? options.intents.reduce((acc: number, intent: number) => acc | intent)
      : 0;
} else {
  intents = options.intents as number;
}

const gateway = new WebSocketManager({
  shardCount: getInfo().TOTAL_SHARDS,
  shardIds: getInfo().SHARD_LIST,
  token: options.token,
  intents,
  rest,
});

const discordClient = new Client({ rest, gateway });
const clusterClient = new ClusterClient(discordClient);
const eventsGrpcService = GrpcClient.getInstance(options).grpcClient;

discordClient['cluster'] = clusterClient;

// Error handlers
gateway.on('error' as any, (error: Error) => {
  console.error('[Gateway Error]', error);
});

discordClient.on('error' as any, (error: Error) => {
  console.error('[Discord Client Error]', error);
});

// Graceful shutdown
const shutdown = async () => {
  console.log('Shutting down gracefully...');
  await gateway.destroy();
  process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

gateway.connect();

discordClient.once(GatewayDispatchEvents.Ready, (event) => {
  const user = event.data.user;
  console.log(`Logged in as ${user.username}!`);
});

/**Discord Websocket Events */
function registerEvent(
  event: GatewayDispatchEvents,
  handler: (data: any) => void,
) {
  const defaultEvents = [
    GatewayDispatchEvents.MessageCreate,
    GatewayDispatchEvents.GuildCreate,
  ];

  if (options.events === '*') {
    discordClient.on(event, handler);
  } else if (!options.events?.length) {
    if (defaultEvents.includes(event)) {
      discordClient.on(event, handler);
    }
  } else if (options.events?.includes(event as unknown as EventType)) {
    discordClient.on(event, handler);
  }
}

registerEvent(GatewayDispatchEvents.MessageCreate, async (message) => {
  grpcCall(
    eventsGrpcService.messageCreate,
    new GuildMessageDto(message.data),
  ).catch((err) => console.error('[gRPC] messageCreate failed:', err.message));
});

registerEvent(GatewayDispatchEvents.MessageUpdate, async (message) => {
  grpcCall(
    eventsGrpcService.messageUpdate,
    new GuildMessageDto(message.data),
  ).catch((err) => console.error('[gRPC] messageUpdate failed:', err.message));
});

registerEvent(GatewayDispatchEvents.MessageDelete, async (message) => {
  grpcCall(
    eventsGrpcService.messageDelete,
    new GuildMessageDto(message.data),
  ).catch((err) => console.error('[gRPC] messageDelete failed:', err.message));
});

registerEvent(GatewayDispatchEvents.MessageReactionAdd, async (reaction) => {
  grpcCall(
    eventsGrpcService.messageReactionAdd,
    new GuildMessageReactionDto(reaction.data),
  ).catch((err) =>
    console.error('[gRPC] messageReactionAdd failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.MessageReactionRemove, async (reaction) => {
  grpcCall(
    eventsGrpcService.messageReactionRemove,
    new GuildMessageReactionDto(reaction.data),
  ).catch((err) =>
    console.error('[gRPC] messageReactionRemove failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.GuildMemberAdd, async (member) => {
  grpcCall(
    eventsGrpcService.guildMemberAdd,
    new GuildMemberDto(member.data),
  ).catch((err) => console.error('[gRPC] guildMemberAdd failed:', err.message));
});

registerEvent(GatewayDispatchEvents.GuildMemberUpdate, async (member) => {
  grpcCall(
    eventsGrpcService.guildMemberUpdate,
    new GuildMemberDto(member.data),
  ).catch((err) =>
    console.error('[gRPC] guildMemberUpdate failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.GuildMemberRemove, async (member) => {
  grpcCall(
    eventsGrpcService.guildMemberRemove,
    new GuildMemberDto(member.data),
  ).catch((err) =>
    console.error('[gRPC] guildMemberRemove failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.ChannelCreate, async (channel) => {
  grpcCall(
    eventsGrpcService.channelCreate,
    new GuildChannelDto(channel.data),
  ).catch((err) => console.error('[gRPC] channelCreate failed:', err.message));
});

registerEvent(GatewayDispatchEvents.ChannelUpdate, async (channel) => {
  grpcCall(
    eventsGrpcService.channelUpdate,
    new GuildChannelDto(channel.data),
  ).catch((err) => console.error('[gRPC] channelUpdate failed:', err.message));
});

registerEvent(GatewayDispatchEvents.ChannelDelete, async (channel) => {
  grpcCall(
    eventsGrpcService.channelDelete,
    new GuildChannelDto(channel.data),
  ).catch((err) => console.error('[gRPC] channelDelete failed:', err.message));
});

registerEvent(GatewayDispatchEvents.GuildCreate, async (guild) => {
  grpcCall(eventsGrpcService.guildCreate, new GuildDto(guild.data)).catch(
    (err) => console.error('[gRPC] guildCreate failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.GuildUpdate, async (guild) => {
  grpcCall(eventsGrpcService.guildUpdate, new GuildDto(guild.data)).catch(
    (err) => console.error('[gRPC] guildUpdate failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.GuildDelete, async (guild) => {
  grpcCall(eventsGrpcService.guildDelete, new GuildDto(guild.data)).catch(
    (err) => console.error('[gRPC] guildDelete failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.GuildRoleCreate, async (role) => {
  grpcCall(eventsGrpcService.roleCreate, new GuildRoleDto(role.data)).catch(
    (err) => console.error('[gRPC] roleCreate failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.GuildRoleUpdate, async (role) => {
  grpcCall(eventsGrpcService.roleUpdate, new GuildRoleDto(role.data)).catch(
    (err) => console.error('[gRPC] roleUpdate failed:', err.message),
  );
});

registerEvent(GatewayDispatchEvents.GuildRoleDelete, async (role) => {
  grpcCall(
    eventsGrpcService.roleDelete,
    new GuildRoleDeleteDto(role.data),
  ).catch((err) => console.error('[gRPC] roleDelete failed:', err.message));
});

registerEvent(GatewayDispatchEvents.VoiceStateUpdate, async (voiceState) => {
  grpcCall(
    eventsGrpcService.voiceStateUpdate,
    new GuildMemberVoiceStateDto(voiceState.data),
  ).catch((err) =>
    console.error('[gRPC] voiceStateUpdate failed:', err.message),
  );
});

async function grpcCall<T>(
  fn: (data: any, cb: (err: any, res?: any) => void) => void,
  data: T,
) {
  await promisifyGrpcCall(fn.bind(eventsGrpcService), data);
}

function promisifyGrpcCall<T>(
  fn: (data: T, cb: (err: any) => void) => void,
  data: T,
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(data, (err) => (err ? reject(err) : resolve()));
  });
}
