// 方法测试
// 1.方法：一个对象中绑定的函数；
// 2.this永远指向当前被调用的对象；


// 1.常见方法
console.log('=============== 1.常见方法 ===============');
var method_test = {
	name : '小明',
	birth : 18,
	say_hello: function () {
		return this.name+":hello,i'm 18";
	}
}

console.log(method_test.say_hello);
console.log(method_test.say_hello());	// 小明:hello,i'm 18

// 2.this永远指向当前被调用的对象
console.log('=============== 2.this永远指向当前被调用的对象 ===============');
var say_hello1 = function () {
	return this.name+":hello,i'm 18";
}

var method_test1 = {
	name : '小明',
	birth : 18,
	say_hello: say_hello1
}

console.log(method_test1.say_hello());	// 小明:hello,i'm 18；当前对象method_test1
console.log(say_hello1());	// undefined:hello,i'm 18；当前对象是window，但是window中没有属性name；使用XXX.fun()可避免this指向错误