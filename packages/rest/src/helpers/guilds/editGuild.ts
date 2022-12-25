import { routes } from '@discordeno/constant'
import type {
  BigString,
  DefaultMessageNotificationLevels,
  DiscordGuild, DiscordModifyGuild, ExplicitContentFilterLevels,
  GuildFeatures,
  SystemChannelFlags,
  VerificationLevels
} from '@discordeno/types'
import type { RestManager } from '../../restManager.js'
import type { Guild } from '../../transformers/guild.js'

// TODO: Put the `shardId` parameter before `options`.

/**
 * Edits a guild's settings.
 *
 * @param rest - The rest manager to use to make the request.
 * @param guildId - The ID of the guild to edit.
 * @param shardId - The ID of the shard the guild is in.
 * @param options - The parameters for the edit of the guild.
 * @returns An instance of the edited {@link Guild}.
 *
 * @remarks
 * Requires the `MANAGE_GUILD` permission.
 *
 * If attempting to add or remove the {@link GuildFeatures.Community} feature:
 * - Requires the `ADMINISTRATOR` permission.
 *
 * Fires a _Guild Update_ gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild}
 */
export async function editGuild (
  rest: RestManager,
  guildId: BigString,
  options: ModifyGuild,
  shardId: number
): Promise<Guild> {
  const result = await rest.runMethod<DiscordGuild>(

    'PATCH',
    routes.GUILD(guildId),
    {
      name: options.name,
      verification_levels: options.verificationLevel,
      default_message_notifications: options.defaultMessageNotifications,
      explicit_content_filter: options.explicitContentFilter,
      afk_channel_id: options.afkChannelId
        ? options.afkChannelId.toString()
        : options.afkChannelId,
      afk_timeout: options.afkTimeout,
      icon: options.icon,
      owner_id: options.ownerId ? options.ownerId.toString() : options.ownerId,
      splash: options.splash,
      discovery_splash: options.discoverySplash,
      banner: options.banner,
      system_channel_id: options.systemChannelId
        ? options.systemChannelId.toString()
        : options.systemChannelId,
      system_channel_flags: options.systemChannelFlags,
      rules_channel_id: options.rulesChannelId
        ? options.rulesChannelId.toString()
        : options.rulesChannelId,
      public_updates_channel_id: options.publicUpdatesChannelId
        ? options.publicUpdatesChannelId.toString()
        : options.publicUpdatesChannelId,
      preferred_locale: options.preferredLocale,
      features: options.features,
      premium_progress_bar_enabled: options.premiumProgressBarEnabled
    } as DiscordModifyGuild
  )

  return rest.transformers.guild(rest, { guild: result, shardId })
}

/** https://discord.com/developers/docs/resources/guild#modify-guild */
export interface ModifyGuild {
  /** Guild name */
  name?: string
  /** Verification level */
  verificationLevel?: VerificationLevels | null
  /** Default message notification filter level */
  defaultMessageNotifications?: DefaultMessageNotificationLevels | null
  /** Explicit content filter level */
  explicitContentFilter?: ExplicitContentFilterLevels | null
  /** Id for afk channel */
  afkChannelId?: BigString | null
  /** Afk timeout in seconds */
  afkTimeout?: number
  /** Base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the `ANIMATED_ICON` feature) */
  icon?: string | null
  /** User id to transfer guild ownership to (must be owner) */
  ownerId?: BigString
  /** Base64 16:9 png/jpeg image for the guild splash (when the server has `INVITE_SPLASH` feature) */
  splash?: string | null
  /** Base64 16:9 png/jpeg image for the guild discovery spash (when the server has the `DISCOVERABLE` feature) */
  discoverySplash?: string | null
  /** Base64 16:9 png/jpeg image for the guild banner (when the server has BANNER feature) */
  banner?: string | null
  /** The id of the channel where guild notices such as welcome messages and boost events are posted */
  systemChannelId?: BigString | null
  /** System channel flags */
  systemChannelFlags?: SystemChannelFlags
  /** The id of the channel where Community guilds display rules and/or guidelines */
  rulesChannelId?: BigString | null
  /** The id of the channel where admins and moderators of Community guilds receive notices from Discord */
  publicUpdatesChannelId?: BigString | null
  /** The preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US" */
  preferredLocale?: string | null
  /** Enabled guild features */
  features?: GuildFeatures[]
  /** Whether the guild's boost progress bar should be enabled */
  premiumProgressBarEnabled?: boolean
}