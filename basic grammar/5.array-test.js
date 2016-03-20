// 数组测试
//
//

// 1.length
console.log("================ 1.length ================");
var array = [1,"hehe",null,NaN,2.32];

for (var i = 0; i < array.length; i++) {
	console.log("第"+i+"个元素："+array[i]);
}

// 数组的length属性修改后，会影响数组大小和内容
var arrayLengthTest = [1,1.23,null,undefined];
console.log("数组长度修改前，数组长度为："+arrayLengthTest.length);
console.log("数组长度修改前，数组为："+arrayLengthTest);
arrayLengthTest.length = 10;
console.log("数组长度变长后，数组长度为："+arrayLengthTest.length);
console.log("数组长度变长后，数组为："+arrayLengthTest);
arrayLengthTest.length = 1;
console.log("数组长度变短后，数组长度为："+arrayLengthTest.length);
console.log("数组长度变短后，数组为："+arrayLengthTest);
arrayLengthTest.length = 4;
console.log("数组长度再变长后，数组长度为："+arrayLengthTest.length); // 原来的数据丢失了，只剩下1
console.log("数组长度再变长后，数组为："+arrayLengthTest);

// 越界访问数组元素
console.log("越界访问数组元素结果："+arrayLengthTest[10]); // undefined

// 2.修改元素，Array元素可以被修改（注意：这点不同于字符串），其实这个特性和java类似
console.log("================ 2.元素修改 ================");
var aryEleTest = [1,2,3,4,5,6,7];
console.log('元素修改之前，数组：'+aryEleTest);
aryEleTest[1] = 'modified'; // 第2个元素变为：'modified'
console.log('元素修改之后，数组：'+aryEleTest);
