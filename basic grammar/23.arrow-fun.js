// 箭头函数：=>，ES6标准新增
'use strict';

// 1.一个表达式的箭头函数
console.log('===================== 1.一个表达式的箭头函数 =====================');
var fn = x => x * x;

console.log(fn(2));

// 2.多个表达式的箭头函数
console.log('===================== 2.多个表达式的箭头函数 =====================');
var fn1 =  x => {
	if (x > 0){
		return x*x;
	}else{
		return -x*x;
	}
}

console.log('多个表达式的箭头函数:'+fn1(10));
console.log('多个表达式的箭头函数:'+fn1(-10));

// 3.多个入参的箭头函数
console.log('===================== 3.多个入参的箭头函数 =====================');
var fn2 = (x,y) => x+y;

console.log('多个入参的箭头函数:'+fn2(1,2));
console.log('多个入参的箭头函数:'+fn2(-1,2));
console.log('多个入参的箭头函数:'+fn2(-1,2,5));

// 4.可变参数
console.log('===================== 4.可变参数 =====================');	// 版本不支持
// var fn3 = (x, y, ...rest) => {
//     var i, sum = x + y;
//     for (i=0; i<rest.length; i++) {
//         sum += rest[i];
//     }
//     return sum;
// }

// console.log('求和：'+fn3(1,2,3));

// 5.返回对象
console.log('===================== 5.返回对象 =====================');
var fn4 = x => {foo:x};	// 对象的{}与函数体的{}有冲突；
console.log(fn4(1));	// 返回的是undefined

var fn4 = x => ({foo:x});	// 对象的{}与函数体的{}有冲突；必须加()
console.log(fn4(1));	// 返回的是undefined

// 6.箭头函数完全修复了this指向不确定问题，箭头函数内部的this总是指向词法作用域（也就是外层调用者obj），由上下文确定
console.log('===================== 6.箭头函数this指向 =====================');
var obj = {
    birth: 1991,
    getAge: function () {
        var b = this.birth; // 1991
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};

console.log('this指向测试：'+obj.getAge());	// 25

// 对于箭头函数this指向已经明确，使用call()或者apply()时，无法对this进行绑定，传入的第一个参数被忽略
console.log('===================== 7.箭头函数call =====================');
var obj1 = {
    birth: 1991,
    getAge: function (year) {
        var b = this.birth; // 1991
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({birth:2000}, year);
    }
};
console.log("使用call第一个参数被忽略："+obj1.getAge(2016)); // 24
