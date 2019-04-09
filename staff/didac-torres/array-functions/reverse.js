/**
 * 
 * @param {Array} array
 * 
 * @returns {Array} 
 */


function reverse(array){
    var array1=[];
    for(var i=0;i<array.length;i++){
        array1[i]=array[array.length-(i+1)];

    }
    return array1
}