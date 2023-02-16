<!-- Define the prop as an object -->
<script setup>
defineProps({
	blok: Object,
});
</script>
<template>
    <!-- StoryblokComponent is from Storyblok Nuxt module -->
    <!-- we loop through the bloks and give it a key-->
    <!-- this is to see the different bloks in this page-->
	<div v-editable="blok">
        <StoryblokComponent  
            v-for="blok in blok.body" 
            :key="blok._uid" 
            :blok="blok"
        ></StoryblokComponent>
    </div>
</template>
