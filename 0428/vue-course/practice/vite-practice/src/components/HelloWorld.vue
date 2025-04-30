<script setup>
import { ref } from "vue";

//	defineProps({
//		title: {
//			type: String,
//			default: "預設標題",
//		},
//		author: {
//			type: String,
//			default: "預設作者",
//		},
//	});

defineProps(["msg", "hi", "props-Number"]);

const count = ref(0);
</script>
<!--數字props的方式const props名字 = const的名字-->

<template>
	<h1>{{ msg }}</h1>
	<h2>{{ hi }}</h2>
	<span>{{ propsNumber }}</span>

	<!--<div class="card">
	<button type="button" @click="count++">count is {{ count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test HMR
	</p>
</div> -->

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
			>create-vue</a
		>, the official Vue + Vite starter
	</p>
	<p>
		Learn more about IDE Support for Vue in the
		<a
			href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
			target="_blank"
			>Vue Docs Scaling up Guide</a
		>.
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
