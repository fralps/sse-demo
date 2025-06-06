import type { HttpContext } from '@adonisjs/core/http'

export default class WebhooksController {
  public async store({ request, response }: HttpContext) {
    const { event, data } = request.all();

    console.log(event, data);

    response.status(200).send('Webhook received');
  }
}