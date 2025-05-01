# @nescord/ws

Welcome to the detailed documentation for the `@nescord/ws` package, a scalable Discord WebSocket microservice designed for managing large-scale events with ease.

## Overview

The `@nescord/ws` package provides a robust framework for Discord bot sharding and event management through gRPC communication. It is built to support modular client and listener interfaces with full TypeScript support.

## Features

- **Scalable Sharding**: Efficiently manage Discord bot sharding using `discord-hybrid-sharding`.
- **gRPC Communication**: Utilize gRPC for seamless event transmission to the main bot microservice.
- **Modular Architecture**: Customize client and listener interfaces to suit your application's needs.
- **TypeScript Support**: Benefit from type safety and enhanced development experience.

## Installation

To install the package, run:

```bash
npm install @nescord/ws
```

## Usage

### WebSocket Client

The `WsClient` is responsible for receiving events from the Discord Gateway and forwarding them to the main bot via gRPC.

> 💡The app using this package should be a standalone microservice.

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

**token**: Your discord bot token.

**gRPCHost**: The address of the gRPC server to which events will be forwarded (should be the address of the main bot microservice). This should be in the format `host:port`.

**intents**: An array of `GatewayIntentBits` that specify the types of events your bot is interested in receiving. These intents help manage the flow of information from the Discord Gateway.

**events**: Defines which events should be listened for. Using '\*' will listen for all events, but specific event types can also be specified from `EventType` enum.

**shardsPerCluster**: The number of shards to be allocated per cluster. This helps in distributing the workload across multiple instances of the bot.

### WebSocket Listener

The `WsListener` listens for events from the WebSocket microservice and processes them accordingly.

> 💡 The application utilizing `WsListener` should serve as the primary bot microservice. Since this layer does not directly interact with the Discord gateway, it avoids race conditions and can be horizontally scaled to manage increased load.

```typescript
import { WsListener } from '@nescord/ws';

const listener = new WsListener({
  token: 'YOUR_DISCORD_BOT_TOKEN',
  // Additional listener configuration
});
```

**token**: Your discord bot token.

## API Reference

### Classes

- `WsClient`: Manages connection to the Discord Gateway and forwards events to the gRPC server.
- `WsListener`: Listens for incoming events from the WebSocket service.

### Interfaces

- **WsClientOptions**: Configuration options for the `WsClient`.
- **WsListenerOptions**: Configuration options for the `WsListener`.

### Enums

- `EventType`: Defines the types of Discord websocket events that can be handled.

## Contributing

Contributions are welcome! Please open an issue to discuss potential changes or improvements.

## License

This project is licensed under the Apache License 2.0. See the LICENSE file for more details.

For any additional information or questions, please refer to the [GitHub repository](https://github.com/jaga-live/nescord) or open an issue.

Thank you for using `@nescord/ws`! We hope it enhances your Discord bot development experience.
