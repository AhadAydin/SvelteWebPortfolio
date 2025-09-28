import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';
const repoName = 'SvelteWebPortfolio'; // GitHub repo adın

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html'  // SPA tarzı yönlendirme için
    }),
    paths: {
      base: dev ? '' : `/${repoName}`  // GitHub Pages için base path
    },
    prerender: {
      entries: ['*']  // tüm sayfaları statik olarak oluştur
    }
  }
};
