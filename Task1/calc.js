/**
 * Calculate elements by custom rules:
 * 1. If the value of the element is 0 - add 10
 * 2. If the value of the element is greater than 100 - subtract 100
 * 3. If the value of the element is less than 100 - add 100
 * 4. If the value of the element is not a number - do not make any changes
 *
 * @param {number} arr The array with data.
 */
function calculate(arr) {

  for (i = 0; i < arr.length; i++) {

    var parsed = parseInt(arr[i]);
    
    if (parsed == NaN)
        continue;

    if (parsed == 0) {
        arr[i] = parsed + 10;
    } 
    else if (parsed > 100) {
        arr[i] = parsed - 100;
    } 
    else if (parsed < 100) {
        arr[i] = parsed + 100;
    }

  }

}

calculate(data);