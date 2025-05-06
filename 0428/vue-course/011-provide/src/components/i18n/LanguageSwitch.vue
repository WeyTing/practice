<script setup>
import { inject } from "vue";
const currentLang = inject("currentLang");

const toggleLanguage = inject("toggleLanguage");
</script>

<template>
	<div class="language-switch">
		<button @click="toggleLanguage">語言切換{{ currentLang }}</button>
	</div>
</template>
