import { RestClientOptions } from './interface/rest-client.interface';
import { GrpcClient } from './microservice/gRPC';
import { RestServiceClient } from './proto/nescordRestClient/RestService';

export class RestClient {
  private options: RestClientOptions;
  private grpcClient: RestServiceClient;

  constructor(options: RestClientOptions) {
    this.options = options;
    this.grpcClient = new GrpcClient().set(this.options);
  }

  async getMember(guildId: string, memberId: string) {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.call(
        { action: 'getMember', query: { guildId, memberId } },
        (err, res) => {
          if (err) {
            reject(err);
          }

          const data = res.data ? JSON.parse(res.data) : null;

          resolve(data);
        },
      );
    });
  }
}
