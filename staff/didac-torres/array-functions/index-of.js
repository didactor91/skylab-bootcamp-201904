/**
 * 
 * @param {Array} array 
 * @param {constant} item 
 * 
 * @returns {constant}
 */

function indexOf(array, item) {
    var pos = 0;
    for (var i = 0; i < array.length; i++) {
        if(item === array[i]){
             return pos=i;
        }
    }
    return -1
}