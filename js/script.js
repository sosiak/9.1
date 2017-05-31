function getTriangleArea(a, h) {
	if (a < 0 || h<0) {
		console.log('Nieprawidłowa wartość')
	} else {
		return (a*h/2)
	}
}
function getTriangle1Area(a, h) {
	if (a < 0 || h<0) {
		console.log('Nieprawidłowa wartość')
	} else {
		return (a*h/2)
	}
}
function getTriangle2Area(a, h) {
	if (a < 0 || h<0) {
		console.log('Nieprawidłowa wartość')
	} else {
		return (a*h/2)
	}
}
console.log(getTriangleArea(10, 6));
console.log(getTriangle1Area(15, 6));
console.log(getTriangle2Area(-2, 12));
