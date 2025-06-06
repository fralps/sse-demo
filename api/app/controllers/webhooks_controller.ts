import type { HttpContext } from '@adonisjs/core/http'
import transmit from '@adonisjs/transmit/services/main'
import Notification from '#models/notification'

export default class WebhooksController {
  // Request example: curl -X POST http://localhost:3333/webhooks -H "Content-Type: application/json" -d '{"text": "Votre commande est prête"}'
  public async store({ request }: HttpContext): Promise<void> {
    const { text } = request.body()

    const newNotification = await Notification.create({ text })

    transmit.broadcast('notification', newNotification)
  }
}