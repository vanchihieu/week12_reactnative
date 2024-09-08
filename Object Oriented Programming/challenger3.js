// Car constructor function
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// EV constructor function, inheriting from Car
function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

// Inherit Car's prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// Implement chargeBattery method
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} battery charged to ${this.charge}%`);
};

// Override accelerate method to include charge decrease
EV.prototype.accelerate = function () {
  if (this.charge > 0) {
    this.speed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  } else {
    console.log(`${this.make} cannot accelerate, battery is dead.`);
  }
};

// Create an electric car object
const tesla = new EV("Tesla", 120, 23);

// Experiment with methods
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
