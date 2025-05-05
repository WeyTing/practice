<script setup>
const props = defineProps({
	isFavorite: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(["toggle-favorite"]);
</script>

<template>
	<span @click="emit('toggle-favorite')">{{
		props.isFavorite ? "❤️" : "🤍"
	}}</span>
</template>

<style scoped>
span {
	cursor: pointer;
}
</style>
