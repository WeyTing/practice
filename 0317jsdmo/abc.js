// 變數 Variable
// 宣告變數

console.log("213");

console.log("456");

console.log(a);
var a = 1;
console.log(a);

// var a = 1; // 宣告
// a = 2; // 指定、給值、修改
// let a = 1;  修正var的錯誤 var =重複宣告、變數提升=undefined
// 建立期 要名字 初始化
// 執行期 指定 給值 執行函數
// let 不會初始化 var 初始化
// const = 常數   不能被修改的變數-->不能重新給值 re-assign
// a = 1 <--很可能變成全域變數bad 先宣告 var/let/const 後操作
// js 普遍命名駝峰式 const myStudentScore = 100  other my_student_score = 100 蛇式

// 流程控制
// if.. else ..
// 程式裡 &&=and ||=or

const year = 2100;
if (year % 4 == 0) {
	if (year % 100 == 0) {
		if (year % 400 == 0) {
			console.log("閏年");
		} else {
			console.log("平年");
		}
	} else {
		console.log("閏年");
	}
} else {
	console.log("平年");
}
//// 閏年
// 1. 不是 4 的倍數 = 平年。
// 2. 是 4 的倍數但不是 100 的倍數 = 閏年。
// 3. 是 100 的倍數但不是 400 的倍數 = 平年。
// 4. 是 400 的倍數 = 閏年。

// if (x % 3 == 0) // 三的倍數

// 短路運算
// (a>10) && console.log("ok")

// 迴圈 for /while
// a = a + 1 等於 a += 1 等於 a++ 表遞增

//        起始     條件   每回合
// for (let a = 1; a < 9; a++) {
//console.log(a);
//}

// continue = skip = 下一輪

for (let c = 1; c < 5; c++) {
	if (c == 3) {
		continue;
	}
	console.log(c);
}

//   找出100內所有的偶數
//for (let i = 1; i < 100; i = i + 1) {
//	if (i % 2 == 0) {
//		console.log(i);
//	}
//}

// while 起始在while外 條件在()裡 每回合在body裡
// for 告訴你一個範圍 while 持續到結束
let d = 1;
while (d < 6) {
	console.log(d);
	d = d + 1;
	if (d >= 3) {
		break;
	}
}
