let nums = [5, 2, 8, 1];
let squared = nums.map((el) => el * el);
console.log(squared); // [25, 4, 64, 1]

let objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
let ids = objects.map((obj) => obj.id);
console.log(ids); // [1, 2, 3]
