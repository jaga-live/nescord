import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { RestServiceHandlers } from "../proto/nescordRestClient/RestService";
import { createRestManager, RestManager } from '@discordeno/rest'
import { RestServerOptions } from "../interface/rest-server.interface";

export class RestGrpcController implements RestServiceHandlers {
  [name: string]: any;
  private discordRest: RestManager

  constructor(
    options: RestServerOptions
  ) {
    this.discordRest = createRestManager({
      token: options.botToken
    })
  }

  async call(call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) {
    const { request } = call;
    const res = await this.discordRest.getMember(request.query.guildId, request.query.memberId)

    callback(null, { data: JSON.stringify(res) });
  }
}
