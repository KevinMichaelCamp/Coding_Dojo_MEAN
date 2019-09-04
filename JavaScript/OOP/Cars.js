// ES5
function Car(color, model) {
  this.model = model;
  this.color = color;
  this.damage = 0;

  this.showInfo = function() {
    console.log("Model: " + this.model + ", Color: " + this.color + ", Damage: " + this.damage + ".");
  }

  this.bump = function(car){
    this.damage += 10;
    car.damage += 15;
    return this;
  }
}




// ES6
// class Car {
//   constructor(color, model) {
//     this.model = model;
//     this.color = color;
//     this.damage = 0;
//   }
//
//   showInfo() {
//     console.log(`Model: ${this.model}, Color: ${this.color}, Damage: ${this.damage}`);
//   }
//
//   bump(car) {
//     this.damage += 10;
//     car.damage += 15;
//     return this
//   }
// }

var car1 = new Car("blue", "Chevy");
var car2 = new Car("silver", "Honda");
car1.showInfo();

car1.bump(car2).showInfo();
car2.showInfo()
