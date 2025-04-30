Vue.createApp({
	data() {
		return {
			magicPoints: 0,
			isCasting: false,
			currentSpell: "",
		};
	},
	methods: {
		castSpell() {
			this.magicPoints += 1;
			this.showSpellEffect("✨ 魔法閃耀！");
		},
		superSpell() {
			this.magicPoints += 5;
			this.showSpellEffect("🌟 超級魔法發動！");
		},
		showSpellEffect(spell) {
			this.currentSpell = spell;
			this.isCasting = true;
			setTimeout(() => {
				this.isCasting = false;
			}, 1000);
		},
	},
}).mount("#events");
