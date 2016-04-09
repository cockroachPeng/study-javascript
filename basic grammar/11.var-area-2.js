// 变量作用域
// 变量提升&全局变量&名字空间&局部变量&常量
// 1.JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有声明的变量“提升”到函数顶部；注意只会提升声明，赋值不会提升；
// 2.不再任何函数内定义的变量就具有全局作用域；js有一个默认的全局对象window，全局作用域的变量实际上被绑定到window的一个属性；
// 3.js实际只有一个全局作用域，任何变量（包含函数），如果没有在当前函数中找到，就会继续向上查找，最后如果在全局作用域中也没找到，则报ReferenceError错误；
// 4.不同的js文件如果使用相同的全局变量或者定义相同的顶级函数名，都会造成冲突，并且很能发现；减少这种冲突的方式就是把自己的所有变量	和函数全部绑定到一个全局变量中；
// 5.函数中定义的变量都是局部作用域的；for循环等语句块中是无法定义具有局部作用域的变量的
// 6.由于var和let申明的是变量，如果要申明一个常量，在ES6之前是不行的，我们通常用全部大写的变量来表示“这是一个常量，不要修改它的值”；但是ES6引入关键字const声明变量；

'use strict';

// 1.变量声明提升
console.log('=================== 1.变量声明提升 ===================');

function foo() {
	var x = 'Hello,'+y;
	console.log(x);
	var y = 'cockroachPeng';	// 变量y的声明被提升，赋值位置不变

	return x;
}

console.log('foo() = '+foo());

// 函数foo等同于以下函数foo1
function foo1() {
	var y;
	var x = 'Hello,'+y;
	console.log(x);
	y = 'cockroachPeng';

	return x;
}

console.log('foo1() = '+foo1());

// 由于js的这一特性，在函数内部定义变量时，在函数首部;
function bar() {
	var
		y = 'cockroachPeng',
		x = 'Hello,'+y;

	return x;
}

console.log('bar() = '+bar());

// 2.全局作用域
console.log('=================== 2.全局作用域 ===================');
// 使用名字空间减少冲突
var VAR_MAP = {};	// 名字空间

// 其他变量
VAR_MAP.name = 'cockroachPeng';
VAR_MAP.foo = function (x) {
	return 'hello,'+x;
}

console.log(VAR_MAP.foo(VAR_MAP.name));

// 3.局部作用域
console.log('=================== 3.局部作用域 ===================');
// for循环等语句块中是无法定义具有局部作用域的变量的
function for_var(x) {

	for (var i = 0; i < 2; i++) {
		console.log('helle,'+x);
	}

	return i;	// 仍然可以引用
}

console.log('for_var(mark) = '+for_var('mark'));

// 3.局部作用域
console.log('=================== 3.局部作用域 ===================');
const PI = 3.14;			// const与let都具有块级作用域
PI = 3.141592653;	// 报错
console.log('PI'+PI);
