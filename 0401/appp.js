import { hey, a, hello } from "./ccc.js";
import myname from "./ccc.js";
import dayjs from "dayjs";
//import {變數 as 新名字} from "axios" {可以改名遇到同名的變數時}
import axios from "axios"; //import類似const再宣告一次
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start;

const url = "https://api.5xcamp.us/api/v1/tenlong";
const { data: books } = await axios.get(url);

const title = books
	.map((book) => book.title)
	.forEach((book) => console.log(book));

console.log(title);
