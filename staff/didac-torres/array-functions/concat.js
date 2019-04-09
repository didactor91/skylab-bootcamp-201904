/**
 * 
 * @param {Array} array1 
 * @param {Array} array2 
 * 
 * @returns {Array}
 */


function concat(array1, array2) {
    array=array1;
    for(var i=0; i<array2.length; i++){
        array[array1.length]=array2[i];
    }

    return array;
}