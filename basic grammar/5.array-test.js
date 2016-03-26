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

// 3.常用方法
console.log("================ 3.常用方法 ================");
// indexOf
console.log('元素“1”所在下标：'+array.indexOf(1)); // 0
console.log('元素“hehe”所在下标：'+array.indexOf('hehe')); // 1
console.log('元素“heheh”所在下标：'+array.indexOf('heheh')); // -1

// slice
console.log('数组1-3的元素：'+array.slice(1,3)); // 不含下表为3的元素，左闭右开
console.log('数组3-1的元素：'+array.slice(3,1)); // start必须小于end，否则返回null
console.log('数组1-1的元素：'+array.slice(1,1)); // start必须小于end，否则返回null
console.log('数组3到数组最后一个元素：'+array.slice(3)); //
console.log('数组10到数组最后一个元素：'+array.slice(10)); // 越界

// push && pop 数组尾部操作
var arrayPopPushTest = [1,'china',"zhejiang",3.2];
console.log('push前：'+arrayPopPushTest); // push往数组后加元素
arrayPopPushTest.push('push ele');
console.log('push后：'+arrayPopPushTest); // push往数组后加元素

console.log('push前：'+arrayPopPushTest); // push往数组后加元素
arrayPopPushTest.push();	// 空的
console.log('push后：'+arrayPopPushTest); // push往数组后加元素

console.log('pop前：'+arrayPopPushTest); // push往数组后加元素
arrayPopPushTest.pop();
console.log('pop后：'+arrayPopPushTest); // push往数组后加元素

var aryEmpty = [];
aryEmpty.pop();
console.log('空数组pop:'+aryEmpty);

// unshift && shift 数组头部操作
var aryShiftTest = [1,2,'china',3.21];
console.log('unshift前：'+aryShiftTest);
aryShiftTest.unshift('zhejiang');
console.log('unshift后：'+aryShiftTest);

console.log('shift前：'+aryShiftTest); //
aryShiftTest.shift();
console.log('shift后：'+aryShiftTest);

aryEmpty.shift();
console.log('空数组shift:'+aryEmpty);

// reverse
var aryReverseTest = [1,2,'china',3.21];

console.log('reverse前：'+aryReverseTest);	// 1,2,china,3.21
aryReverseTest.reverse();
console.log('reverse后：'+aryReverseTest);	// 3.21,china,2,1

// splice
var arrSplice = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];

console.log('splice前：'+arrSplice);
console.log('splice返回元素：'+arrSplice.splice(2, 3, 'Google', 'Facebook')); // 删除下标为：2，3，4的元素,返回删除的元素 ['Yahoo', 'AOL', 'Excite']
console.log('splice后：'+arrSplice); // Microsoft,Apple,Google,Facebook,Oracle

// 只删除不添加
console.log('++++++++++++++++++++++ splice 只删除不添加 ++++++++++++++++++++++');
console.log('splice前：'+arrSplice); // Microsoft,Apple,Google,Facebook,Oracle
console.log('splice返回元素：'+arrSplice.splice(2, 2));	// ['Google', 'Facebook']
console.log('splice后：'+arrSplice); // Microsoft,Apple,Oracle

// 只添加，不删除
console.log('++++++++++++++++++++++ splice 只添加，不删除 ++++++++++++++++++++++');
console.log('splice前：'+arrSplice); // Microsoft,Apple,Oracle
console.log('splice返回元素：'+arrSplice.splice(2, 0, 'Google', 'Facebook'));	// Microsoft,Apple,Google,Facebook,Oracle
console.log('splice后：'+arrSplice);

// concat
var arrConcat = ['A', 'B', 'C'];
var added = arrConcat.concat([1, 2, 3]);
console.log("原数组："+arrConcat);
console.log('拼接后的数组：'+added);

// 任意数组
var added1 = arrConcat.concat([1, 2, 3,['haha','hehe']]); // 自动拆解数组
console.log("原数组："+arrConcat);
console.log('拼接后的数组：'+added1);

// join
console.log('join：'+arrConcat.join('--'));
console.log('join：'+arrConcat.join('/'));

// 多维数组
var arrMul = [[1, 2, 3], [400, 500, 600], '-'];
console.log('下标0的数组下标2对应的元素：'+arrMul[0][1]); // 2
