import transmit from '@adonisjs/transmit/services/main'

export default class WebhooksController {
  public async store(): Promise<void> {
    transmit.broadcast('notification', { message: 'Nouvelle notification' })
  }
}