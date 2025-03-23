import { RestClientOptions } from './interface/rest-client.interface';
import { MemberService } from './service/client/member.service';

export class RestClient {
  private options: RestClientOptions;

  //Public methods
  public member: MemberService;

  constructor(options: RestClientOptions) {
    this.options = options;
    this.member = new MemberService(this.options);
  }
}
