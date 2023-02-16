<script setup>
const story = await useStoryblok("home", { version: "draft" });
</script>
<template>
	<!-- We use v-if since we have to await the result from the API -->
	<StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>
