// Original file: apps/rest/src/proto/nescord-rest.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { HttpRequest as _nescordRestClient_HttpRequest, HttpRequest__Output as _nescordRestClient_HttpRequest__Output } from '../nescordRestClient/HttpRequest';
import type { HttpResponse as _nescordRestClient_HttpResponse, HttpResponse__Output as _nescordRestClient_HttpResponse__Output } from '../nescordRestClient/HttpResponse';

export interface RestServiceClient extends grpc.Client {
  call(argument: _nescordRestClient_HttpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_nescordRestClient_HttpResponse__Output>): grpc.ClientUnaryCall;
  call(argument: _nescordRestClient_HttpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_nescordRestClient_HttpResponse__Output>): grpc.ClientUnaryCall;
  call(argument: _nescordRestClient_HttpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_nescordRestClient_HttpResponse__Output>): grpc.ClientUnaryCall;
  call(argument: _nescordRestClient_HttpRequest, callback: grpc.requestCallback<_nescordRestClient_HttpResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RestServiceHandlers extends grpc.UntypedServiceImplementation {
  call: grpc.handleUnaryCall<_nescordRestClient_HttpRequest__Output, _nescordRestClient_HttpResponse>;
  
}

export interface RestServiceDefinition extends grpc.ServiceDefinition {
  call: MethodDefinition<_nescordRestClient_HttpRequest, _nescordRestClient_HttpResponse, _nescordRestClient_HttpRequest__Output, _nescordRestClient_HttpResponse__Output>
}
