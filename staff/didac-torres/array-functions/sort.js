/**
 * 
 * @param {Array} array 
 * 
 * @returns {Array}
 */

function sort(array) {
        
    var temp = 0;
    
        for (var i = 0; i < array.length; i++) {
            for (var j = 1; j < (array.length - i); j++) {
                if (array[j - 1] > array[j]) {
                    temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }
