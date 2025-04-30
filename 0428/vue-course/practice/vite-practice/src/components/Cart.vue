<!--購物車範例-->
<!--畫面先做出來再寫功能-->
<template>
	<div>
		<h3>購物車</h3>
		<div>
			<p>{{ items.name }}</p>
			<p>介紹:{{ items.description }}</p>
			<p>價格:{{ items.price }}</p>
			<p>數量:{{ items.quantity }}</p>
			<p>總價: ${{ total }}</p>
			<button @click="add">+1</button>
			<input type="text" v-model="items.quantity" min="0" disabled />
			<button @click="minus">-1</button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
const items = ref({
	name: "筆記型電腦",
	description: "小巧但強大的筆記型電腦",
	price: 3000,
	quantity: 1,
});
const add = () => {
	items.value.quantity++;
};
const minus = () => {
	if (items.value.quantity > 1) {
		items.value.quantity--;
	} else {
		alert("至少要購買一件");
	}
};
const total = computed(() => {
	return items.value.price * items.value.quantity;
});
</script>

<style scoped>
div {
	background-color: bisque;
	border-radius: 10px;
}
</style>
