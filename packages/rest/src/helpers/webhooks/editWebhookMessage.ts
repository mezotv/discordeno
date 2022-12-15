import type { BigString, DiscordMessage } from '@discordeno/types'
import { InteractionResponseTypes } from '@discordeno/types'
import type { RestManager } from '../../restManager.js'
import type { Message } from '../../transformers/message.js'
import type { InteractionCallbackData } from '../../types'

/**
 * Edits a webhook message.
 *
 * @param rest - The rest manager to use to make the request.
 * @param webhookId - The ID of the webhook to edit the message of.
 * @param token - The webhook token, used to edit the message.
 * @param messageId - The ID of the message to edit.
 * @param options - The parameters for the edit of the message.
 * @returns An instance of the edited {@link Message}.
 *
 * @remarks
 * Fires a _Message Update_ gateway event.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message}
 */
export async function editWebhookMessage (
  rest: RestManager,
  webhookId: BigString,
  token: string,
  messageId: BigString,
  options: InteractionCallbackData & { threadId?: BigString }
): Promise<Message> {
  const result = await rest.runMethod<DiscordMessage>(
    rest,
    'PATCH',
    rest.constants.routes.WEBHOOK_MESSAGE(webhookId, token, messageId, options),
    {
      ...rest.transformers.reverse.interactionResponse(rest, {
        type: InteractionResponseTypes.UpdateMessage,
        data: options
      }).data,
      file: options.file
    }
  )

  return rest.transformers.message(rest, result)
}