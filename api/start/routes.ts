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

// Importing the health check routes
const HealthChecksController = () => import('#controllers/health_checks_controller')

// Lazy loading controllers
const SessionsController = () => import('#controllers/api/v1/users/sessions_controller')
const RegistrationsController = () => import('#controllers/api/v1/users/registrations_controller')
const WebhooksController = () => import('#controllers/api/v1/webhooks_controller')

router
  .group(() => {
    router.post('webhooks', [WebhooksController, 'store'])

    // Users
    router
      .group(() => {
        router.group(() => {
          router.post('login', [SessionsController, 'store']).use(middleware.guest())
          router.post('registrations', [RegistrationsController, 'store']).use(middleware.guest())
        })

        router
          .group(() => {
            router.delete('logout', [SessionsController, 'destroy'])
            router.delete('registrations', [RegistrationsController, 'destroy'])
          })
          .use(middleware.auth())
      })
      .prefix('users')
  })
  .prefix('api/v1')
router.get('/health', [HealthChecksController])
