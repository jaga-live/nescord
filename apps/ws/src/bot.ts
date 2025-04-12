import { ClusterClient, getInfo } from 'discord-hybrid-sharding';
import { Client } from 'discord.js';
import { WsClientOptions } from './interface/ws-client-options.interface';

const options: WsClientOptions = JSON.parse(process.env.discordOptions);
const discordClient = new Client({
  intents: options.intents,
  shards: getInfo().SHARD_LIST,
  shardCount: getInfo().TOTAL_SHARDS,
});
const clusterClient = new ClusterClient(discordClient);

discordClient['cluster'] = clusterClient;
discordClient.login(options.token);
discordClient.once('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

/**Discord Websocket Events */
discordClient.on('messageCreate', (message) => {
  console.log(message.content);
});
