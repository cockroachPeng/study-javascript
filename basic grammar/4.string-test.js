// 字符串测试

// 1.转义符:字符前加'\'
console.log('=============== 1.转义符测试 ===============');
console.log('I\'m ok!');

// 2.ASCII码
console.log('=============== 2.ASSCII测试 ===============');
console.log('\x41'); //'A'

// 3.unicode
console.log('=============== 3.unicode测试 ===============');
console.log('\u4e2d\u6587'); //'中文'

// 4.多行
console.log('=============== 4.多行测试 ===============');
// ES6最新特性，支持浏览器有限
console.log(
`第一行
第二行
第三行`);

// \n
console.log('\n第一行\n第二行\n第三行');

// 5.获取字符串指定位置的字符，下标从0开始
console.log('=============== 5.字符串索引值测试 ===============');
var stringA = 'china';
console.log(stringA[0]); //'c'
console.log(stringA[3]); //'n'

// 6.字符串是不可变的，对字符串的索引值修改不会报错，但是也不会改变原值
console.log('=============== 6.字符串索引值修改测试 ===============');
console.log('对索引值赋值前：'+stringA);
stringA[2] = '1';
console.log('对索引值赋值后：'+stringA);

// 7.字符串大小写转换
console.log('=============== 7.字符串大小写转换 ===============');
console.log(stringA.toUpperCase()); //'CHINA'
console.log('CHINA'.toLowerCase()); //'china'

// 8.获取子串和获取字符串位置
console.log('=============== 8.获取子串和获取字符串位置 ===============');
console.log(stringA.substring(0,3));// 'chi'，获取指定位置的字符串
console.log(stringA.substring(4,10));// 'a'，直到最后一个字符
console.log(stringA.substring(5,10));// ''，超出字符大小返回''
console.log(stringA.substring(3,0));// 'chi'，自动设置start <= end
console.log(stringA.substring(0,0));// ''，获取0个字符
console.log(stringA.indexOf('chi'));// 0
console.log(stringA.indexOf('Chi'));// 获取不到返回-1