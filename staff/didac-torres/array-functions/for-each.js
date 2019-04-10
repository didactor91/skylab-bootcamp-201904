/**
 * Iterates an array and evaluates an expression on each of its values.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} callback The expression to evaluate.
 */
function forEach(array, callback) {

	for (var i = 0; i < array.length; i++)
		callback(array[i], i);
}


// function forEach(array, callback){

// 	var result = for_sim(array,callback,i);
	
// };

// function for_sim(array, callback,i){

	
// 	if( i < array.length){
// 		callback(array[i],i);
// 		i++;

// 	}
// 	else return ; 
	

// };