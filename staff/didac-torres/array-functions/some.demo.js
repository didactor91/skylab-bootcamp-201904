console.log('DEMO', 'some');

var a = [3, 3, 3, 2, 1, 7, 6, 5, 4, 3, 2, 1];

console.log('case 1:');
console.log(some(a, x=> x>5));
//TRUE

console.log('case 2:');
console.log(some(a, x=> x>10));
//FALSE