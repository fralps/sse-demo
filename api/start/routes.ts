/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import transmit from '@adonisjs/transmit/services/main'

const WebhooksController = () => import('#controllers/api/v1/webhooks_controller')

transmit.registerRoutes()

router
  .group(() => {
    router.post('webhooks', [WebhooksController, 'store'])
  })
  .prefix('api/v1')
