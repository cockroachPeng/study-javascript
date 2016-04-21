// 装饰器，动态改变函数行为
//

var count = 0;
var oldParseInt = parseInt; // 保存原函数

parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数,arguments获取函数调用时所有的实际传入的参数
};

// 测试:
console.log('parseInt(\'10\') = '+parseInt('10'));
console.log('parseInt(\'20\') = '+parseInt('20'));
console.log('parseInt(\'30\') = '+parseInt('30'));

console.log(count);