// Date对象测试

// 1.获取系统时间
console.log('=================== 1.获取系统时间 ===================');
var now = new Date();
console.log('系统当前时间：'+now);
console.log('年：'+now.getFullYear());
console.log('月(0~11)：'+now.getMonth());
console.log('日：'+now.getDate());
console.log('星期(1~7)：'+now.getDay());
console.log('时：'+now.getHours());
console.log('分：'+now.getMinutes());
console.log('秒：'+now.getSeconds());
console.log('毫秒：'+now.getMilliseconds());
console.log('时间戳：'+now.getTime());		// 本机时间，因为用户可以修改本机时间所以不一定准确

// 2.创建指定日期
console.log('=================== 2.创建指定日期 ===================');
var d = new Date(2015, 5, 19, 20, 15, 30, 123);	// 第一种方式
console.log('创建的日期：'+d);

var d1 = Date.parse('2015-06-24T19:49:22.875+08:00');	// 第二种方式，符合ISO 8601标准（http://www.w3.org/TR/NOTE-datetime）的格式
console.log('ISO 8601格式创建的日期：'+d1);
console.log('时间戳转换为日期：'+new Date(d1));
console.log('当前时间：'+Date.now());		// 返回时间戳