import type { BigString, DiscordScheduledEvent } from '@discordeno/types'
import type { RestManager } from '../../../restManager.js'
import type { ScheduledEvent } from '../../../transformers/scheduledEvent.js'

/**
 * Gets a scheduled event by its ID.
 *
 * @param rest - The rest manager to use to make the request.
 * @param guildId - The ID of the guild to get the scheduled event from.
 * @param eventId - The ID of the scheduled event to get.
 * @param options - The parameters for the fetching of the scheduled event.
 * @returns An instance of {@link ScheduledEvent}.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event}
 */
export async function getScheduledEvent (
  rest: RestManager,
  guildId: BigString,
  eventId: BigString,
  options?: { withUserCount?: boolean }
): Promise<ScheduledEvent> {
  const result = await rest.runMethod<DiscordScheduledEvent>(
    rest,
    'GET',
    rest.constants.routes.GUILD_SCHEDULED_EVENT(
      guildId,
      eventId,
      options?.withUserCount
    )
  )

  return rest.transformers.scheduledEvent(rest, result)
}