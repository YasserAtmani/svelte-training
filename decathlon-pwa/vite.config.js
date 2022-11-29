import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert'

/** @type {import('vite').UserConfig} */
const config = {
	server: {       
        https: true,
        proxy: {},
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..']
          }
    },

	plugins: [sveltekit(), mkcert()]
};

export default config;
