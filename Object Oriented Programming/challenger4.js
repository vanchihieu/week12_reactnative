// using ES6 classes create a Car class that has the following properties and methods:
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return this;
  }

  brake() {
    this.speed -= 5;
    return this;
  }
}

// Implement an Electric Car class that inherits from the Car class.
class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  get charge() {
    return this.#charge;
  }

  set charge(newCharge) {
    this.#charge = newCharge;
  }

  // Override the accelerate method to include charge decrease
  accelerate() {
    if (this.#charge > 0) {
      super.accelerate();
      this.#charge -= 1;
      console.log(
        `${this.make} going at ${this.speed} km/h, with a charge of ${
          this.#charge
        }%`
      );
    } else {
      console.log(`${this.make} cannot accelerate, battery is dead.`);
    }
    return this;
  }

  // Implement chargeBattery method
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.#charge}%`);
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);

rivian.accelerate().accelerate().chargeBattery(90).brake().accelerate();
