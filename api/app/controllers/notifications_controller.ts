import type { HttpContext } from '@adonisjs/core/http'
import Notification from '#models/notification'

export default class NotificationsController {
  async index({ response }: HttpContext) {
    const notifications = await Notification.query().orderBy('createdAt', 'desc')

    return response.json(notifications)
  }
}