<script setup>
const story = await useStoryblok(
	"home",
	{
		version: useRoute().query._storyblok ? "draft" : "published",
		resolve_relations: "featuredProjects.featuredProjects",
	},
	{ resolveRelations: "featuredProjects.featuredProjects" }
);
</script>
<template>
	<!-- We use v-if since we have to await the result from the API -->
	<StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>
