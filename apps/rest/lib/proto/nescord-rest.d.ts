import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';
import type { RestServiceClient as _nescordRestClient_RestServiceClient, RestServiceDefinition as _nescordRestClient_RestServiceDefinition } from './nescordRestClient/RestService';
type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
    new (...args: ConstructorParameters<Constructor>): Subtype;
};
export interface ProtoGrpcType {
    nescordRestClient: {
        HttpRequest: MessageTypeDefinition;
        HttpResponse: MessageTypeDefinition;
        RestService: SubtypeConstructor<typeof grpc.Client, _nescordRestClient_RestServiceClient> & {
            service: _nescordRestClient_RestServiceDefinition;
        };
    };
}
export {};
