import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import vercel from '@sveltejs/adapter-vercel';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default {
  kit: {
   
    adapter: adapter()
  }
};

