var tigger = {character: 'Tigger'}
var pooh = {character: 'Winnie the Pooh'}
var piglet = {character: 'Piglet'}
var bees = {character: 'bees'}
var owl = {character: 'Owl'}
var robin = {character: 'Christopher Robin'}
var rabbit = {character: 'Rabbit'}
var gopher = {character: 'Gopher'}
var kanga = {character: 'Kanga'}
var eeyore = {character: 'Eeyore'}
var heffalumps = {character: 'Heffalumps'}

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
  location: tigger
}

function move(dir){
  if (dir == 'north'){
    if (player.location.north){
      console.log(player.location.north.character);
      player.location = player.location.north;
    }
    else{
      console.log("You can't go that way.");
    }
  }
  if (dir == 'east'){
    if (player.location.east){
      console.log(player.location.east.character);
      player.location = player.location.east;
    }
    else{
      console.log("You can't go that way.");
    }
  }
  if (dir == 'south'){
    if (player.location.south){
      console.log(player.location.south.character);
      player.location = player.location.south;
    }
    else{
      console.log("You can't go that way.");
    }
  }
  if (dir == 'west'){
    if (player.location.west){
      console.log(player.location.west.character);
      player.location = player.location.west;
    }
    else{
      console.log("You can't go that way.");
    }
  }
}

move('north')
move('east')
move('west')
