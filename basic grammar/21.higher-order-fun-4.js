// sort 排序函数

// 1.Array默认的排序函数
console.log('================== 1.Array默认的排序函数 ==================');
console.log('全字符串排序：'+['Google','Apple','Microsoft'].sort());	// Apple,Google,Microsoft；按ASCII码排序；
console.log('全字符串排序：'+['Google','apple','Microsoft'].sort());	// Google,Microsoft,apple；ASCII排序，小写字母在大写字母之后；
console.log('数字排序：'+[10,20,1,2].sort());	// 1,10,2,20；特别注意：数字会先转成字符串，再按ASCII排序；如果要实现按数字大小排序，只能自己写排序规则；

// 2.自定义排序规则
console.log('================== 2.自定义排序规则 ==================');
var arr = [10, 20, 1, 2];
var after_sort = arr.sort(function (x,y) {
	if (x < y){
		return -1;
	}
	if (x > y) {
        return 1;
    }
    return 0;
});

console.log('自定义数字排序：'+after_sort);	// 1,2,10,20
console.log('原始的数组也被修改了：'+arr);		// 1,2,10,20

// 逆序
var after_sort1 = arr.sort(function (x,y) {
	if (x < y){
		return 1;
	}
	if (x > y) {
        return -1;
    }
    return 0;
});

console.log('自定义逆序排序：'+after_sort1);	// 1,2,10,20
console.log('原始的数组也被修改了：'+arr);		// 1,2,10,20