<script setup>
// 定義要發送的事件
const emit = defineEmits(["number-from-child", "text-from-child"]);

// 點擊按鈕時觸發事件

// 點擊按鈕時觸發事件
const handleClick = () => {
	console.log("點擊按鈕");
	emit("number-from-child", 1); // 發送事件，並傳遞數值 1
};
</script>

<template>
	<button @click="handleClick">
		<slot></slot>
	</button>
</template>
