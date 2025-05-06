<script setup>
import { inject } from "vue";
const currentLang = inject("currentLang");
const locales = inject("locale");
const toggleLanguage = inject("toggleLanguage");
</script>

<template>
	<div class="language-switch">
		<button @click="toggleLanguage">
			語言切換 {{ locales.language[currentLang.value === "zh" ? "en" : "zh"] }}
		</button>
	</div>
</template>
