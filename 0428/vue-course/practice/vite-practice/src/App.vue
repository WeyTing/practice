<script setup>
import { reactive, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Count from "./components/counter.vue";
import Reactive from "./components/reactive.vue";
import Cart from "./components/Cart.vue";
import Cart2 from "./components/Cart-2.vue";
const number = ref(12222);
</script>

<template>
	<HelloWorld msg="Vite" hi="你們好" />
	<HelloWorld msg="Vue" hi="這是vue" />
	<HelloWorld msg="NodeJs" hi="這是node" />
	<HelloWorld msg="Express" hi="這是express" />
	<Count />
	<Reactive />
	<Cart />
	<Cart2 />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
