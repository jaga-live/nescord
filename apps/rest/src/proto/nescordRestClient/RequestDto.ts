// Original file: apps/rest/src/proto/nescord-rest.proto

import type { QueryDto as _nescordRestClient_QueryDto, QueryDto__Output as _nescordRestClient_QueryDto__Output } from '../nescordRestClient/QueryDto';

export interface RequestDto {
  'resource'?: (string);
  'action'?: (string);
  'method'?: (string);
  'query'?: (_nescordRestClient_QueryDto | null);
  'body'?: (string);
  'format'?: (string);
  'ignoreCache'?: (boolean);
}

export interface RequestDto__Output {
  'resource'?: (string);
  'action'?: (string);
  'method'?: (string);
  'query'?: (_nescordRestClient_QueryDto__Output);
  'body'?: (string);
  'format'?: (string);
  'ignoreCache'?: (boolean);
}
