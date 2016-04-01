// 变量作用域
// 1.变量声明在函数体内，则该变量作用域为该函数体内部，在函数体外不可引用；
// 2.内部函数中可以访问外部函数中定义的变量，反之则不行；

'use strict';

// 1.两个并行函数，相同变量不影响
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