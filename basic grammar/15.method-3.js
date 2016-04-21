// 方法内部函数this指向
// this指针只在age方法的函数内指向xiaoming，在函数内部定义的函数，this又指向undefined了！（在非strict模式下，它重新指向全局对象window！）

'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 直接报错，this指向undefined，TypeError: Cannot read property 'birth' of undefined
// 该报错解决方法：在外部（第一层）函数使用变量记住this，再在内部函数使用该变量