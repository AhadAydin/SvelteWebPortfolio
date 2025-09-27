import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      // opsiyonel: fallback sayfası (SPA tarzı sayfalar için)
      fallback: 'index.html'
    }),
    // Eğer projen root dışında deploy edilecekse:
    // paths: { base: '/your-base-path' }
  }
};
