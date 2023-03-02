<script setup>
const route = useRoute();
const story = await useStoryblok(`projects/${route.params.slug}`, {
	version: useRoute().query._storyblok ? "draft" : "published",
});
</script>

<template>
	<!-- We use v-if since we have to await the result from the API -->
	<StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>
