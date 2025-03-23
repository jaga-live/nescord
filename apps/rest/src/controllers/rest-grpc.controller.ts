import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { RestServerOptions } from '../interface/rest-server.interface';
import { RestServiceHandlers } from '../proto/nescordRestClient/RestService';
import { ResourceHandlerService } from '../service/server/resource-handler.service';

export class RestGrpcController implements RestServiceHandlers {
  [name: string]: any;
  private resourceHandler: ResourceHandlerService;

  constructor(options: RestServerOptions) {
    this.resourceHandler = new ResourceHandlerService(options);
  }

  async call(call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) {
    const res = await this.resourceHandler.handle(call.request);

    callback(null, { data: res ? JSON.stringify(res) : null });
  }
}
