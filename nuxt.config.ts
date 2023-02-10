// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: { shim: false },
	css: ["@/assets/styles/style.scss"],
	modules: [
		[
			"@storyblok/nuxt",
			{
				accessToken: "ijc1kWxihfUKFEjmFmDeZAtt",
			},
		],
	],
});
