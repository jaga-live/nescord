import { GatewayIntentBits } from 'discord.js';
import { EventType } from '../enum/event-type.enum';

export interface WsClientOptions {
  token: string;
  gRPCHost: string;
  intents: number[] | GatewayIntentBits[];
  events?: string | EventType[];
  shardsPerCluster?: number;
}
