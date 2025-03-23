export interface RestServerOptions {
  gRPCHost: string;
  botToken: string;
  apiVersion?: string;
  cache?: CacheOptions;
}

export interface CacheOptions {
  member?: number;
  guild?: number;
  message?: number;
  channel?: number;
}
