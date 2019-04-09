/**
 * 
 * @param {Array} array 
 * @param {Function} callback
 * 
 * @returns {Array} 
 */


function from(array, callback) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if(callback == undefined){
            arr[i]=array[i];
        }
        else
        arr [i] = callback(array[i]);
    }
    return arr;
}