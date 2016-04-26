// filter高阶方法测试
// filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。

var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;		// 返回true，表示需要保留，反之丢弃
});
console.log('过滤数组中的所有的偶数：'+r);	// [1, 5, 9, 15]

// var arr1 = ['A', '', 'B', null, undefined, 'C', '  '];
// var r1 = arr.filter(function (s) {
//     return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
// });
// console.log('过滤空串：'+r1);
