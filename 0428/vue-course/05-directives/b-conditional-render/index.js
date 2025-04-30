Vue.createApp({
	data() {
		return {
			isBoxOpen: false,
			isBoxVisible: true,
			magicPower: 30,
		};
	},
	methods: {
		toggleBox() {
			this.isBoxOpen = !this.isBoxOpen;
			this.isBoxVisible = !this.isBoxVisible;
		},
	},
}).mount("#conditional");
