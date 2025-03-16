// Original file: apps/rest/src/proto/nescord-rest.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { RequestDto as _nescordRestClient_RequestDto, RequestDto__Output as _nescordRestClient_RequestDto__Output } from '../nescordRestClient/RequestDto';
import type { ResponseDto as _nescordRestClient_ResponseDto, ResponseDto__Output as _nescordRestClient_ResponseDto__Output } from '../nescordRestClient/ResponseDto';

export interface RestServiceClient extends grpc.Client {
  call(argument: _nescordRestClient_RequestDto, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_nescordRestClient_ResponseDto__Output>): grpc.ClientUnaryCall;
  call(argument: _nescordRestClient_RequestDto, metadata: grpc.Metadata, callback: grpc.requestCallback<_nescordRestClient_ResponseDto__Output>): grpc.ClientUnaryCall;
  call(argument: _nescordRestClient_RequestDto, options: grpc.CallOptions, callback: grpc.requestCallback<_nescordRestClient_ResponseDto__Output>): grpc.ClientUnaryCall;
  call(argument: _nescordRestClient_RequestDto, callback: grpc.requestCallback<_nescordRestClient_ResponseDto__Output>): grpc.ClientUnaryCall;
  
}

export interface RestServiceHandlers extends grpc.UntypedServiceImplementation {
  call: grpc.handleUnaryCall<_nescordRestClient_RequestDto__Output, _nescordRestClient_ResponseDto>;
  
}

export interface RestServiceDefinition extends grpc.ServiceDefinition {
  call: MethodDefinition<_nescordRestClient_RequestDto, _nescordRestClient_ResponseDto, _nescordRestClient_RequestDto__Output, _nescordRestClient_ResponseDto__Output>
}
