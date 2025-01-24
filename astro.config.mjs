import { defineConfig } from "astro/config";
import dom from "@wmdigi/dom/astro";
import swup from '@swup/astro';
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

//import partytown from "@astrojs/partytown";

const site = process.env.PUBLIC_SITE;

export default defineConfig({
	site,
	base: "/",
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [
		swup({
			theme: `fade`,
			progress: true,
			globalInstance: true,
			loadOnIdle: false
		}),
		dom(),
		sitemap(),
	],
	output: "static",
	adapter: vercel(),
	experimental: {
		// import SVG files as components
		svg: true,
	},
});
