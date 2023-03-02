<script setup>
defineProps({
	blok: Object,
});
</script>
<template>
	<div class="container" v-editable="blok">
		<h2>{{ blok?.title || "Featured projects" }}</h2>
		<div class="featured-projects">
			<div class="project" v-for="project in blok.featuredProjects" :key="project._uid">
				<nuxt-link :to="{ name: 'projects-slug', params: { slug: project.slug } }">
					<h3>{{ project.content.title || "Missing title" }}</h3>
					<img
						:src="
							project.content.image?.filename ||
							`https://a.storyblok.com/f/198303/1024x1024/1a434df4e4/yonatan_kof_two_mounting_and_sun_black_and_white_flat_design_si_c9597e13-43e9-42f7-9acb-9fb5e44c65dc.png/m/`
						"
						:alt="project.content.image?.alt || `No alt text yet`"
					/>
				</nuxt-link>
			</div>
		</div>
	</div>
	<!-- <pre>{{ blok }}</pre> -->
</template>
