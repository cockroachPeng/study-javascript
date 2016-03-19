// 数据类型测试
// 1.JavaScript不区分整数和浮点数，统一用Number表示；
// 2.字符串是以单引号'或双引号"括起来的任意文本；
// 3.布尔值：true、false；布尔运算符：&&（与）、||（或）、!（非）；
// 4.比较运算符：>（大于）、>=（大于等于）、===（等于）、<=（小于等于）、<（小于）；
// 5.null：一个‘空’的值；''：一个长度为0的字符串；undefined：值未定义，仅仅在判断函数参数是否传递的情况下有用；
// 6.数组，JavaScript的数组可以包括任意数据类型；
// 7.对象，由键-值组成的无需集合，对象的键都是字符串类型，值可以是任意类型；
// 8.变量，变量名是大小写英文、数字、$和_的组合，且不能用数字开头，不能是javascript的关键字；变量本身类型不固定（动态语言）
// 9.strict模式，JavaScript在设计之初，为了方便初学者学习，并不强制要求用var申明变量。这个设计错误带来了严重的后果：
// 如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量；使用var声明的变量不是全局变量，它的作用范围被限制在
// 函数体内；
// 在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。

// 1.数值运算
console.log('========================1.数值运算========================');
console.log(1+2);// 加法
console.log(1-2);// 减法
console.log(1*2);// 乘法
console.log(1/2);// 除法
console.log(1%2);// 取余

console.log(1/0);// Infinity表示无限大
console.log(0/0)// NaN代表Not a Number

// 2.字符串
console.log('========================2.字符串========================');
console.log('单引号字符串'); // 以''括起来的字符串
console.log("双引号字符串"); // 以""括起来的字符串

// 3.布尔运算
console.log('========================3.布尔运算========================');
if (1 > 2) {
	console.log('布尔值为真');
} else {
	console.log('布尔值为假');
}

// 4.比较运算符
console.log('========================4.比较运算符========================');
console.log("1 > 2 = "+(1 > 2)); // 大于
console.log("1 > '0' = "+(1 > '0')); // 大于比较会自动转换数据类型
console.log("1 >= 2 = "+(1 >= 2)); // 大于等于
console.log("1 >= '0' = "+(1 >= '0')); // 大于等于比较会自动转换数据类型
console.log("1 === 2 = "+(1 === 2)); // 由于javascript涉及缺陷，‘==’比较运算很多情况下会得到意想不到的结果，必须使用‘===’做相等比较
console.log("1 === 1 = "+(1 === 1)); //
console.log("1 === '1' = "+(1 === '1')); // ===不会自动转换数据类型，当数据类型不一致时返回false
console.log("1 == '1' = "+(1 == '1')); // ==会自动转换数据类型，但是不要使用‘==’做相等比较
console.log("NaN === NaN = "+(NaN === NaN)); // NaN和任何值（包括NaN）作比较都返回false
console.log("NaN === 1 = "+(NaN === 1)); // NaN和任何值（包括NaN）作比较都返回false
console.log("isNaN(NaN) = "+isNaN(NaN)); // NaN只能通过isNaN()方法判断；
console.log("1 <= 2 = "+(1 <= 2)); // 小于等于
console.log("1 <= '0' = "+(1 <= '0')); // 小于等于比较会自动转换数据类型
console.log("1 < 2 = "+(1 < 2)); // 小于
console.log("1 <= '0' = "+1 <= '0'); // 小于比较会自动转换数据类型

console.log("1 / 3 === (1 - 2 / 3) = "+(1 / 3 === (1 - 2 / 3))); // 浮点数比较，和java中一样，浮点数计算进度丢失；要比较只能使用相差绝对值是否小于阈值
console.log("Math.abs(1 / 3 - (1 - 2 / 3)) < 0.001 = "+(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.001));

// 6.数组
console.log('========================6.数组========================');
var array1 = [1,true,'haha',null,5.12]; // 创建数组
var array2 = new Array(1,true,'haha',null,5.12); // 创建数组

console.log('第一种（[1,...]）方式创建的数组：');
for (var i = array1.length - 1; i >= 0; i--) {
	console.log('第'+i+'个元素：'+array1[i]);
}

console.log('第二种（new Array）方式创建的数组：');
for (var i = array2.length - 1; i >= 0; i--) {
	console.log('第'+i+'个元素：'+array2[i]);
}

// 7.对象
console.log('========================7.对象========================');
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
console.log('person.name = '+person.name);
console.log('person.tags = '+person.tags);

// 8.变量
console.log('========================8.变量========================');
var a = '这是个字符串'
var $s = 1;

console.log('变量a的值为：'+a);
console.log('变量$s的值为：'+$s);

// 变量反复赋值，支持不同类型
var b = 'haha';
console.log('变量b第一次值为字符串：'+b);
b = 2;
console.log('变量b第二次值为数字：'+b);
b = null;
console.log('变量b第三次值为null：'+b);

