<!--我想做一個計數器元件-->
<script>
export default {
	data() {
		return {
			count: 444,
		};
	},
	methods: {
		Add() {
			this.count++;
		},
		Sub() {
			this.count--;
		},
	},
	props: ["msg"],
};
</script>

<template>
	<h2>{{ msg }}</h2>
	<span class="count">目前計數: {{ count }}</span>
	<button @click="Add">+1</button>
	<button @click="Sub">-1</button>
</template>

<style>
.count {
	color: red;
	font-size: 30px;
}
button {
	font-size: 20px;
	margin: 10px;
	padding: 10px;
	width: 100px;
}
</style>
