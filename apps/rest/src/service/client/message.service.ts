import { RestClientOptions } from '../../interface/rest-client.interface';
import { GrpcClient } from '../../microservice/gRPC';
import { RestServiceClient } from '../../proto/nescordRestClient/RestService';

export class MessageService {
  private options: RestClientOptions;
  private grpcClient: RestServiceClient;

  constructor(options: RestClientOptions) {
    this.options = options;
    this.grpcClient = new GrpcClient().set(this.options);
  }

  async sendMessage(channelId: string, content: string) {
    return new Promise<void>(() => {
      this.grpcClient.call(
        {
          resource: 'message',
          action: 'sendMessage',
          query: { channelId },
          body: JSON.stringify({ content }),
        },
        () => {},
      );
    });
  }
}
