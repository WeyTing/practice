<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
// ⭕️ 正確用法
const { count, doubleCount } = storeToRefs(store); //ref 必須透過這種方式解構
//const { increment } = store; //store.increment 方法
</script>

<template>
	<div>
		<p>Count: {{ count }}</p>
		<p>Double: {{ doubleCount }}</p>
		<button @click="increment">+1</button>
	</div>
</template>
