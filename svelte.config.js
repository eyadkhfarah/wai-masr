import adapter from '@sveltejs/adapter-vercel';
import { partytownVite } from '@builder.io/partytown/utils';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { join } from 'path'
import { sveltekit } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	plugins: [
		sveltekit(),
		partytownVite({
			dest: join(process.cwd(), '.svelte-kit/output/client/~partytown')
		})
	],

	preprocess: vitePreprocess()
};

export default config;
