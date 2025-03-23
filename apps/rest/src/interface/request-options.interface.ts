import { DataFormat } from './rest-client.interface';

export interface RequestOptions {
  format?: DataFormat;
  ignoreCache?: boolean;
}
