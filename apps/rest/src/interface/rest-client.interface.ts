export interface RestClientOptions {
  gRPCHost: string;
  format?: DataFormat;
}

export enum DataFormat {
  Raw = 'raw',
  Formatted = 'formatted',
}
