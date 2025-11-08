import { GuildMemberDto } from './guild-member.dto';

export class GuildMemberVoiceStateDto {
  public member: GuildMemberDto;
  public guildId: string;
  public channelId: string | null;
  public sessionId: string;
  public deaf: boolean;
  public mute: boolean;
  public selfDeaf: boolean;
  public selfMute: boolean;
  public selfVideo: boolean;
  public suppress: boolean;

  constructor(voiceState: any) {
    if (!voiceState) {
      return;
    }

    this.member = new GuildMemberDto(voiceState.member);
    this.guildId = voiceState.guild_id;
    this.channelId = voiceState.channel_id;
    this.sessionId = voiceState.session_id;
    this.deaf = voiceState.deaf;
    this.mute = voiceState.mute;
    this.selfDeaf = voiceState.self_deaf;
    this.selfMute = voiceState.self_mute;
    this.selfVideo = voiceState.self_video;
    this.suppress = voiceState.suppress;
  }
}
