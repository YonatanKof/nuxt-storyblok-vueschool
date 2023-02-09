<script setup>
const story = await useStoryblok("home", { version: "draft" });
</script>
<template>
	<div>
		<h1>Hi there</h1>
		<h2>{{ story.content.body[0].title }}</h2>
		<pre>{{ story }}</pre>
	</div>
</template>
