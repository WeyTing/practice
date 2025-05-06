<script setup>
import { inject } from "vue";

const locales = inject("locale");
</script>

<template>
	<nav>
		<a href="#">{{ locales.nav.home }}</a>
		<a href="#">{{ locales.nav.about }}</a>
		<a href="#">{{ locales.nav.contact }}</a>
	</nav>
</template>

<style scoped>
nav {
	padding: 1rem;
}
nav a {
	margin: 0 0.5rem;
}
</style>
