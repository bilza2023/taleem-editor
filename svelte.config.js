import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: dev ? '' : '/taleem-editor'
    },

    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: 'index.html'
    })
  }
};

export default config;
