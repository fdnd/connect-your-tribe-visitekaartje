import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		kit: {
			adapter: adapter({
				fallback: '404.html'
			}),
			paths: {
				base: 'https://fdnd.github.io/connect-your-tribe-visitekaartje/'
			}
		}
};