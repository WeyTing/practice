<script setup>
import { inject } from "vue";
import zhLocale from "../locales/zh.js";
import enLocale from "../locales/en.js";
const locales = inject("locale");
</script>

<template>
	<div class="welcome">
		<h1>{{ locales.welcome.title }}</h1>
		<h2>{{ locales.welcome.subtitle }}</h2>
		<p>{{ locales.welcome.description }}</p>
	</div>
</template>

<style scoped>
.welcome {
	padding: 2rem;
	text-align: center;
}
</style>
