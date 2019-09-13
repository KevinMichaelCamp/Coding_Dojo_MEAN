"use strict";
class Bike {
    constructor(price, max_speed, miles) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
        this.displayInfo = () => {
            console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
            return this;
        };
        this.ride = () => {
            console.log('Riding...');
            this.miles += 10;
            return this;
        };
        this.reverse = () => {
            if (this.miles >= 5) {
                console.log("Reversing...");
                this.miles -= 5;
                return this;
            }
            else {
                console.log("Cannot reverse, 0 miles");
                return this;
            }
        };
        this.miles = 0;
    }
}
let bike1 = new Bike(200, "25mph");
let bike2 = new Bike(250, "30mph");
let bike3 = new Bike(500, "40mph");
bike1.displayInfo();
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();
