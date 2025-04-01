function hello() {
	console.log(123);
	console.log("hello world");
}
const a = 12;

function hey() {
	console.log("hello");
}
function myname() {
	console.log("wei");
}

export { hello, a, hey }; //named export
export default myname; // default export 長什麼樣子就用什麼模型
