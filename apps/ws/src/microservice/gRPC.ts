import { EventsServiceClient } from '../proto/ws/EventsService';
import { join } from 'path';
import { loadSync } from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import { ProtoGrpcType } from '../proto/ws';
import { WsClientOptions } from '../interface/ws-client-options.interface';

export class GrpcClient {
  private static instance: GrpcClient;
  public grpcClient: EventsServiceClient;

  private constructor(options: WsClientOptions) {
    this.grpcClient = this.set(options);
  }

  set(options: WsClientOptions) {
    const packageDefinition = loadSync(join(__dirname, '../proto/ws.proto'));
    const proto = grpc.loadPackageDefinition(
      packageDefinition,
    ) as unknown as ProtoGrpcType;

    const channelOptions = {
      // Unlimited message size
      'grpc.max_send_message_length': -1,
      'grpc.max_receive_message_length': -1,

      // Keepalive: Helps to detect broken connections
      'grpc.keepalive_time_ms': 30000, // Ping every 30s
      'grpc.keepalive_timeout_ms': 10000, // Wait 10s for ping ack
      'grpc.keepalive_permit_without_calls': 1, // Allow keepalive even with no active RPCs

      // Reconnection/backoff config: Helps in recovering from transient failures
      'grpc.initial_reconnect_backoff_ms': 1000,
      'grpc.max_reconnect_backoff_ms': 10000,

      // Service config
      'grpc.service_config': JSON.stringify({
        loadBalancingConfig: [{ round_robin: {} }],
        methodConfig: [
          {
            name: [{}],
            retryPolicy: {
              maxAttempts: 5,
              initialBackoff: '1s',
              maxBackoff: '5s',
              backoffMultiplier: 1.5,
              retryableStatusCodes: ['UNAVAILABLE'],
            },
          },
        ],
      }),
    };

    this.grpcClient = new proto.ws.EventsService(
      options.gRPCHost,
      grpc.credentials.createInsecure(),
      channelOptions,
    ) as unknown as EventsServiceClient;

    return this.grpcClient;
  }

  public static getInstance(options: WsClientOptions): GrpcClient {
    if (!GrpcClient.instance) {
      GrpcClient.instance = new GrpcClient(options);
    }

    return GrpcClient.instance;
  }
}
