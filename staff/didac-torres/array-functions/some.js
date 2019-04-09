// some
/**
 * Abstraction of some
 *
 * @param {Array} arr - The array to work
 * @param {Function} callback - The expression to evaluate.
 * 
 * @returns {Boolean} - tests whether at least one element 
 * in the array passes the test implemented by the provided function.
 */

function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true
        }
    }
    return false
}