// Map和Set测试
// 1.Map与Set是ES6新增的数据类型，并非所有的浏览器支持；
// 2.Map是一个键-值对象，但是键允许是非字符串类型；
// 3.Map中重复的键（key）会相互覆盖其对应的值；
// 4.删除Map中的键-值使用方法delete；
// 5.Set中的元素不能重复，重复的会被自动过滤；
// 6.Set删除元素使用方法delete；
//
//

// 1.Map测试
console.log('==================== 1.Map测试 ====================');
var map = new Map([[1,'I'],['key',3]]);
console.log('map='+map);
console.log('数值1对应的值：'+map.get(1));
console.log('"key"对应的值：'+map.get('key'));
map.set('key','value');
console.log('覆盖后"key"对应的值：'+map.get('key'));
map.delete('key');
console.log('删除后"key"对应的值：'+map.get('key')); // undefined


// 2.Set测试
console.log('==================== 2.Set测试 ====================');
var set = new Set([1,2,'key',3]);
console.log('set='+set);
set.delete(1);

// 3.遍历
console.log('==================== 3.遍历 ====================');
console.log('==================== set遍历');
for (var i of set) {
	console.log(i);
}

console.log('==================== map遍历');
for (var i of map) {
	console.log(i);
}

var ary = [1,2,'3',1.2,'haha'];
ary.test = 'xixi';

console.log('==================== ary遍历 for of');
for (var i of ary) {
	console.log(i);
}

console.log('==================== ary遍历 for in');
for (var i in ary) {
	console.log(ary[i]);
}

console.log('==================== ary遍历 forEach');
ary.forEach(function(e,index,ary){
	console.log('当前元素：'+e);
	console.log('当前下标：'+index);
	console.log('当前数组'+ary);
});

console.log('==================== map遍历 forEach');
map.forEach(function(e,key,map){
	console.log('当前元素：'+e);
	console.log('当前下标：'+key);
	console.log('当前数组'+map);
});

console.log('==================== set遍历 forEach');
set.forEach(function(e,e1,set){
	console.log('当前元素：'+e);
	console.log('当前下标：'+e1);
	console.log('当前数组'+set);
});