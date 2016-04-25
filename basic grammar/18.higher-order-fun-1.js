// 高阶函数：以函数作为参数的函数；
//

function add(x,y,f) {
	return f(x)+f(y);
}

console.log(add(1,-2,Math.abs));	// 3
console.log(add(-5,-2,Math.abs));	// 7
console.log(add(-5,6,Math.abs));	// 11