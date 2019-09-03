function Ninja(name){
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = 100;

  this.sayName = function() {
    console.log(`My ninja name is ${this.name}!`);
  }
  this.showStats = function() {
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
  }
  this.drinkSake = function() {
    this.health += 10;
    return this;
  }
  this.punch = function(ninja) {
    if (ninja instanceof Ninja) {
      ninja.health -= 5;
      console.log(`${ninja.name} was punched by ${this.name} and lost 5 health!`);
    }
    else {
      console.log('You should only punch other ninja!');
    }
  }
  this.kick = function(ninja) {
    if (ninja instanceof Ninja) {
      var damage = 15 * strength;
      ninja.health -= damage;
      console.log(`${ninja.name} was kicked by ${this.name} and lost ${damage}!`);
    }
    else {
      console.log('You should only kick other ninja!');
    }
  }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().showStats();
var ninja2 = new Ninja("Ryu");
ninja1.punch(ninja2);
ninja2.showStats();
ninja2.kick(ninja1);
ninja1.showStats();
var cat = {name: 'Fluffy'}
ninja1.kick(cat)
