const test = () => ({
	show: true,
	message: "。。。",
	newfood: "",
	foods: ["steak", "noodles", "beef", "ramen"],
	hideArtilce: function () {
		this.show = !this.show;
	},
	clear: function () {
		this.message = "";
	},
	addfoods: function () {
		this.foods.unshift(this.newfood);
		this.newfood = "";
	},
});
//push 從後面堆 unshift從前面
export default test;
