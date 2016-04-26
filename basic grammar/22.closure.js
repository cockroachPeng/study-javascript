// 闭包（Closure）:函数中直接返回函数，在程序中以变量的形式传递；

'use strict';

// 1.使用闭包对数组求和
console.log('======================= 1.使用闭包对数组求和 =======================');
function lazy_sum(arr) {		// 当一个函数返回了一个函数后，其内部的局部变量还被新函数引用
	var sum = function () {
		return arr.reduce(function (x,y) {
			return x + y;
		});
	}

	return sum;
}

var f = lazy_sum([1,2,3,4,5,6]);

console.log('执行函数时才求和：'+f());

// 2.返回函数引用变量
console.log('======================= 2.返回函数引用变量 =======================');
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    // 循环后i变成了4；
    return arr;
}

var results = count();
var f1 = results[0];	// 循环变量i已经变成了4
var f2 = results[1];
var f3 = results[2];

console.log('f1 : '+f1());
console.log('f2 : '+f2());
console.log('f3 : '+f3());

// 3.正确引用循环变量
console.log('======================= 3.正确引用循环变量 =======================');
function count1() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {		// 匿名函数并立即执行
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count1();
var f11 = results[0];
var f12 = results[1];
var f13 = results[2];

console.log('f1 : '+f11());
console.log('f2 : '+f12());
console.log('f3 : '+f13());

// 4.闭包：携带状态的函数
console.log('======================= 4.闭包：携带状态的函数 =======================');
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
console.log('开始为0，第一次计数：'+c1.inc());	// 1
console.log('开始为0，第二次计数：'+c1.inc());	// 2
console.log('开始为0，第三次计数：'+c1.inc());	// 3

var c2 = create_counter(10);
console.log('开始为10，第一次计数：'+c2.inc());	// 11
console.log('开始为10，第二次计数：'+c2.inc());	// 12
console.log('开始为10，第三次计数：'+c2.inc());	// 13

// 5.求幂
console.log('======================= 5.求幂 =======================');
function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log('10的平方：'+pow2(10));
console.log('10的三次方：'+pow3(10));