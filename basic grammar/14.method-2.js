// 方法测试：使用'use strict'模式
//


'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

var fn = xiaoming.age;
console.log(fn());		// 直接报错，this指向undefined，TypeError: Cannot read property 'birth' of undefined