import { ClusterClient, getInfo } from 'discord-hybrid-sharding';
import { Client, TextChannel } from 'discord.js';
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

/**Message Create */
discordClient.on('messageCreate', async (message) => {
  const guildMessage = new GuildMessageDto(message);

  await new Promise<void>(() => {
    eventsGrpcService.messageCreate(guildMessage as unknown, () => {});
  });
});

/**Message Update */
discordClient.on('messageUpdate', async (oldMessage: any, newMessage) => {
  const guildMessageUpdate = new GuildMessageUpdateDto(oldMessage, newMessage);

  await new Promise<void>(() => {
    eventsGrpcService.messageUpdate(guildMessageUpdate as unknown, () => {});
  });
});

/**Message Delete */
discordClient.on('messageDelete', async (message: any) => {
  const guildMessage = new GuildMessageDto(message);

  await new Promise<void>(() => {
    eventsGrpcService.messageDelete(guildMessage as unknown, () => {});
  });
});

/**Message Reaction add */
discordClient.on('messageReactionAdd', async (message: any, member: any) => {
  const guildMessageReaction = new GuildMessageReactionDto(message, member);

  await new Promise<void>(() => {
    eventsGrpcService.messageReactionAdd(
      guildMessageReaction as unknown,
      () => {},
    );
  });
});

/**Message Reaction Remove */
discordClient.on('messageReactionRemove', async (message: any, member: any) => {
  const guildMessageReaction = new GuildMessageReactionDto(message, member);

  await new Promise<void>(() => {
    eventsGrpcService.messageReactionRemove(
      guildMessageReaction as unknown,
      () => {},
    );
  });
});

/**Member Add */
discordClient.on('guildMemberAdd', async (member: any) => {
  const guildMember = new GuildMemberDto(member);

  await new Promise<void>(() => {
    eventsGrpcService.guildMemberAdd(guildMember as unknown, () => {});
  });
});

/**Member Update */
discordClient.on(
  'guildMemberUpdate',
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
discordClient.on('channelCreate', async (channel: TextChannel) => {
  const guildChannel = new GuildChannelDto(channel);

  await new Promise<void>(() => {
    eventsGrpcService.channelCreate(guildChannel as unknown, () => {});
  });
});

/**Channel Update */
discordClient.on(
  'channelUpdate',
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
discordClient.on('channelDelete', async (channel: TextChannel) => {
  const guildChannel = new GuildChannelDto(channel);

  await new Promise<void>(() => {
    eventsGrpcService.channelDelete(guildChannel as unknown, () => {});
  });
});

/**Guild Create */
discordClient.on('guildCreate', async (guild) => {
  const guildDto = new GuildDto(guild);

  await new Promise<void>(() => {
    eventsGrpcService.guildCreate(guildDto as unknown, () => {});
  });
});

/**Guild Update */
discordClient.on('guildUpdate', async (oldGuild, newGuild) => {
  const guildDto = new GuildUpdateDto(oldGuild, newGuild);

  await new Promise<void>(() => {
    eventsGrpcService.guildUpdate(guildDto as unknown, () => {});
  });
});

/**Guild Role Create */
discordClient.on('roleCreate', async (role) => {
  const guildRoleDto = new GuildRoleDto(role);

  await new Promise<void>(() => {
    eventsGrpcService.roleCreate(guildRoleDto as unknown, () => {});
  });
});

/**Guild Role Update */
discordClient.on('roleUpdate', async (oldRole, newRole) => {
  const guildRoleDto = new GuildRoleUpdateDto(oldRole, newRole);

  await new Promise<void>(() => {
    eventsGrpcService.roleUpdate(guildRoleDto as unknown, () => {});
  });
});

/**Guild Role Delete */
discordClient.on('roleDelete', async (role) => {
  const guildRoleDto = new GuildRoleDto(role);

  await new Promise<void>(() => {
    eventsGrpcService.roleDelete(guildRoleDto as unknown, () => {});
  });
});
