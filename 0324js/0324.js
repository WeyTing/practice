//            aa.                   aa[''] 物件
const aa = { cc: 1234, bb: 3456, "a a": 22222 };
console.log(aa.cc);
console.log(aa["cc"]);
console.log(aa.bb);
console.log(aa[`a a`]);
// function vs method

// #id .class
const a = document.querySelector("#hello");
console.log(a);
const b = document.querySelectorAll("#hello");
console.log(b);
const c = document.querySelectorAll(".hello");
console.log(c);

// 選取器 querySelector
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
	const result = document.querySelector("#abc");
	if (result.textContent == "Hello") {
		result.textContent = "World";
	} else {
		result.textContent = "Hello";
	}
});
//focus聚焦到某個物件;
//const input1 = document.querySelector("#input1");
//const input2 = document.querySelector("#input2");
//const input3 = document.querySelector("#input3");
//const input4 = document.querySelector("#input4");
//
//input1.addEventListener("input", () => {
//	if (input1.value.length >= 4) {
//		input2.focus();
//	}
//});
//input2.addEventListener("input", () => {
//	if (input2.value.length >= 4) {
//		input3.focus();
//	}
//});
//input3.addEventListener("input", () => {
//	if (input3.value.length >= 4) {
//		input4.focus();
//	}
//});
//input4.addEventListener("input", () => {
//	if (input4.value.length >= 4) {
//		input1.focus();
//	}
//});

for (let i = 1; i <= 4; i++) {
	const input = document.querySelector(`#input${i}`);
	input.addEventListener("input", () => {
		if (input.value.length == 4) {
			const next = `#${input.dataset.next}`;
			const goto = document.querySelector(next);
			goto.focus();
		}
	});
}

// foreach複習 foreach沒有返回值
//const aaa = [1, 23, 4, 5, 6];
//
//let result = aaa.forEach((el) => console.log(el));
//console.log(result);
//
//aaa.forEach((el) => console.log(el));

//API
const url = "https://jsonplaceholder.typicode.com/posts";
const result = fetch(url);
console.log(result);
