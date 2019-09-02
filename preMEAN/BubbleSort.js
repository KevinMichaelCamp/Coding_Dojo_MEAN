function bubbleSort(arr){
  var temp;

  for(var i = 0; i < arr.length; i ++){
    for(var j = 1; j < arr.length; j ++){
      if(arr[j-1] > arr[j]){
        temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    }
  }
  return arr
}

console.log(bubbleSort([2,4,1,3,5,-8,4]));
