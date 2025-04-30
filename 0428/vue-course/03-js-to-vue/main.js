const { createApp } = Vue;

createApp({
	data() {
		return {
			count: 0,
		};
	},
	methods: {
		add() {
			this.count += 2;
		},
		sub() {
			this.count -= 3;
		},
		reset() {
			this.count = 0;
		},
	},
}).mount(".container ");
