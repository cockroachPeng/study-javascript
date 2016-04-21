// 使用apply函数控制this指向；
//


function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

console.log(xiaoming.age()); // 26
console.log(getAge.apply(xiaoming, [])); // 26, this指向xiaoming, 参数为空

// apply与call区别：
// 1.apply()把参数打包成Array再传入；
// 2.call()把参数按顺序传入；
console.log(Math.max.apply(null,[1,2,1.1]));
console.log(Math.max.call(null,1,2,1.1));

// 无参数方法
function foo(argument) {
	return "just do it";
}

console.log(foo.apply(null, []));
console.log(foo.apply(null, null));
console.log(foo.apply(null));
console.log(foo.call(null, null));
console.log(foo.call(null, null));
console.log(foo.call(null));