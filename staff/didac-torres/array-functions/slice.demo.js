console.log('DEMO', 'slice');

var a = [1, 2, 3, 7, 1, 6];

console.log('case 1');

console.log(slice(a, 1, 5));
//[2,3,7,1]

console.log('case 2');

console.log(filter(a,4));
//[1,6]

console.log('case 3');

console.log(filter(a));
//[1, 2, 3, 7, 1, 6]