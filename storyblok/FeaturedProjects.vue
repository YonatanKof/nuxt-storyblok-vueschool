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
					<h3>{{ project.content.title }}</h3>
					<img :src="project.content.image?.filename" :alt="project.content.image?.alt || `No alt text yet`" />
				</nuxt-link>
			</div>
		</div>
	</div>
	<!-- <pre>{{ blok }}</pre> -->
</template>
