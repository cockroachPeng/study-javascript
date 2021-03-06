// strict模式，JavaScript在设计之初，为了方便初学者学习，并不强制要求用var申明变量。这个设计错误带来了严重的后果：
// 如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量；使用var声明的变量不是全局变量，它的作用范围被限制在
// 函数体内；
// 在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。

'use strict';

a = 1; // 正常情况下会报错

console.log('strict 模式未生效！');