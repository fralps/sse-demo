<script lang="ts">
  import { paths, push, routes } from '@router/routes';
  import Router from 'svelte-spa-router';

  // Routes interceptor function that redirects to homepage
  const routesConditionsFailed = (): void => {
    push(paths.home.path);
  };
</script>

<main class="min-h-screen">
  <Router {routes} on:conditionsFailed={routesConditionsFailed} />
</main>
