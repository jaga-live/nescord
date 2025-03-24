import { RestClientOptions } from './interface/rest-client.interface';
import { MemberService } from './service/client/member.service';
import { MessageService } from './service/client/message.service';

export class RestClient {
  private options: RestClientOptions;

  //Public methods
  public member: MemberService;
  public message: MessageService;

  constructor(options: RestClientOptions) {
    this.options = options;
    this.member = new MemberService(this.options);
    this.message = new MessageService(this.options);
  }
}
