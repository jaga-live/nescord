import { WsClient } from '@nescord/ws';
import { EventType } from '@nescord/ws/lib/enum/event-type.enum';
import { GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.DISCORD_BOT_TOKEN as string;
const gRPCHost = process.env.GRPC_HOST as string;
const intents = process.env.DISCORD_INTENTS as string;
const events = process.env.EVENTS as string;
const allEvents = Object.values(EventType);

new WsClient({
  token,
  gRPCHost,
  intents: (intents?.split(',') || []).map(
    (intent) => intent as unknown as GatewayIntentBits,
  ),
  events: events === '*' ? allEvents : (events?.split(',') as EventType[]),
});
