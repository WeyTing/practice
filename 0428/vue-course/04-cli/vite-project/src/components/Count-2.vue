<!--我想用composition的方法做一個計數器-->
<template>
	<h2>Count: {{ count }}</h2>
	<button @click="increment">+1</button>
	<button @click="decrement">-1</button>
</template>

<script setup>
import { ref } from "vue"; //引入ref

const count = ref(0); //使用ref

function increment() {
	count.value++;
}
function decrement() {
	count.value--;
}
</script>
