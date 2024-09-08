// 1. Define the Car constructor function with 'make' and 'speed' properties
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// 2. Implement the 'accelerate' method to increase speed by 10
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// 3. Implement the 'brake' method to decrease speed by 5
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is now going at ${this.speed} km/h`);
};

// 4. Create two Car objects and experiment with 'accelerate' and 'brake'
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Test car 1
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();

// Test car 2
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();
