// 正则测试
// 1.\d匹配一个数字，\w匹配一个数字或者字母，\s可以匹配一个空格（包括Tab等空白符），.匹配任意字符；
// 2.*表示任意字符，+表示1个或多个字符，？表示0个或者一个字符，{n}表示n个字符，{n,m}表示n~m个字符；
// 3.[]表示陪陪范围，例如：[A-Za-z]匹配任意大小写字母；|表示或，A|B匹配A或者B；()表示分组
// 4.^表示行的开头，$表示行的结束；
// 5.正则默认是贪婪匹配：尽可能多的匹配；
// 6.标识g代表全局匹配；全局匹配可以多次执行exec()方法来搜索一个匹配的字符串。当我们指定g标志后，每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引；
// 7.i标志，表示忽略大小写，m标志，表示执行多行匹配

'use strict';

// 1.正则基本使用
console.log('================== 1.正则基本使用 ==================');
var reg1 = /[A-Z][a-z]+-[A-Za-z]+/;	// 匹配国家
var reg2 = new RegExp('[A-Z][a-z]+\-[A-Za-z]+');	// 匹配国家

console.log(reg1.test('China-HuNan'));	// true
console.log(reg2.test('China-HuNan'));	// true

console.log(reg1.test('China-ZheJiang'));	// true
console.log(reg2.test('China-ZheJiang'));	// true

console.log(reg1.test('China-1111'));	// false
console.log(reg2.test('China-1111'));	// false

console.log(reg1.test('China-a'));	// true
console.log(reg2.test('China-a'));	// true

console.log(reg1.test('China-'));	// false
console.log(reg2.test('China-'));	// false

var reg3 = /^C[A-Za-z]{3}a$/;	// 匹配中国，大写开头
console.log(reg3.test('China'));	// true
console.log(reg3.test('china'));	// false

// 2.切割字符串
console.log('================== 2.切割字符串 ==================');
console.log('1,2,3,4'.split(/,/));
console.log('1 ,2  ,3,4'.split(/\s*,/));
console.log('1 ,2  ,3,,, ,4'.split(/,*\s*,+/));
console.log('1 ,2  ,3,, , ,4'.split(/[,\s]+/));
console.log('1 ,2  ,3,, ,,  , ,4'.split(/[,\s]+/));

// 3.分组
console.log('================== 3.分组 ==================');
var reg4 = /^([0-9]{4})(-)([0-9]{8})$/;		// 匹配杭州号码，一定要带开始和结束符（^,$）；否则正则是贪婪匹配，得到非预期结果
console.log(reg4.exec('0571-87321456'));	//
console.log(reg4.exec('0571-873214561'));	// null

// 4.贪婪匹配
console.log('================== 4.贪婪匹配 ==================');
var reg5 = /^(\d+)(0*)$/;		// 默认是贪婪匹配
console.log(reg5.exec('102300'));	// [ '102300', '102300', '', index: 0, input: '102300' ]

var reg6 = /^(\d+?)(0*)$/;	// 加个?就可以让\d+采用非贪婪匹配
console.log(reg6.exec('102300'));	// [ '102300', '1023', '00', index: 0, input: '102300' ]

// 5.全局搜索,全局匹配类似搜索，因此不能使用/^...$/，那样只会最多匹配一次
console.log('================== 5.全局搜索 ==================');
var str = 'JavaScript, VBScript, JScript and ECMAScript';
var reg7=/[a-zA-Z]+Script/g;

// 使用全局匹配:
console.log(reg7.exec(str));	// ['JavaScript']
console.log(reg7.lastIndex);	// 10

console.log(reg7.exec(str));	// ['VBScript']
console.log(reg7.lastIndex);	// 20

console.log(reg7.exec(str));	// ['JScript']
console.log(reg7.lastIndex);	// 29

console.log(reg7.exec(str));	// ['ECMAScript']
console.log(reg7.lastIndex); // 44

console.log(reg7.exec(str));; // null，直到结束仍没有匹配到

// 6.忽略大小写
console.log('================== 6.忽略大小写 ==================');
var reg8 = new RegExp('^[A-Z]+$','i');

console.log(reg8.test('China'));	// true
console.log(reg8.test('china'));	// true

// 7.验证email地址合法性
console.log('================== 7.验证email地址合法性 ==================');
var reg9 = new RegExp('^([A-Za-z0-9]+)(@)([A-Za-z0-9]+)(\.)(com|io)$');	// 587898@163.com，结尾不一定是com
console.log(reg9.test('587898@163.com'));	// true
var reg10 = new RegExp('^(\\w+)(@)(\\w+)(\.)(com|io)$');	// 注意使用\w必须带上转义符\，即：\\w
console.log(reg10.test('587898@163.com'));	// true
