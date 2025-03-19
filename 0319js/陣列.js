// 陣列 Array
//const arr = ["a", "b", "c", "d", "e", "f"];

//  length 找字串的長度
//for (let i = 0; i < arr.length; i = i + 2) {
//	console.log(arr[i]);
//}
// break = 直接結束   contuinue看成next, skip  下一輪

// forEach 直接列印 Iteration
//arr.forEach(function (nn) {
//	console.log(nn);
//});
//arr.forEach((nn) => {
//	console.log(nn);
//});

//for (let i = 0; i < arr.length; i++) {
//	console.log(Array[i] * 2);
//}
//// push
const Arr = [1, 2, 3, 4, 5];
const newArr1 = [];
for (let i = 0; i < Arr.length; i++) {
	newArr1.push(Arr[i] * 2);
}
console.log(newArr1);

//foreach 方法可以對每個元素執行某些操作
//Array.forEach((el) => {
//	newar.push(el * 2);
//});

// map
//const newArr2 = Arr.map((el) => {
//	return el * 2 - 1;
//});
//
//console.log(newArr2);

////splice(起始,刪除,補東西)
//
//Arr.splice(1, 3, "a", "b", "c");
//
//console.log(Arr);

//filter 判斷是否為0

const newArr3 = Arr.filter((el) => {
	return el <= 3;
});
console.log(newArr3);

const result = Arr.every((elee) => {
	return elee > 2;
});
console.log(result);

//reduce 沒有初始值拿第一當作
const result2 = Arr.reduce((acc, el1) => {
	return acc + el1;
}, 100);
console.log(result2);

//練習 初版
const PrArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newPrArr = PrArr.map((el) => el * 2);
const newPrArr2 = newPrArr.filter((el) => el < 10);

const newPrArr3 = newPrArr2.reduce((sum, el) => sum + el, 100);
console.log(newPrArr3);

//第二版
const sumofarr = PrArr.map((el) => el * 2)
	.filter((el) => el < 10)
	.reduce((acc, el) => acc + el, 100);

console.log(sumofarr);
//第三版

const double = (el) => el * 2;
const lessthan10 = (el) => el < 10;
const sum = (acc, el) => acc + el;

const sumArr = PrArr.map(double).filter(lessthan10).reduce(sum, 100);
console.log(sumArr);

// splice(起始,刪除,補東西) filter 判斷 map 給幾個就拿幾個 push把元素丟回陣列 every全部做判斷 some部分做判斷

// reduce(累加直,目前元素)
