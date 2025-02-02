import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class EventsHandler {
  constructor() {}

  @GrpcMethod('EventsService', 'messageCreate')
  async messageCreate(message: any) {
    console.log('test')
  }

  @GrpcMethod('EventsService', 'messageUpdate')
  async messageUpdate({ oldMessage, newMessage }: any) {}

  @GrpcMethod('EventsService', 'messageDelete')
  async messageDelete(message: any) {}

  @GrpcMethod('EventsService', 'messageReactionAdd')
  async messageReactionAdd(message: any) {}

  @GrpcMethod('EventsService', 'guildMemberAdd')
  async memberAdd(member: any) {}

  @GrpcMethod('EventsService', 'guildMemberUpdate')
  async memberUpdate(memberUpdateDto: any) {}

  @GrpcMethod('EventsService', 'channelCreate')
  async channelCreate(channel: any) {}

  @GrpcMethod('EventsService', 'channelUpdate')
  async channelUpdate(channel: any) {}

  @GrpcMethod('EventsService', 'channelDelete')
  async channelDelete(channel: any) {}

  @GrpcMethod('EventsService', 'guildCreate')
  async guildCreate(guild: any) {}

  @GrpcMethod('EventsService', 'guildUpdate')
  async guildUpdate(guildUpdateDto: any) {}

  @GrpcMethod('EventsService', 'roleCreate')
  async roleCreate(role: any) {}

  @GrpcMethod('EventsService', 'roleUpdate')
  async roleUpdate(roleUpdateDto: any) {}
}
