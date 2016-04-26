// 常用的三个数组高阶函数：map/reduce,filter,sort
//
'use strict';

// 1.map测试
// map回调参数有三个，callback(currentValue, index, array)
console.log('================= 1.map测试 =================');
function pow(x,y) {
	return x*y;
}
var ary_map = [1,2,3,4,5,6,7,8];
console.log('求数组每个元素的平方：'+(ary_map.map(pow)));		// 注意：map回调参数有三个！！，所以每次都会和下标相乘
console.log('将数组每个元素转换为字符串：'+ary_map.map(String));

var ary1 = ["jack","mark","rose"];
function hello(x) {
	return "hello,"+x+"!";
}
console.log('跟所有人打招呼：'+ary1.map(hello));

// 2.reduce测试
// reduce中的函数的参数必须是两个，这两个参数是数组中相邻的两个元素值
console.log('================= 2.reduce测试 =================');
var ary_reduce = [1,2,3,4,5,6];
function calAdd(x,y) {
	return x+y;
}

function to_int(x,y) {
	return x*10+y;
}
console.log('数组求和：'+ary_reduce.reduce(calAdd));	// 21
console.log('将数组转换成整数：'+ary_reduce.reduce(to_int));	// 123456

// 练习1：将数组的所有元素转换为首字母大写
console.log('================= 练习1：将数组的所有元素转换为首字母大写 =================');
var ary_words = ['china','Japan','American','a',null,'null','ToDo',11];
function l2U(x) {
	if (typeof x == "string"){
		// 值转换字符串
		return x[0].toUpperCase()+x.substring(1,x.size);
	}
	return x;
}
console.log('首字母转换为大写：'+ary_words.map(l2U));

// 练习2：查找错误：下面输出结果为：[ 1, NaN, NaN ]，是错的
var arr = ['1', '2', '3'];
var r;
r = arr.map(parseInt);
console.log('arr.map(parseInt)='+r);	//[ 1, NaN, NaN ]

// 由于map()接收的回调函数可以有3个参数：callback(currentValue, index, array)，通常我们仅需要第一个参数，而忽略了传入的后面两个参数。不幸的是，parseInt(string, radix)没有忽略第二个参数，导致实际执行的函数分别是：
// parseInt('0', 0); // 0, 按十进制转换
// parseInt('1', 1); // NaN, 没有一进制
// parseInt('2', 2); // NaN, 按二进制转换不允许出现2
// 可以改为r = arr.map(Number);，因为Number(value)函数仅接收一个参数。
// 1.可以自己重写函数
r = arr.map(function (x) {
	return parseInt(x);
});

console.log('转换成整数：'+r);
console.log('转换成整数：'+arr.map(Number));