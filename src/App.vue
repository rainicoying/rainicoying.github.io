<script setup>
import LuckyDraw from './components/LuckyDraw.vue'
</script>

<template>
	<v-container class="contentContainer">
		<LuckyDraw></LuckyDraw>
	</v-container>
</template>

<style scoped>
.contentContainer {
	width: 900px;
	height: 100%;
}

@media screen and (max-width: 960px) {
	.contentContainer {
		max-width: 800px;
	}
}

@media screen and (max-width: 600px) {
	.contentContainer {
		max-width: 560px;
	}
}
</style>
