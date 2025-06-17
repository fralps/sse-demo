import { wrap } from 'svelte-spa-router/wrap';
import { paths } from '@router/paths';

const pages = {
  [paths.home.path]: wrap({
    asyncComponent: (): Promise<any> => import('@pages/Home.svelte')
  })
};

export default pages;
