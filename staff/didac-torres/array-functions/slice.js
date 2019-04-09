/**
 * 
 * @param {Array} array 
 * @param {Constant} start 
 * @param {Constant} stop 
 * 
 * @returns {Array}
 */


function slice(array,start,stop){
    var j=0;
    var arry=[];

    start = start || array.length;
    stop = stop || array.length;

    for(var i=start; i<stop;i++){
        arry[j]=array[i];
        j++;
    }
    return arry;
}