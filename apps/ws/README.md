# @nescord/ws 🚀

A scalable Discord WebSocket microservice for managing large-scale events, utilizing hybrid sharding and gRPC communication.

[![Documentation](https://img.shields.io/badge/Documentation-green)](https://github.com/jaga-live/nescord/blob/main/docs/ws-docs.md)

## Features ✨

- Seamless Discord bot sharding via `discord-hybrid-sharding`
- gRPC-based event listener and server
- Modular client and listener interfaces
- TypeScript support

## Installation 📦

```bash
npm install @nescord/ws
```

## Usage 🛠️

### WebSocket Client 🔗

This client receives events from Discord Gateway and forwards them to the main bot via gRPC.

```typescript
import { WsClient } from '@nescord/ws';

const client = new WsClient({
  token: 'YOUR_DISCORD_BOT_TOKEN',
  gRPCHost: 'bot-main:5000',
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  shardsPerCluster: 2,
  events: '*',
});
```

### WebSocket Listener 👂

This listener receives events from the ws microservice.

```typescript
import { WsListener } from '@nescord/ws';

const listener = new WsListener({
  token: 'YOUR_DISCORD_BOT_TOKEN',
  gRPCHost: 'bot-main:5000',
});

listener.on('messageCreate', (message) => {
  console.log(message);
});
```

### REST Client 🌐

The `@nescord/rest` package allows users to interact with the Discord API, featuring built-in configurable caching to optimize performance.

For more details, visit the [@nescord/rest](https://www.npmjs.com/package/@nescord/rest).

## License 📝

This project is licensed under Apache License 2.0.

## Contributing 🤝

Pull requests are welcome! Please open an issue first to discuss what you would like to change.
