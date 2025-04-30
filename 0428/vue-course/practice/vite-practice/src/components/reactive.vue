reactive的方式做一個計數器
<script setup>
import { reactive } from "vue";

const count = reactive({
	Number: 0,
	add: () => {
		count.Number++;
		console.log(count);
	},
	sub: () => {
		count.Number--;
	},
	reset: () => {
		count.Number = 0;
	},
});
</script>

<template>
	<div>
		<h2>計數器</h2>
		<button @click="count.sub">-1</button>
		<button @click="count.add">+1</button>
		<span>目前計數: {{ count.Number }}</span>
		<button @click="count.reset">reset</button>
	</div>
</template>
