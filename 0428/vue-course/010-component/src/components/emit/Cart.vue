<script setup>
import { ref, watch } from "vue";
import QuantityAdjuster from "./QuantityAdjuster.vue";
import productImage from "../../assets/ps5pro.jpg";
import Favorite from "./Favorite.vue";

const currentQuantity = ref(3);
const price = ref(29999);
const isFavorite = ref(false);
// 8. 實作處理數量更新的函式
const handleQuantityUpdate = (quantity) => {
	currentQuantity.value = quantity;
	// 自行寫的	if (quantity === 0) {
	//		alert("至少購買一件");
	//		currentQuantity.value = 1;
	//	}
	//	if (quantity > 10) {
	//		alert("最多購買十件");
	//		currentQuantity.value = 10;
	//	}
	watch(currentQuantity, () => {
		if (currentQuantity.value === 0) {
			alert("至少購買一件");
			currentQuantity.value = 1;
		}
		if (currentQuantity.value > 10) {
			alert("最多購買十件");
			currentQuantity.value = 10;
		}
	});
};
const isfavorite = () => {
	isFavorite.value = !isFavorite.value;
	console.log(isFavorite.value);
	console.log(isFavorite);
};
</script>

<template>
	<div class="container">
		<h2>購物車商品</h2>
		<div class="product">
			<div class="product-image">
				<img :src="productImage" alt="商品圖片" />
			</div>
			<div class="product-info">
				<h3>測試商品</h3>
				<p>單價：{{ price }}</p>
				<!-- 9. 加入 QuantityAdjuster 元件 -->
				<QuantityAdjuster
					:initial-qty="currentQuantity"
					@update-quantity="handleQuantityUpdate"
				/>
				<!-- 10. 顯示總金額 -->
				<p>總金額:$ {{ currentQuantity * price }}</p>
				<Favorite :is-favorite="isFavorite" @toggle-favorite="isfavorite" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	max-width: 50rem;
	margin: 0 auto;
	padding: 20px;
}

.product {
	display: flex;
	gap: 16px;
	padding: 16px;
	border: 1px solid #ccc;
	border-radius: 8px;
}

.product-image {
	width: 30rem;
}

.product-image img {
	width: 100%;
	object-fit: cover;
}

.product-info {
	flex: 1;
}

h3 {
	margin: 0 0 8px 0;
}

p {
	margin: 8px 0;
}
</style>
