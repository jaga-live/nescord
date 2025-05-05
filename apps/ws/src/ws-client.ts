import { WsClientOptions } from './interface/ws-client-options.interface';
import { ClusterManager, Cluster } from 'discord-hybrid-sharding';
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
      respawn: options.respawn || false,
    });

    process.env.discordOptions = JSON.stringify(options);

    console.log('🔧 [ClusterManager] Starting shard spawn process...');
    try {
      await manager.spawn({
        timeout: options.timeout || -1,
        delay: options.spawnDelay || 7000,
      });

      console.log(
        '✅ [ClusterManager] All clusters have been spawned successfully!',
      );
    } catch (error) {
      console.error('❌ [ClusterManager] Failed to spawn clusters:', error);

      process.exit(1);
    }

    manager.on('clusterCreate', (cluster: Cluster) => {
      console.log(
        `🚀 [Cluster ${cluster.id}] Created with ${cluster.shardList.length} shards`,
      );

      cluster.on('spawn', () => {
        console.log(
          `✅ [Cluster ${cluster.id}] Ready and connected to Discord`,
        );
      });

      cluster.on('error', (err) => {
        console.error(`❌ [Cluster ${cluster.id}] Error occurred:`, err);
      });

      cluster.on('death', () => {
        console.warn(`⚠️ [Cluster ${cluster.id}] Process died`);
      });

      cluster.on('message', (message) => {
        console.info(`♻️ [Cluster message] ${message}`);
      });
    });
  }
}
