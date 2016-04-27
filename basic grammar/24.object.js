// 在javascript中也是一切皆对象
'use strict';

// 1.包装对象
console.log('==================== 1.包装对象 ====================');
var n = new Number(1234);	// 123,生成了新的包装类型
var b = new Boolean(true); 	// true,生成了新的包装类型
var s = new String('str'); // 'str',生成了新的包装类型

console.log('数字：'+n);
console.log('布尔：'+b);
console.log('字符串：'+s);

// 2.对象判断相等，不要使用===判断两个对象相等，即使内容一样；至于为什么得看javascript的实现，也许类似java的对象地址
console.log('==================== 2.对象判断相等 ====================');
console.log(''+(n===1234));		// false
console.log(''+(b===true));		// false
console.log(''+(s==='str'));	// false

// 3.不带new，包装对象被当做普通函数
console.log('==================== 3.不带new，包装对象被当做普通函数 ====================');
var n1 = Number('123'); // 123，相当于parseInt()或parseFloat()
console.log(typeof n1); // 'number'

var b1 = Boolean('true'); // true
console.log(typeof b1); // 'boolean'

var b2 = Boolean('false'); // true! 注意：'false'字符串转换结果为true！因为它是非空字符串！
console.log("b2:"+b2);
var b3 = Boolean(''); // false
console.log('b3:'+b3);

var s1 = String(123.45); // '123.45'
console.log(typeof s1);; // 'string'

// 4.javascript对象使用注意事项
// 1.不要使用new Number()、new Boolean()、new String()创建包装对象；
// 2.用parseInt()或parseFloat()来转换任意类型到number；
// 3.用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
// 4.通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
// 5.typeof操作符可以判断出number、boolean、string、function和undefined；
// 6.判断Array要使用Array.isArray(arr)；
// 7.判断null请使用myVar === null；
// 8.判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
// 9.函数内部判断某个变量是否存在用typeof myVar === 'undefined'

// 5.对象的toString方法使用
console.log('==================== 5.对象的toString方法使用 ====================');
console.log(123..toString());	// 数字的toString方法调用时两个‘.’；或者加小括号；
console.log((123).toString());

// console.log(null.toString());	// null没有toString方法
// console.log(undefined.toString());	// undefined没有toString方法
