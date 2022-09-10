import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'@lib': path.resolve('./src/lib'),
		},
	},

	env: {
		dir: process.cwd(),
		publicPrefix: 'PUBLIC_'
	}
};

export default config;
