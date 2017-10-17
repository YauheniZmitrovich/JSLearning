/*
  Calculate elements by custom rules:
  1. If the value of the element is 0 - add 10
  2. If the value of the element is greater than 100 - subtract 100
  3. If the value of the element is less than 100 - add 100
  4. If the value of the element is not a number - do not make any changes
 */

  for (i = 0; i < data.length; i++) {

    if (data[i] == null)
        continue;

    var number = +data[i]; 
    
    if (number == NaN)
        continue;


    if (number == 0) {
        data[i] = number + 10;
    } 
    else if (number > 100) {
        data[i] = number - 100;
    } 
    else if (number < 100) {
        data[i] = number + 100;
    }

  }

