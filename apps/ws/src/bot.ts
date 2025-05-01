import { ClusterClient, getInfo } from 'discord-hybrid-sharding';
import { Client, ClientEvents, TextChannel } from 'discord.js';
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

/**Message Create */
registerEvent(EventType.MessageCreate, async (message) => {
  const guildMessage = new GuildMessageDto(message);

  await new Promise<void>(() => {
    eventsGrpcService.messageCreate(guildMessage as unknown, () => {});
  });
});

/**Message Update */
registerEvent(EventType.MessageUpdate, async (oldMessage: any, newMessage) => {
  const guildMessageUpdate = new GuildMessageUpdateDto(oldMessage, newMessage);

  await new Promise<void>(() => {
    eventsGrpcService.messageUpdate(guildMessageUpdate as unknown, () => {});
  });
});

/**Message Delete */
registerEvent(EventType.MessageDelete, async (message: any) => {
  const guildMessage = new GuildMessageDto(message);

  await new Promise<void>(() => {
    eventsGrpcService.messageDelete(guildMessage as unknown, () => {});
  });
});

/**Message Reaction add */
registerEvent(
  EventType.MessageReactionAdd,
  async (message: any, member: any) => {
    const guildMessageReaction = new GuildMessageReactionDto(message, member);

    await new Promise<void>(() => {
      eventsGrpcService.messageReactionAdd(
        guildMessageReaction as unknown,
        () => {},
      );
    });
  },
);

/**Message Reaction Remove */
registerEvent(
  EventType.MessageReactionRemove,
  async (message: any, member: any) => {
    const guildMessageReaction = new GuildMessageReactionDto(message, member);

    await new Promise<void>(() => {
      eventsGrpcService.messageReactionRemove(
        guildMessageReaction as unknown,
        () => {},
      );
    });
  },
);

/**Member Add */
registerEvent(EventType.GuildMemberAdd, async (member: any) => {
  const guildMember = new GuildMemberDto(member);

  await new Promise<void>(() => {
    eventsGrpcService.guildMemberAdd(guildMember as unknown, () => {});
  });
});

/**Member Update */
registerEvent(
  EventType.GuildMemberUpdate,
  async (oldMember: any, newMember: any) => {
    const guildMemberUpdate = new GuildMemberUpdateDto(oldMember, newMember);

    await new Promise<void>(() => {
      eventsGrpcService.guildMemberUpdate(
        guildMemberUpdate as unknown,
        () => {},
      );
    });
  },
);

/**Channel Create */
registerEvent(EventType.ChannelCreate, async (channel: TextChannel) => {
  const guildChannel = new GuildChannelDto(channel);

  await new Promise<void>(() => {
    eventsGrpcService.channelCreate(guildChannel as unknown, () => {});
  });
});

/**Channel Update */
registerEvent(
  EventType.ChannelUpdate,
  async (oldChannel: TextChannel, newChannel: TextChannel) => {
    const guildChannelUpdate = new GuildChannelUpdateDto(
      oldChannel,
      newChannel,
    );

    await new Promise<void>(() => {
      eventsGrpcService.channelUpdate(guildChannelUpdate as unknown, () => {});
    });
  },
);

/**Channel Delete */
registerEvent(EventType.ChannelDelete, async (channel: TextChannel) => {
  const guildChannel = new GuildChannelDto(channel);

  await new Promise<void>(() => {
    eventsGrpcService.channelDelete(guildChannel as unknown, () => {});
  });
});

/**Guild Create */
registerEvent(EventType.GuildCreate, async (guild) => {
  const guildDto = new GuildDto(guild);

  await new Promise<void>(() => {
    eventsGrpcService.guildCreate(guildDto as unknown, () => {});
  });
});

/**Guild Update */
registerEvent(EventType.GuildUpdate, async (oldGuild, newGuild) => {
  const guildDto = new GuildUpdateDto(oldGuild, newGuild);

  await new Promise<void>(() => {
    eventsGrpcService.guildUpdate(guildDto as unknown, () => {});
  });
});

/**Guild Role Create */
registerEvent(EventType.RoleCreate, async (role) => {
  const guildRoleDto = new GuildRoleDto(role);

  await new Promise<void>(() => {
    eventsGrpcService.roleCreate(guildRoleDto as unknown, () => {});
  });
});

/**Guild Role Update */
registerEvent(EventType.RoleUpdate, async (oldRole, newRole) => {
  const guildRoleDto = new GuildRoleUpdateDto(oldRole, newRole);

  await new Promise<void>(() => {
    eventsGrpcService.roleUpdate(guildRoleDto as unknown, () => {});
  });
});

/**Guild Role Delete */
registerEvent(EventType.RoleDelete, async (role) => {
  const guildRoleDto = new GuildRoleDto(role);

  await new Promise<void>(() => {
    eventsGrpcService.roleDelete(guildRoleDto as unknown, () => {});
  });
});
