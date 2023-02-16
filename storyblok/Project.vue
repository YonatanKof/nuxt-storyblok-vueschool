<script setup>
defineProps({
	blok: Object,
});
</script>
<template>
	<div class="container project-page">
		<div class="project-title">
			<h1>{{ blok?.title || "Add your title" }}</h1>
			<NuxtLink :to="{ name: 'index' }">Go Back</NuxtLink>
		</div>
		<div class="project-description">
			<img
				:src="
					blok.image?.filename ||
					`https://a.storyblok.com/f/198303/1024x1024/1a434df4e4/yonatan_kof_two_mounting_and_sun_black_and_white_flat_design_si_c9597e13-43e9-42f7-9acb-9fb5e44c65dc.png/m/`
				"
				:alt="blok.image?.alt"
			/>
			<p>{{ blok?.description || "Add your description" }}</p>
		</div>
	</div>
</template>
