import { ClusterClient, getInfo } from 'discord-hybrid-sharding';
import {
  Client,
  ClientEvents,
  MessageReaction,
  TextChannel,
  User,
} from 'discord.js';
import { WsClientOptions } from './interface/ws-client-options.interface';
import {
  GuildMessageDto,
  GuildMessageReactionDto,
  GuildMessageUpdateDto,
} from './dto/guild-message.dto';
import { GrpcClient } from './microservice/gRPC';
import { GuildMemberDto, GuildMemberUpdateDto } from './dto/guild-member.dto';
import {
  GuildChannelDto,
  GuildChannelUpdateDto,
} from './dto/guild-channel.dto';
import { GuildDto, GuildUpdateDto } from './dto/guild.dto';
import { GuildRoleDto, GuildRoleUpdateDto } from './dto/guild-role.dto';
import { EventType } from './enum/event-type.enum';

const options: WsClientOptions = JSON.parse(process.env.discordOptions);
const discordClient = new Client({
  intents: options.intents,
  shards: getInfo().SHARD_LIST,
  shardCount: getInfo().TOTAL_SHARDS,
});
const clusterClient = new ClusterClient(discordClient);
const eventsGrpcService = GrpcClient.getInstance(options).grpcClient;

discordClient['cluster'] = clusterClient;
discordClient.login(options.token);
discordClient.once('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

/**Discord Websocket Events */
function registerEvent<K extends keyof ClientEvents>(
  event: K,
  handler: (...args: ClientEvents[K]) => void,
) {
  const defaultEvents = [EventType.MessageCreate, EventType.GuildCreate];

  if (options.events === '*') {
    discordClient.on(event, handler);
  } else if (!options.events?.length) {
    if (defaultEvents.includes(event as EventType)) {
      discordClient.on(event, handler);
    }
  } else if (options.events?.includes(event as EventType)) {
    discordClient.on(event, handler);
  }
}

registerEvent(EventType.MessageCreate, async (message) => {
  await grpcCall(eventsGrpcService.messageCreate, new GuildMessageDto(message));
});

registerEvent(EventType.MessageUpdate, async (oldMsg, newMsg) => {
  await grpcCall(
    eventsGrpcService.messageUpdate,
    new GuildMessageUpdateDto(oldMsg as any, newMsg),
  );
});

registerEvent(EventType.MessageDelete, async (msg) => {
  await grpcCall(
    eventsGrpcService.messageDelete,
    new GuildMessageDto(msg as any),
  );
});

registerEvent(EventType.MessageReactionAdd, async (reaction, user) => {
  await grpcCall(
    eventsGrpcService.messageReactionAdd,
    new GuildMessageReactionDto(reaction as MessageReaction, user as User),
  );
});

registerEvent(EventType.MessageReactionRemove, async (reaction, user) => {
  await grpcCall(
    eventsGrpcService.messageReactionRemove,
    new GuildMessageReactionDto(reaction as MessageReaction, user as User),
  );
});

registerEvent(EventType.GuildMemberAdd, async (member) => {
  await grpcCall(eventsGrpcService.guildMemberAdd, new GuildMemberDto(member));
});

registerEvent(EventType.GuildMemberUpdate, async (oldM, newM) => {
  await grpcCall(
    eventsGrpcService.guildMemberUpdate,
    new GuildMemberUpdateDto(oldM, newM),
  );
});

registerEvent(EventType.ChannelCreate, async (channel: TextChannel) => {
  await grpcCall(eventsGrpcService.channelCreate, new GuildChannelDto(channel));
});

registerEvent(
  EventType.ChannelUpdate,
  async (oldC: TextChannel, newC: TextChannel) => {
    await grpcCall(
      eventsGrpcService.channelUpdate,
      new GuildChannelUpdateDto(oldC, newC),
    );
  },
);

registerEvent(EventType.ChannelDelete, async (channel: TextChannel) => {
  await grpcCall(eventsGrpcService.channelDelete, new GuildChannelDto(channel));
});

registerEvent(EventType.GuildCreate, async (guild) => {
  await grpcCall(eventsGrpcService.guildCreate, new GuildDto(guild));
});

registerEvent(EventType.GuildUpdate, async (oldG, newG) => {
  await grpcCall(eventsGrpcService.guildUpdate, new GuildUpdateDto(oldG, newG));
});

registerEvent(EventType.RoleCreate, async (role) => {
  await grpcCall(eventsGrpcService.roleCreate, new GuildRoleDto(role));
});

registerEvent(EventType.RoleUpdate, async (oldR, newR) => {
  await grpcCall(
    eventsGrpcService.roleUpdate,
    new GuildRoleUpdateDto(oldR, newR),
  );
});

registerEvent(EventType.RoleDelete, async (role) => {
  await grpcCall(eventsGrpcService.roleDelete, new GuildRoleDto(role));
});

async function grpcCall<T>(
  fn: (data: any, cb: (err: any, res?: any) => void) => void,
  data: T,
) {
  try {
    await promisifyGrpcCall(fn.bind(eventsGrpcService), data);
  } catch (error) {
    console.error(`[gRPC ERROR] ${fn.name} failed:`, error.message);
  }
}

function promisifyGrpcCall<T>(
  fn: (data: T, cb: (err: any) => void) => void,
  data: T,
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(data, (err) => (err ? reject(err) : resolve()));
  });
}
