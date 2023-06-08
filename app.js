var min = function(list){
  //setup variable to hold lowest value
  //assume first number is minimum
  let min = list[0];
    //setup for loop to run through array
    for (let i = 1; i < list.length; i++) {
      //check to see if i is less than current min value
      if (list[i] < min) {
        //update min value is i is smaller than current min value
        min = list[i];
      }
    }
    return min;
}

var max = function(list){
    //setup variable to hold highest value
    //assume first number is maximum
    let max = list[0]
    //setup for loop to run through array
    for (let i = 1; i < list.length; i++) {
      if (list[i] > max) {
        max = list[i];
      }
    }
    return max;
}