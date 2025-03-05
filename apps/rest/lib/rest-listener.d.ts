import { RestListenerOptions } from "./interface/rest-listener.interface";
export declare class RestListener {
    private options;
    constructor(options: RestListenerOptions);
    private initializeGrpcServer;
}
