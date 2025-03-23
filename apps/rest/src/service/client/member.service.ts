import { RequestOptions } from 'http';
import { RestClientOptions } from '../../interface/rest-client.interface';
import { GrpcClient } from '../../microservice/gRPC';
import { RestServiceClient } from '../../proto/nescordRestClient/RestService';

export class MemberService {
  private options: RestClientOptions;
  private grpcClient: RestServiceClient;

  constructor(options: RestClientOptions) {
    this.options = options;
    this.grpcClient = new GrpcClient().set(this.options);
  }

  async get(guildId: string, memberId: string, options?: RequestOptions) {
    return new Promise<string>((resolve, reject) => {
      this.grpcClient.call(
        {
          resource: 'member',
          action: 'getMember',
          query: { guildId, memberId },
          ...options,
        },
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
