function area_of_circle(r) {
	if ((typeof r) !== 'number'){
		throw 'Not a number';
	}

	return 3.14*r*r;
}

console.log('半径为2的圆面积为：'+area_of_circle(2));
console.log('半径为2的圆面积为：'+area_of_circle(3));
console.log('半径为2的圆面积为：'+area_of_circle(8));