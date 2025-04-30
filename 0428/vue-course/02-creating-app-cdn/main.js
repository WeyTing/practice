const { createApp } = Vue;

Vue.createApp({
	data() {
		return {
			message: "Hello vueframework!",
			name: "John Doe",
			fullName: "John Doe",
			age: 30,
			number: 1,
		};
	},
}).mount("#app");

createApp({
	data() {
		return {
			message: "第一次使用",
			firstName: "林",
			lastName: "威廷",
			age: 10000,
		};
	},
}).mount("#test");
