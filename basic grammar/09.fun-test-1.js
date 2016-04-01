// js函数基本测试
// 1.js函数也是一个对象，函数名可视为指向该函数的变量；
// 2.js允许传入任意个参数（比定义的参数多或者少都ok），不影响程序执行；默认只取定义的几个参数；
// 3.js中使用arguments获取传入的所有（实际传入的）参数信息，arguments只在函数内部起作用；
// 4.rest可以指定可变参数，rest必须在定义时写在最后，格式为：...rest；rest是ES6新增标准；
// 5.js默认给所有的语句后加';'，如果将return语句拆成两行，js会任务是两个语句；可使用语句块（{...}）解决；
'use strict';

// 1.函数定义
console.log('================== 1.函数定义 ==================');

console.log('================== 第一种函数定义方式:');
function fun1() {
	return 'just a test 1';
}

var fun1_tmp = fun1;

console.log('fun1执行结果：'+fun1());
console.log('fun1_tmp执行结果：'+fun1_tmp());

console.log('\n================== 第二种函数定义方式:');
// 方式2和方式1完全等价
var fun2 = function () {
	return "just a test 2";
}

var fun2_tmp = fun2;
console.log('fun2执行结果：'+fun2());
console.log('fun2_tmp执行结果：'+fun2_tmp());

// 2.多个参数
console.log('\n================== 2.多个参数 ==================');
var fun_arg = function (x, y) {
	console.log('x type is '+(typeof x)+',x = '+x);	// 可以使用typeof强制校验参数类型
	console.log('y type is '+(typeof y)+',y = '+y); // 可以使用typeof强制校验参数类型
	var sum = x + y;
	return sum;
}

console.log('fun_arg(1,2,3) = '+fun_arg(1,2,3)); // 3
console.log('fun_arg(1) = '+fun_arg(1)); // 传入的y为undefined，计算结果为NaN
console.log('fun_arg(1,"112w") = '+fun_arg(1,"112w"));

// 3.关键字arguments
console.log('\n================== 3.关键字arguments ==================');
var fun3 = function (x) {

	console.log('传入'+arguments.length+'个参数');
	return x;
}

console.log('fun3(10) = '+fun3(10));
console.log('fun3(10,11) = '+fun3(10,11));
console.log('fun3() = '+fun3());

// 4.关键字rest
console.log('\n================== 4.关键字rest =================='); // 版本不支持
// function foo(a, b, ... rest) {
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
// }
// 	//
// console.log(foo(1,2));	// undefined

// 5.return‘陷阱’
console.log('\n================== 4.关键字rest =================='); // 版本不支持
function fun_return1() {
	return '来了，坐吧'
}

console.log(fun_return1());

function fun_return2() {
	return
	'来了，坐吧'		// 直接认为是两行
}

console.log(fun_return2());