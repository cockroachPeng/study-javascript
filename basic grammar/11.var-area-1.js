// 变量作用域
// 1.变量声明在函数体内，则该变量作用域为该函数体内部，在函数体外不可引用；
// 2.内部函数中可以访问外部函数中定义的变量，反之则不行；
// 3.内外函数变量同名，内部函数变量‘屏蔽’外部函数变量；变量从“内”向“外”查找；

'use strict';

// 1.两个并行函数，相同变量不影响
console.log('=================== 1.两个并行函数，相同变量不影响 ===================');
function foo(x) {
	var inner_var_1 = x;
	inner_var_1 = inner_var_1 + 1;
	return inner_var_1;
}

function bar(x) {
	var inner_var_1 = x;
	inner_var_1 = inner_var_1 + 2;	// 两个并行函数，相同变量不影响
	return inner_var_1;
}

console.log('foo(2) = '+foo(2));
console.log('bar(2) = '+bar(2));

// 2.内部函数中可以访问外部函数中定义的变量，反之则不行
console.log('=================== 2.内部函数中可以访问外部函数中定义的变量，反之则不行 ===================');
function foo1(x) {
	var out_var = 1;

	function bar1(y) {
		var inner_var = 'inner var';
		console.log('外部函数foo1定义的变量x='+x);
		return y+out_var+inner_var;	// 内部函数可以访问外部函数定义的变量
	}

	// console.log('内部函数bar1的变量z='+inner_var);	// 不能访问；
	return bar1(x);
}

console.log('foo1(2) = '+foo1(2));

// 3.内外函数变量同名，内部函数变量‘屏蔽’外部函数变量；
console.log('=================== 3.内外函数变量同名，内部函数变量‘屏蔽’外部函数变量 ===================');

function foo2(x) {
	var x = 1;
	return x;	// 入参x被屏蔽
}

console.log('foo2(3) = '+foo2(3));	// 内部变量屏蔽入参

function foo3(x) {
	var out_var = 1;

	function bar3(y) {
		var out_var = 10;

		return out_var+y;
	}

	return bar3(x)+out_var;
}

console.log('foo3(10) = '+foo3(10));	// 21