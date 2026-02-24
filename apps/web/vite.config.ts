import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'MystiQ',
				short_name: 'MystiQ',
				description: 'AI-powered mystery puzzle assistant',
				theme_color: '#0a0a0f',
				background_color: '#0a0a0f',
				display: 'standalone',
				start_url: '/',
				icons: [
					{
						src: 'icon-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'icon-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	]
});
