
describe('concat', function(){
it('should return an concatedaned number array', function(){

    var a= [1,23,5];
    var b= [23,45,23];

    var exp=[1,23,5,23,45,23];

    var result = concat(a,b);
    
    expect(result,exp,true);

});

it('should return an concatedaned letters array', function(){

    var a= ['a','b','c'];
    var b= [23,45,23];

    var exp=['a','b','c',23,45,23];

    var result = concat(a,b);
    
    expect(result,exp,true);

});

it('should break on undefined array', function () {

    try {
        concat();

        throw Error('should not reach this point');
    } catch (error) {
        expect(error.message, "Cannot read property 'length' of undefined");
    }
});

});