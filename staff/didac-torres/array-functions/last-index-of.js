/**
 * 
 * @param {Array} array 
 * @param {constant} item 
 * 
 * @returns {constant}
 */

function lastIndexOf(array, item) {
    var pos = 0;
    for (var i = array.length-1; i >= 0; i--) {
        if(item === array[i]){
             return pos=i;
        }
    }
    return -1
}