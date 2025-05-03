# @nescord/ws 🚀

A scalable Discord WebSocket microservice for managing large-scale events, utilizing hybrid sharding and gRPC communication.

[![Documentation](https://img.shields.io/badge/Documentation-green)](https://github.com/jaga-live/nescord)

## Features ✨

- **Scalable Sharding**: Efficiently manage Discord bot sharding using `discord-hybrid-sharding`.
- **gRPC Communication**: Utilize gRPC for seamless event transmission to the main bot microservice.
- **Modular Architecture**: Customize client and listener interfaces to suit your application's needs.
- **TypeScript Support**: Benefit from type safety and enhanced development experience.

## Installation 📦

```bash
npm install @nescord/ws
```

## Usage 🛠️

### WebSocket Client 🔗

The `WsClient` is responsible for receiving events from the Discord Gateway and forwarding them to the main bot via gRPC.

> 💡The app using this package should be a standalone microservice.

```typescript
import { WsClient } from '@nescord/ws';
import { GatewayIntentBits } from 'discord.js';

const client = new WsClient({
  token: 'YOUR_DISCORD_BOT_TOKEN',
  gRPCHost: 'bot-main:5000',
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  events: '*',
  shardsPerCluster: 2,
});
```

**token**: Your discord bot token.

**gRPCHost**: The address of the gRPC server to which events will be forwarded (should be the address of the main bot microservice). This should be in the format `host:port`.

**intents**: An array of `GatewayIntentBits` that specify the types of events your bot is interested in receiving. These intents help manage the flow of information from the Discord Gateway.

**events**: Defines which events should be listened for. Using '\*' will listen for all events, but specific event types can also be specified from `EventType` enum (e.g., `EventType.MessageCreate`).

**shardsPerCluster**: The number of shards to be allocated per cluster. This helps in distributing the workload across multiple instances of the bot.

---

### WebSocket Listener 👂

The `WsListener` listens for events emitted by the `WsClient` and processes them accordingly.

> 💡 The application utilizing `WsListener` should serve as the primary bot microservice. Since this layer does not directly interact with the Discord gateway, it avoids race conditions and can be horizontally scaled to manage increased load.

```typescript
import { WsListener } from '@nescord/ws';

const listener = new WsListener({
  gRPCHost: 'bot-main:5000',
});

listener.on('messageCreate', (message) => {
  console.log(message);
});
```

**gRPCHost**: The address of the gRPC server from which events will be received (ideally bot-ws will use the same address). This should be in the format `host:port`.

---

### REST Client 🌐

The `@nescord/rest` package allows users to interact with the Discord API, featuring built-in configurable caching to optimize performance.

For more details, visit the [@nescord/rest](https://www.npmjs.com/package/@nescord/rest).

## License 📝

This project is licensed under Apache License 2.0.

## Contributing 🤝

For any additional information or questions, please refer to the [GitHub repository](https://github.com/jaga-live/nescord) or open an issue.

Thank you for using `@nescord/ws`! We hope it enhances your Discord bot development experience.
