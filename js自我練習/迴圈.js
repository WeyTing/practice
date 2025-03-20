// foreach
let arr = [1, 2, 3, 4];

arr.forEach((el) => console.log(el));

// 總和 sum為累進值
let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum += i;
}
console.log(sum);

// 列印每個結果
for (let i = 1; i <= 10; i++) {
	console.log(i);
}
//找偶數
for (let i = 1; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}
// 找奇數
for (let i = 1; i <= 100; i++) {
	if (i % 2 === 1) {
		console.log(i);
	}
}

//倒數 ===嚴格 ==不嚴格
for (let i = 10; i >= 1; i--) {
	console.log(i);
	if (i === 1) {
		console.log("倒數結束!");
	}
}
// 透過函數 return 結束函數執行並回傳一個值 計算階乘
function sum2(n) {
	if (n === 0) {
		return 1;
	} //gpt修改後 提醒要+上0
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result; //必須return
}
console.log(sum2(0));

console.log(sum2(5)); ///提供給函數外部使用
console.log(sum2(10));

// 在九九乘法表一次
for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		console.log(`${i}*${j}=${i * j}`);
	}
}

// 檢查質數 字串要記得""字串要記得""字串要記得""字串要記得""字串要記得""字串要記得""
function check(n) {
	if (n < 2) {
		return "不是質數"; ///gpt修改後要檢查1與2 原先沒注意到
	}
	if (n === 2) {
		return "是質數";
	} /// 到這裡
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return "不是質數";
		}
	}
	return "是質數";
}
console.log(check(5));
console.log(check(9));
console.log(check(11));
console.log(check(4));
console.log(check(100));
console.log(check(2));
console.log(check(1));

//
