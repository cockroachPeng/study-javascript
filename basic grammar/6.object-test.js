// 对象测试
// 1.js对象是无序的集合数据类型；
// 2.键值对以：‘键名：值’的形式申明，每个键值之间使用‘，’分隔；键名为字符串，值可以为类型字段；
// 3.对象值通过‘.’访问；如果键名不符合变量名命名规范（为非法的变量名），则使用'[键名]'访问；
// 4.删除键：delete 对象名.值；不存在的对象直接返回‘undefined’，新增键值直接使用不存在的键赋值即可,如：对象.不存在的键名=值；
// 5.使用‘in’判断某个属性是都属于某个对象（包含父类的），使用‘hasOwnProperty()’方法也可以判断，但是不含父类的；

// 1.小明的故事
var xiaoming = {
	name : '小明',
	age : 25 ,
	sex : 'boy',	// 最后一个属性不需要','
	'his-father' : '大明',
	money : 9999999999999999
};

console.log('================== 1.小明的故事 ==================');
console.log(xiaoming);

// 2.获取键对应的值
console.log('================== 2.获取键对应的值 ==================');
console.log(xiaoming.name);
console.log(xiaoming.girlFriend); // undefined
console.log(xiaoming['his-father']); // 大明
console.log(xiaoming['name']); // 小明

// 3.删除新增对象
console.log('================== 3.删除新增对象 ==================');
xiaoming.girlFriend = '小美';
console.log('小明的女朋友：'+xiaoming.girlFriend);	// 小美
console.log('小明和小美好恩爱…………');
// 小美把小明甩了
console.log('小美把小明甩了');
delete xiaoming.girlFriend;
console.log('小明的女朋友为：'+xiaoming.girlFriend); // undefined

console.log('小强问小明有没有女朋友？，小明：'+ ('girlFriend' in xiaoming));
console.log('n年后，小美问小明现在有没有女朋友？，小明：'+ (xiaoming.hasOwnProperty('girlFriend')));

// 4.继承
var xiaoxiaoming = {
	name : '小小明',
	age : 3,
	sex : 'boy'
}

// 继承
// console.log('================== 4.继承 ==================');
console.log('小小明还在娘胎……');
console.log(xiaoxiaoming);
console.log('小小明出生了！');
xiaoxiaoming.prototype = xiaoming;
console.log(xiaoxiaoming);
console.log('小小明家的家产：'+('money' in xiaoxiaoming));	// TODO:有问题
console.log('小小明家的家产是否属于小小明：'+(xiaoxiaoming.hasOwnProperty('money')));
