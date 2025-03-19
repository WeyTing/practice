const arr1 = [10, 20, 30, 40, 50];
arr1.splice(1, 1, "25", "35");
console.log(arr1);
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newarr2 = arr2.filter((el) => el % 2 == 0);
console.log(newarr2);
const word = ["apple", "banana", "cherry"];

const result3 = word.map((el) => el.length);
console.log(result3);
const result4 = word.map((el) => (el = 100 + 100));
console.log(result4);

const arr4 = [];
arr4.push(1, 2, 3);
console.log(arr4);
const arr5 = [2, 4, 6, 8, 10];
const result5 = arr5.every((el) => el % 2 == 0);
console.log(result5);
const arr6 = [1, 3, 5, 7, 9];
const result6 = arr6.some((el) => el > 5);
console.log(result6);
const arr7 = [1, 2, 3, 4, 5];
const result7 = arr7.reduce((acc, el) => acc + el, 100);
console.log(result7);

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5));

function isEven(i) {
  if (i % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(7));

function circleArea(r) {
  const π = 3.14;
  return π * r ** 2;
}
console.log(circleArea(6));

//"字串"//"字串"//"字串"//"字串"//"字串"//"字串"//"字串"//"字串"//"字串"//"字串"//"字串"//"字串"//"字串"
function repeatstring(aaa, n) {
  return aaa.repeat(n);
}
console.log(repeatstring("hello", 5));
console.log(repeatstring("1234", 2));

function sumupto(a) {
  return (a * (a + 1)) / 2;
}
console.log(sumupto(5));

function factorial(n) {
  let summ = 1;
  for (let i = 1; i <= n; i++) {
    summ *= i;
  }
  return summ;
}

console.log(factorial(5));

let bbb = 0;
for (let i = 1; i <= 10; i++) {
  bbb += 1;
}

console.log(bbb);
