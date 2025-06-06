/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import transmit from '@adonisjs/transmit/services/main'

const WebhooksController = () => import('#controllers/webhooks_controller')
const NotificationsController = () => import('#controllers/notifications_controller')

transmit.registerRoutes()

router
  .group(() => {
    router.post('webhooks', [WebhooksController, 'store'])
    router.get('notifications', [NotificationsController, 'index'])
  })
