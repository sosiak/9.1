function getTriangleArea(a, h) {
	if (a < 0 || h<0) {
		console.log('Nieprawidłowa wartość')
	} else {
		return (a*h/2)
	}
}
console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(10, 6);
var triangle2Area = getTriangleArea(20, 8);
var triangle3Area = getTriangleArea(-2, 6);


