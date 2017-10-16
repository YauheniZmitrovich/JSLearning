/**
 * Output data of elements to the console by custom rules:
 * 1. Output the values of the element in the following format: 
 *   "data [{0}] = {1}", where {0} is the serial number of the element in the array,
 *   {1} is the string representation of the array element (see clause 2)
 * 2. The string representation of an array element is defined as follows:
 * 2.1. If the value is not defined (undefined) - output the string "не определено"
 * 2.2. If the value is not specified (null) - print the line "не указано"
 * 2.3. In all other cases, output a numeric value
 *
 * @param {number} arr The array with data.
 */
function log(arr) {

  arr.forEach(function(element,i) {
    
    if (typeof element == "undefined") {
        console.log("data[%d] = не определено", i);
    } 
    else if (element == null) {
        console.log("data[%d] = не указано", i);
    } else {
        console.log("data[%d] = %d", i, element);
    }

  }, this);

}

window.onload = function() {
    log(data);
};