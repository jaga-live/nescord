// Original file: apps/rest/src/proto/nescord-rest.proto

import type { QueryDto as _nescordRestClient_QueryDto, QueryDto__Output as _nescordRestClient_QueryDto__Output } from '../nescordRestClient/QueryDto';

export interface RequestDto {
  'action'?: (string);
  'query'?: (_nescordRestClient_QueryDto | null);
  'body'?: (string);
}

export interface RequestDto__Output {
  'action'?: (string);
  'query'?: (_nescordRestClient_QueryDto__Output);
  'body'?: (string);
}
