// Part 1
function starString(num){
  let string = ""
  for(var i = 0; i < num; i ++){
    string += "*";
  }
  return string
}

console.log(starString(45));

// Part 2
function drawStars(arr){
  for(var i = 0; i < arr.length; i ++){
    console.log(starString(arr[i]));
  }
}

drawStars([1,6,5,7,8,9,21])

// Part 3
function drawStars(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			result.push(starString(arr[i]))
		}
    else if(typeof arr[i] === 'string'){
			let string = "";
			for (let j = 0; j < arr[i].length; j++) {
				string += arr[i][0].toLowerCase();
			}
			result.push(string);
		}
	}
	return result;
}



console.log(drawStars([1,"bob",5,7,"John",9,21]));
