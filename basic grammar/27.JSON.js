// JSON测试
// JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。
// 在JSON中，一共就这么几种数据类型：
// number：和JavaScript的number完全一致；
// boolean：就是JavaScript的true或false；
// string：就是JavaScript的string；
// null：就是JavaScript的null；
// array：就是JavaScript的Array表示方式——[]；
// object：就是JavaScript的{ ... }表示方式。
// 以及上面的任意组合。
// 并且，JSON还定死了字符集必须是UTF-8
// 为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""

'use strict';

// 1.序列化
console.log('================ 1.序列化 ================');
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var xiaoming_json = JSON.stringify(xiaoming);
console.log("默认格式序列化后："+xiaoming_json);
console.log("按缩进输出格式序列化后："+JSON.stringify(xiaoming,null,'    '));
console.log("序列化指定项后："+JSON.stringify(xiaoming,['name','skills'],'    '));

function convert(key,value) {
	if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
console.log("按指定函数序列化后："+JSON.stringify(xiaoming,convert,'    '));

var xiaoqiang = {
    name: '小强',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};
console.log("精确定义序列化数据序列化后："+JSON.stringify(xiaoqiang,null,'    '));

// 2.反序列化
console.log('================ 2.反序列化 ================');
console.log(JSON.parse('[1,2,3,true]'));	// [ 1, 2, 3, true ]
console.log(JSON.parse('{"name":"小明","age":14}'));	// { name: '小明', age: 14 }
console.log(JSON.parse('true'));	// true

var xiaomingtmp = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(xiaomingtmp);

