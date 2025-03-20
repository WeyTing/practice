//計算兩數和
function sum(a, b) {
	return a + b;
}
console.log(sum(1, 2));
console.log(sum(100, 23442));
// 攝氏轉換華氏溫度 F = C * 9/5 + 32。
function celsiusToFahrenheit(cel) {
	const result = cel * 1.8 + 32;
	return result;
}

console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(24));
console.log(celsiusToFahrenheit(22));
// 計算字串的長度並回傳
function stringLength(str) {
	return str.length;
}
console.log(stringLength("hello"));
console.log(stringLength("my name is wey"));
// 檢查數字是否是偶數
function isEven(n) {
	if (n === 0) {
		return "是偶數";
	}
	if (n % 2 === 0) {
		return "是偶數";
	} else {
		return "不是偶數";
	}
}
console.log(isEven(2));
console.log(isEven(0));
console.log(isEven(1230959123871283));
//列印每個數字的平方   let result = "" []   result += ``  推回陣列result.push() 回傳直 ``可以保留運算式
function printSq(n) {
	const resultpS = [];
	for (let i = 1; i <= n; i++) {
		resultpS.push(i ** 2);
	}
	return resultpS;
}
console.log(printSq(50));

for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// 取得某個數字的乘法表 \n=換行符
function multiplicationTable(n) {
	let result = "";
	for (let i = 1; i <= 9; i++) {
		result += `${n}*${i}=${n * i}\n`;
	}
	return result;
}
console.log(multiplicationTable(3));
console.log(multiplicationTable(12));

// 比較大小
function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

console.log(max(2, 3));
console.log(max(100, 57));
console.log(max(23, 57));

const arr = [];
arr.push(1, 2, 3);
arr = [123];
