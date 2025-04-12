import { IntentsBitField } from 'discord.js';

export interface WsClientOptions {
  token: string;
  gRPCHost: string;
  intents: IntentsBitField[];
  shardsPerCluster?: number;
}
