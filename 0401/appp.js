import { hey, a, hello } from "./ccc.js";
import myname from "./ccc.js";
import dayjs from "dayjs";
//import {變數 as 新名字} from "axios" {可以改名遇到同名的變數時}
import axios from "axios"; //import類似const再宣告一次
import Alpine from "alpinejs";
import test from "./test.js";
window.Alpine = Alpine;
//    .data(名字,物件)
Alpine.data("test", test);
Alpine.start();

//const url = "https://api.5xcamp.us/api/v1/tenlong";
//const { data: books } = await axios.get(url);
//
//const title = books
//	.map((book) => book.title)
//	.forEach((book) => console.log(book));
//
//console.log(title);

// classlist 找有什麼class屬性
//const btn = document.querySelector("#btn");
//const article = document.querySelector("#article");
//let showArticle = true;
//btn.addEventListener("click", () => {
//	showArticle = !showArticle;
//	if (showArticle) {
//		article.classList.remove("hidden");
//	} else {
//		article.classList.add("hidden");
//	}
//});
//取名要記得
//const input = document.querySelector("#input");
//const fresh = document.querySelector("#fresh");
//input.addEventListener("input", () => {
//	fresh.textContent = input.value;
//});
