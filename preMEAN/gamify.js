var tigger = {
  character: 'Tigger',
  greet: function(){
    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
  }
}
var pooh = {
  character: 'Winnie the Pooh',
  greet: function(){
    console.log("I always get to where I'm going by walking away from where I have been.");
  }
}
var piglet = {
  character: 'Piglet',
  greet: function(){
    console.log("The things that make me different are the things that make me.");
  }
}
var bees = {
  character: 'bees',
  greet: function(){
    console.log("Buzz off!");
  }
}
var owl = {
  character: 'Owl',
  greet: function() {
    console.log("This situation calls for an expert!");
  }
}
var robin = {
  character: 'Christopher Robin',
  greet: function(){
    console.log("One thing you should know, no matter where I go, we'll always be together.");
  }
}
var rabbit = {
  character: 'Rabbit',
  greet: function(){
    console.log("No one's home. Go away!");
  }
}
var gopher = {
  character: 'Gopher',
  greet: function(){
    console.log("I could gopher some lunch...");
  }
}
var kanga = {
  character: 'Kanga',
  greet: function(){
    console.log("Some people care too much. I think it's called love.");
  }
}
var eeyore = {
  character: 'Eeyore',
  greet: function(){
    console.log("A little consideration, a little thought for others, makes all the difference.");
  }
}
var heffalumps = {
  character: 'Heffalumps',
  greet: function(){
    console.log("Heffa nice day!");
  }
}

var locations = [tigger, pooh, piglet, owl, robin, rabbit, gopher, kanga, eeyore, heffalumps]

tigger.north = pooh;
pooh.north = robin;
pooh.east = bees;
pooh.south = tigger;
pooh.west = piglet;
piglet.north = owl;
piglet.east = pooh;
bees.west =  pooh;
bees.north = rabbit;
owl.east = robin;
owl.south = piglet;
robin.north = kanga;
robin.east = rabbit;
robin.south = pooh;
robin.west = owl;
rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = robin;
gopher.west = rabbit;
kanga.north = eeyore;
kanga.south = robin;
eeyore.south = kanga;
eeyore.east =  heffalumps;
heffalumps.west = eeyore;

var player = {
  location: tigger,
  honey: false
}

function move(dir){
  if (dir == 'north'){
    if (player.location.north){
      console.log(`You are now at ${player.location.north.character}'s house.'`);
      player.location.north.greet();
      player.location = player.location.north;
    }
    else{
      console.log("You can't go that way.");
    }
  }
  if (dir == 'east'){
    if (player.location.east){
      console.log(`You are now at ${player.location.east.character}'s house.'`);
      player.location.east.greet();
      player.location = player.location.east;
    }
    else{
      console.log("You can't go that way.");
    }
  }
  if (dir == 'south'){
    if (player.location.south){
      console.log(`You are now at ${player.location.south.character}'s house.'`);
      player.location.south.greet();
      player.location = player.location.south;
    }
    else{
      console.log("You can't go that way.");
    }
  }
  if (dir == 'west'){
    if (player.location.west){
      console.log(`You are now at ${player.location.west.character}'s house.'`);
      player.location.west.greet();
      player.location = player.location.west;
    }
    else{
      console.log("You can't go that way.");
    }
  }
}

function pickUp(){
  if (player.location == bees){
    console.log("Picked up some honey!");
    player.honey = true;
  }
  else{
    console.log("There's no honey here...");
  }
}

var destination;

function mission(){
  destination = locations[Math.floor(Math.random() * locations.length)]
  console.log(`You must deliver the honey to ${destination.character}'s house.'`);
}

function dropOff(){
  if(player.honey == true && player.location == destination){
    console.log("Congratulations, you win");
  }
  else if (player.honey == true && player.location != destination) {
    console.log("Sorry, you must drop off the honey elsewhere.");
  }
  else if (player.honey == false && player.location == destination) {
    console.log("You need to find some honey");
  }
  else{
    console.log("You don't have honey & this is the wrong spot");
  }
}

mission();
move('north')
pickUp();
move('east')
pickUp();
move('north')
dropOff();
move('west')
dropOff();
move('north')
dropOff();
move('north')
move('east')
move('east')
