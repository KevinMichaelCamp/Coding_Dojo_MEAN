//1

// console.log(hello);
// var hello = 'world';

var hello;
console.log(hello); //undefined
var hello = 'world';

//2

// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }

var needle;
function test(){
  var needle;
  needle = 'magnet';
  console.log(needle); // 'magnet'
}
needle = 'haystack';
test(); // 'magnet'

//3

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);

var brendan;
brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan); // 'super cool'

//4

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }

var food;
function eat(){
  var food;
  food = 'half-chicken';
  console.log(food);
  food = 'gone';
}
food = 'chicken';
console.log(food); // 'chicken'
eat(); // 'half-chicken'

//5

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

var mean;
mean(); //meaan n is not a function
mean = function() {
  var food;
  food = "chicken";
  console.log(food);
  food =  "fish";
  console.log(food);
}
console.log(food); //undefined
console.log(food); //undefined

//6

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);

var genre;
function rewind() {
  var genre;
  genre = 'rock';
  console.log(genre);
  genre = 'r&b';
  console.log(genre);
}
console.log(genre); // undefined
genre = 'disco'
rewind(); // 'rock' \n 'r&b'
console.log(genre); // 'disco'

//7

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

function learn() {
  var dojo;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
dojo = "san jose"; // reference error: dojo undefined
console.log(dojo);
learn();
console.log(dojo);

//8

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//   const dojo = {};
//   dojo.name = name;
//   dojo.students = students;
//   if(dojo.students > 50){
//     dojo.hiring = true;
//   }
//   else if(dojo.students <= 0){
//     dojo = "closed for now";
//   }
//   return dojo;
// }

function makeDojo(name, students){
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if(dojo.students > 50){
    dojo.hiring = true;
  }
  else if(dojo.students <= 0){
    dojo = "closed for now"; // can't reassign const
  }
  return dojo;
}

console.log(makeDojo("Chicago", 65)); // {name: 'Chicago', students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0)); //TypeError - Assignment to constant
