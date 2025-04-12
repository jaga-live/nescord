import { ClusterClient, getInfo } from 'discord-hybrid-sharding';
import { Client } from 'discord.js';
import { WsClientOptions } from './interface/ws-client-options.interface';
import { GuildMessageDto } from './dto/guild-message.dto';
import { GrpcClient } from './microservice/gRPC';

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

  console.log('Emit');
  await new Promise<void>(() => {
    eventsGrpcService.messageCreate(guildMessage as unknown, (error) => {});
  });
});

// /**Message Update */
// discordClient.on("
//   'messageUpdate',
//   (oldMessage: Message, newMessage: Message) => {
//     eventsHandlerService.messageUpdate(oldMessage, newMessage);
//   },
// );

// /**Message Delete */
// discordClient.on('messageDelete', (message) => {
//   eventsHandlerService.messageDelete(message);
// });

// /**Message Reaction add */
// discordClient.on('messageReactionAdd', (message, member) => {
//   eventsHandlerService.messageReactionAdd(message, member);
// });

// /**Member Add */
// discordClient.on('guildMemberAdd', (member) => {
//   eventsHandlerService.memberAdd(member);
// });

// /**Member Update */
// discordClient.on('guildMemberUpdate', (oldMember, newMember) => {
//   eventsHandlerService.memberUpdate(oldMember, newMember);
// });

// /**Channel Create */
// discordClient.on('channelCreate', (channel: TextChannel) => {
//   eventsHandlerService.channelCreate(channel);
// });

// /**Channel Update */
// discordClient.on(
//   'channelUpdate',
//   (oldChannel: TextChannel, newChannel: TextChannel) => {
//     eventsHandlerService.channelUpdate(oldChannel, newChannel);
//   },
// );

// /**Channel Delete */
// discordClient.on('channelDelete', (channel: TextChannel) => {
//   eventsHandlerService.channelDelete(channel);
// });

// /**Guild Create */
// discordClient.on('guildCreate', (guild) => {
//   eventsHandlerService.guildCreate(guild);
// });

// /**Guild Update */
// discordClient.on('guildUpdate', (oldGuild, newGuild) => {
//   eventsHandlerService.guildUpdate(oldGuild, newGuild);
// });

// /**Guild Role Create */
// discordClient.on('roleCreate', (role) => {
//   eventsHandlerService.roleCreate(role);
// });

// /**Guild Role Update */
// discordClient.on('roleUpdate', (oldRole, newRole) => {
//   eventsHandlerService.roleUpdate(oldRole, newRole);
// });

function handleGrpcErr(error: any) {
  console.error('Error: ', error.message);
}
