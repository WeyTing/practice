//for (let i = 1; i <= 9; i = i + 1) {
//  for (let j = 1; j <= 9; j = j + 1) {
//    console.log(i * j);
//  }
//}

//  兩層迴圈 =  外層迴圈每跑一次 內層迴圈就從頭跑一次 ex
//  for (let a = 1; a <= 3; a++){
//  for(let b = 1; b <= 3; b++){
//    console.log(a, b);
//
//  }
//}    1,3 2,3 3,3 2,1 2,2 2,3 3,1 3,2 3,3

// gpt教學 row
// 一層一層進行

//for (let i = 1; i <= 9; i = i + 1) {
//	let row = ""; //重設為空字串
//	for (let j = 1; j <= 9; j = j + 1) {
//		row += i + "*" + j + "=" + i * j + "\t";
//	}
//	console.log(row);
//}

//
//for (let i = 1; i <= 9; i = i + 1) {
//	for (let j = 1; j <= 9; j = j + 1) {
//		console.log(`${i} x ${j} = ${i * j}`);
//	}
//}

//OOO.repeat(a) repeat
//"" = 手動定義字串 `` = 也是定義字串但可以插入算式 替我翻譯參數 // ${} 用來插入語法中 也可塞算式
//for (let a = 1; a < 5; a++) {
//	const space = " ".repeat(4 - a);
//	const stars = "*".repeat(a * 2 - 1);
//	console.log(`${space}${stars}`);
//}
//for (let a = 1; a < 5; a++) {
//	console.log("*".repeat(a));
//}
////           參數
//function hi(name) {
//	console.log(`hello ${name}`);
//}
////  引數
//hi("cc");
//hi("dd");
//
////          引數
//console.log(1234);

//function hello(a, b, c) {
//	const d = a + b + c;
//	console.log(`${d}`);
//	console.log(b);
//	console.log(c);
//}
//hello(1, 2, 3);
// function 宣告跟指定會一起做
// f(x) = 3 x = 2 函數
//                   預設值

//function maketree(n = 3) {
//	for (let a = 1; a <= n; a++) {
//		const space = " ".repeat(n - a);
//		const stars = "*".repeat(a * 2 - 1);
//		console.log(`${space}${stars}`);
//	}
//}
//        匿名函數
//const bb = function () {};
///* 箭頭函數 */
//const cc = () => {};

// return 結果 log 印東西

//function add() {
//	return 123456;
//}
//const nn = add();
//
//console.log(nn);

function add(a, b) {
	return a + b;
}

console.log(add(1, 2));
console.log(add(3, 2));

//四捨五入 math.round *100 /100
function calcBMI(height, weight) {
	const h = height / 100;
	const bmi = weight / (h * h); // h **2
	return bmi;
}

console.log(calcBMI(160, 50));
