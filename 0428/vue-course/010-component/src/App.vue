<script setup>
import BlogList from "./components/PropsExample/BlogList.vue";
import CardContainer from "./components/SlotExample/CardContainer.vue";
import UseItemList from "./components/ScopedSlotExample/UseItemList.vue";
import UseLayout from "./components/ScopedSlotExample/UseLayout.vue";
import Message from "./components/practice_props/Message.vue";
import CollapsePanel from "./components/practice_slot/CollapsePanel.vue";
import Counter from "./components/emit/Counter.vue";
import FormParent from "./components/emit/FormParent.vue";
import Cart from "./components/emit/Cart.vue";
const firstMessage = {
	type: "successs",
	title: "成功",
	content: "資料已成功儲存了",
}; //老師提供v-bind
</script>

<template>
	<main>
		<Message v-bind="firstMessage" />
		<Message type="warninggg" title="注意" content="請確認輸入資料是否正確" />
		<Message type="error" title="錯誤" content="無法連接到伺服器" />
		<CardContainer />
		<CollapsePanel>
			<template #title>
				<h2>第一個面板</h2>
			</template>

			<p>我想放置的訊息</p>
			<ul>
				<li>項目一</li>
				<li>項目二</li>
				<li>項目三</li>
			</ul>
		</CollapsePanel>
		<CollapsePanel>
			<div class="custom-content">
				<p></p>
				<span>1</span>
				<button>典籍按鈕</button>
			</div>
			<template #title>
				<div class="custom-title">
					<h2>第二個面板</h2>
					<span>☆★</span>
				</div>
			</template>
		</CollapsePanel>
		<Counter />
		<!--<BlogList /> -->
		<!-- <CardContainer /> -->
		<!--<UseItemList />-->
		<!--<UseLayout />-->
		<!-- <Counter /> -->
		<FormParent />
		<Cart />
	</main>
</template>

<style scoped>
header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

.custom-title {
	display: flex;
	justify-content: space-between;
}

.custom-content {
	display: flex;
	justify-content: space-between;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
