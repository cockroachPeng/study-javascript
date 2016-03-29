// 条件判断与循环测试
// 条件
// 1.和java一样，js使用if(...){...}else{...}进行条件判断，{}可省略；如果省略{}，每个语句匹配最近的条件(if或者else)；
// 2.多条件判断可使用else if(...){...}的方式，也可以使用在else中包含if(...){...}else{...}的方式，两种效果一样；
// 循环
// 1.for in 对对象（含数组）循环得到的是字符串而不是数字；
// 2.while循环只有一个判断条件，条件满足，就不断循环，条件不满足时则退出循环；
// 3.do { ... } while()循环和while循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件；do...while循环至少执行一次；
//


// 1.小明的故事

var age = 18;

console.log('小明今年'+age+"岁,");
console.log('================= 1.小明是否成年？ =================');
if (age < 18){
	console.log('小明还未成年!');
}else{
	console.log('小明已成年!');
}

console.log('================= 2.小明的年龄阶段-1 =================');
if (age < 18){
	console.log('小明还未成年!需要家里经济支持。');
}else if(age <= 35){
	console.log('小明正当壮年，干劲十足');
}else{
	console.log('小明已不再年轻');
}

console.log('================= 2.小明的年龄阶段-2 =================');
if (age < 18){
	console.log('小明还未成年!需要家里经济支持。');
}else {
	if(age <= 35){
		console.log('小明正当壮年，干劲十足');
	}else{
		console.log('小明已不再年轻');
	}
}

// 累乘：1*2*3……10
console.log('================= 3.累乘：1*2*3……10 =================');
var result = 1;
for (var i = 1; i <= 10; i++) {
	result = result*i;
}
console.log('累乘：1*2*3……10='+result);

console.log('================= 4.找到绿色 =================');
var colors = ['yellow','red','green','black'];
for (var i = 0; i < colors.length; i++) {
	if('green' === colors[i]){
		console.log('I get green!');
		break;	// 跳出for循环
	}else{
		console.log('color not green!');
		continue;	// 终止当前执行，执行下一个循环条件
	}
	console.log('not break and continue! has bug!');
}

console.log('================= 5.找到绿色(for...in) =================');
for (var i in colors) {
	if('green' === colors[i]){
		console.log('I get green!');
		break;	// 跳出for循环
	}else{
		console.log('color not green!the color is '+colors[i]);
		continue;	// 终止当前执行，执行下一个循环条件
	}
	console.log('not break and continue! has bug!');
}

console.log('================= 6.全面认识小明（for...in） =================');
var xiaoming = {
	name:'小明',
	age:18,
	sex:'boy'
}
for (var i in xiaoming) {
	console.log('小明,'+i+'='+xiaoming[i]);
}

console.log('================= 7.找到绿色(while) =================');
var i = 0;
while('green' != colors[i]){
	i++;
}
console.log('找到绿色了，'+colors[i]);

console.log('================= 8.找到绿色(do...while) =================');
var j = 0;
do{
	j++;
}while('green' != colors[j]);
console.log('找到绿色了，'+colors[j]);