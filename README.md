# nescord 🚀

Nescord is designed for building highly scalable Discord bots with a microservice architecture. It provides a set of packages that enable horizontal scaling, efficient rate limit handling, and optimized performance for large-scale bot applications.

> ⚠️ **Warning:** This library is still under development and a stable version is yet to be released.

## Use Cases 🎯

- **Large-scale Discord bots**: Ideal for applications that need to handle many guilds and high event volumes
- **Load-balanced bot deployments**: Perfect for scenarios requiring horizontal scaling of bot logic
- **High-availability requirements**: Microservice architecture improves resilience and uptime

## Architecture Overview 🏗️

Nescord uses a microservice architecture designed specifically for high-scale Discord bots, with a strong focus on modularity, performance, and maintainability. Each major responsibility is isolated into its own microservice:

**bot-ws (WebSocket Microservice)**:
This service is dedicated to handling Discord Gateway events. By keeping it lightweight and free from application logic, it can handle a large number of shards efficiently. Thanks to its simplicity, this service rarely needs to be restarted, which significantly reduces downtime.

**bot-main (Core Bot Logic)**:
The main application logic—commands, business rules, and feature handling—lives here. Because it doesn't maintain any direct connection to the Discord Gateway, it can be restarted or scaled independently without affecting bot uptime. This separation helps developers deploy updates frequently with minimal disruption.

**bot-rest (REST Microservice)**:
All REST API interactions with Discord are handled here, including sending messages and managing guild data. This service helps control Discord's rate limits effectively and includes built-in caching to reduce redundant API calls.

## Packages 📦

### @nescord/ws

The WebSocket package manages Discord Gateway connections and events:

- **Purpose**: Receives WebSocket events from Discord and forwards them to the main bot microservice
- **Architecture**: Should be maintained as a single instance or dedicated microservice
- **Benefits**: Prevents race conditions while allowing the bot microservice to scale horizontally
- **Features**:

  - Scalable sharding using hybrid sharding approach
  - gRPC communication for efficient event transmission
  - Modular architecture with customizable interfaces
  - Uses `discord-hybrid-sharding` under the hood.

  <br>

  > Note💡: This package should be used as a standalone microservice and cannot be horizontally scaled.

### @nescord/rest

The REST package handles API interactions with Discord:

- **Purpose**: Manages REST API calls to Discord with built-in rate limit handling
- **Architecture**: Should be hosted as a separate microservice
- **Benefits**: Centralizes rate limit handling and provides configurable caching
- **Features**:

  - Intelligent rate limit handling to prevent API errors
  - Configurable caching system to reduce API calls
  - Optimized for high-throughput environments
  - Uses `@discordeno/rest` under the hood.
    <br>

  > Note💡: This package should be used as a standalone microservice and cannot be horizontally scaled.

## Installation 💻

```bash
# Install WebSocket package
npm install @nescord/ws

# Install REST package
npm install @nescord/rest

```

## Getting Started 🚀

Here's how to set up a scalable Discord bot using Nescord:

### 1. WebSocket Microservice (bot-ws)

This service handles all Discord gateway connections and events.

> Note💡: This can be implemented as a standalone application or deployed using the provided docker-compose configuration without requiring code modifications.

```typescript
// bot-ws/index.ts
import { WsClient } from '@nescord/ws';
import { GatewayIntentBits } from 'discord.js';
import { EventType } from '@nescord/ws/lib/enum/event-type.enum';

new WsClient({
  token: 'YOUR_DISCORD_BOT_TOKEN',
  gRPCHost: 'bot-main:5000', // Address where bot-main is listening
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  shardsPerCluster: 2,
  events: [
    EventType.MessageCreate,
    EventType.GuildCreate,
    EventType.MessageReactionAdd,
  ], // Use '*' for all events.
});
```

This above code will start listening for the events from the Discord gateway and forward them to the bot-main microservice via gRPC.

Visit detailed documentation - [@nescord/ws](https://github.com/jaga-live/nescord/blob/main/apps/ws/README.md)

### 2. REST Microservice (bot-rest)

This service handles all REST API interactions with Discord with built-in rate limit handling and configurable caching.

```typescript
// bot-rest/index.ts
import { RestServer } from '@nescord/rest';

new RestServer({
  token: 'YOUR_DISCORD_BOT_TOKEN',
  port: 6000,
  cache: {
    enabled: true,
    ttl: 60000,
  },
});
```

The above code will start a REST server that handles all API interactions requested from the bot-main microservice and forwards them to Discord.

Visit detailed documentation - [@nescord/rest](https://github.com/jaga-live/nescord/blob/main/apps/rest/README.md)

### 3. Main Bot Microservice (bot-main)

This service contains your bot's business logic and can be horizontally scaled.

```typescript
// bot-main/index.ts
import { WsListener } from '@nescord/ws';
import { RestClient } from '@nescord/rest';

// Set up the WebSocket listener
const listener = new WsListener({
  gRPCHost: '0.0.0.0:5000',
});

// Set up the REST client
const rest = new RestClient({
  token: 'YOUR_DISCORD_BOT_TOKEN',
  cache: {
    enabled: true,
    ttl: 60000, // Cache TTL in milliseconds
  },
});

// Handle events from the WebSocket microservice
listener.on('messageCreate', async (message) => {
  if (message.content === '!ping') {
    // Use REST client to send a response
    await rest.createMessage(message.channel.id, {
      content: 'Pong!',
    });
  }
});

// Handle other events
listener.on('guildCreate', (guild) => {
  console.log(`Bot joined a new guild: ${guild.name}`);
});
```

The above code WsListener acts as a listener for the events received from the bot-ws microservice and RestClient acts as a client for making rest calls to the bot-rest microservice.

### Docker Compose Example

Alternatively, you can use the provided docker-compose configuration for bot-ws and bot-rest microservices which are ready to be deployed.

```yaml
version: '3.8'

services:
  nescord-ws:
    image: jagalive/nescord-ws:latest
    container_name: nescord-ws # Replace with your bot name if needed

    # Option 1: Use .env file in same folder Or inline environment variables
    environment:
      - DISCORD_BOT_TOKEN=your_bot_token
      - GRPC_HOST=bot-main:5000
      - DISCORD_INTENTS=1,2 # comma separated list of GatewayIntentBits (discord.js)


    # Option 2: Use .env file in same folder
    # env_file:
    #   - .env
```

## Documentation 📖

For detailed documentation on each package:

- [@nescord/ws documentation](https://github.com/jaga-live/nescord/blob/main/apps/ws/README.md)
- [@nescord/rest documentation](https://github.com/jaga-live/nescord/blob/main/apps/rest/README.md)

## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request.
