import { editMember } from "./edit_member.ts";

/** Kicks a member from a voice channel */
export function disconnectMember(guildID: string, memberID: string) {
  return editMember(guildID, memberID, { channel_id: null });
}
