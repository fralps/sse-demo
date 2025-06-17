import { defineConfig } from '@adonisjs/transmit'

export default defineConfig({
  pingInterval: 5000, // keep the connection alive
  transport: null // use Redis to sync the events across multiple instances
})