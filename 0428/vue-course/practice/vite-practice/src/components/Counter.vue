<script setup>
import { ref } from "vue";
const count = ref(0);

const add = () => {
	count.value++;
	console.log(count);
};
const sub = () => {
	count.value--;
};
const reset = () => {
	count.value = 0;
};
</script>

<template>
	<div>
		<h2>計數器</h2>
		<button @click="sub">-1</button>
		<button @click="add">+1</button>
		<span>目前計數: {{ count }}</span>
		<button @click="reset">reset</button>
	</div>
</template>

<!---->
<style scoped>
div {
	background-color: bisque;
	border-radius: 10px;
}
button {
	font-size: 20px;
	margin: 10px;
	padding: 10px;
	width: 100px;
}
</style>
