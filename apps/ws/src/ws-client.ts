import { WsClientOptions } from './interface/ws-client-options.interface';
import { ClusterManager } from 'discord-hybrid-sharding';
import { join } from 'path';

export class WsClient {
  constructor(options: WsClientOptions) {
    this.bootstrap(options);
  }

  async bootstrap(options: WsClientOptions) {
    const manager = new ClusterManager(join(__dirname, './bot.js'), {
      totalShards: options.totalShards || 'auto',
      shardsPerClusters: options.shardsPerCluster || 2,
      mode: 'process',
      token: options.token,
    });

    process.env.discordOptions = JSON.stringify(options);

    manager.spawn({ timeout: -1 });
    manager.on('clusterCreate', (cluster) =>
      console.log(`Cluster ${cluster.id} created`, 'ShardingManager'),
    );
  }
}
