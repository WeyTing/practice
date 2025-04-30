Vue.createApp({
	data() {
		return {
			pets: [
				{ emoji: "🐱", name: "波斯貓", price: 300 },
				{ emoji: "🐕", name: "哈士奇", price: 400 },
				{ emoji: "🐰", name: "垂耳兔", price: 200 },
				{ emoji: "🐹", name: "倉鼠", price: 100 },
				{ emoji: "fish", name: "鯊魚", price: 1000 },
			],
			message: "寵物雜貨",
		};
	},
	methods: {
		adoptPet(index) {
			alert(`恭喜您領養了 ${this.pets[index].emoji}${this.pets[index].name}！`);
		},
	},
}).mount("#list");
