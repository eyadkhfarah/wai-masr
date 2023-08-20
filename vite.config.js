import { sveltekit } from '@sveltejs/kit/vite';

import { defineConfig } from 'vitest/config';
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from 'path'

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: join(process.cwd(), '.svelte-kit/output/client/~partytown')
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
