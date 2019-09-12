// Math 1
function zero_negativity(arr){
  for(var i = 0; i < arr.length; i ++){
    if(arr[i] < 0){
      return false
    }
  }
  return true
}

console.log(zero_negativity([1,2,3,4,5,6]))
console.log(zero_negativity([1,2,-3,4,-5,6]))

// Math 2
function is_even(num){
  if(num % 2 == 0){
    return true
  }
  return false
}

console.log(is_even(7));
console.log(is_even(6));

// Math 3
function how_many_even(arr){
  let count = 0;
  for(var i = 0; i < arr.length; i ++){
    if(is_even(arr[i])){
      count ++;
    }
  }
  return count
}

console.log(how_many_even([1,2,3,4,5,6,7,8]));

// Math 4
function create_dummy_array(num){
  let arr = []
  for(var i = 0; i < num; i ++){
    arr.push(Math.floor(Math.random() * 9 + 1))
  }
  return arr
}

console.log(create_dummy_array(7));

// Math 5
function random_choice(arr){
  if(arr.length == 0){
    return "Array is empty"
  }
  return arr[Math.floor(Math.random() * arr.length)]
}

console.log(random_choice([1,2,3,4,5,6,7,8,9]));
console.log(random_choice([]));
