console.log('DEMO', 'filter');

var a = [1, 2, 3];

console.log('case 1');

console.log(filter(a, x=>x<2));
//[1]

console.log('case 2');

console.log(filter(a, x=>x!=0));
//[1, 2, 3]



