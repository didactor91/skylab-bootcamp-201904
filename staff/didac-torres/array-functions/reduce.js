/**
 * 
 * @param {Array} array 
 * @param {Function} callback 
 * @param {Constant} initial 
 * 
 * @returns {Constant}
 */
function reduce(array, callback, initial) {

    var prev

    (typeof initial != 'undefined') ? prev = initial : prev = array[0];

    if (prev == initial) {
        for (var i = 0; i < array.length; i++) {

            prev = callback(prev, array[i]);


        }
    } else {
        for (var i = 1; i < array.length; i++) {

            prev = callback(prev, array[i]);


        }
    }

    return prev;
}
