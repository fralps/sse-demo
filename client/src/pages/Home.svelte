<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Transmit } from '@adonisjs/transmit-client';

  interface SSEPayload {
    message: string;
  }

  let subscription: any;
  let notificationText: string;

  const transmit = new Transmit({
    baseUrl: 'http://localhost:3333',
    maxReconnectAttempts: 5
  });

  subscription = transmit.subscription('notification');
  subscription.create();

  subscription.onMessage((payload: SSEPayload): void => {
    notificationText = payload.message;
  });

  onDestroy(() => {
    subscription.delete();
  });
</script>

<div class="text-center p-18">
  <h1 class="text-center text-3xl text-orange-400">SSE demo for notifications</h1>

  <div class="mt-8">
    {#if notificationText}
      <div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 w-fit mx-auto" role="alert">
        <svg
          class="h-6 w-6 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <div class="ml-2">
          {notificationText}
        </div>
      </div>
    {:else}
      <div class="text-gray-500 italic flex items-center w-fit mx-auto">
        <svg
          class="h-5 w-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        Pas de nouvelles notifications
      </div>
    {/if}
  </div>
</div>
