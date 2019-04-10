/**
 * 
 * @param {Array} array 
 */

function isArray(array){

    if(typeof array === 'undefined') throw TypeError( `${array} is undefined`);

    return array instanceof Array;
}