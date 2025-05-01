import { IntentsBitField } from 'discord.js';
import { EventType } from '../enum/event-type.enum';

export interface WsClientOptions {
  token: string;
  gRPCHost: string;
  intents: IntentsBitField[];
  events?: string | EventType[];
  shardsPerCluster?: number;
}
