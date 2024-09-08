class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is now going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is now going at ${this.speed} km/h`);
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(newSpeedUS) {
      this.speed = newSpeedUS * 1.6;
    }
  }
  
  const car = new CarCl('Ford', 120);
  
  console.log(`Current speed in mi/h: ${car.speedUS}`);
  
  car.accelerate();
  console.log(`Current speed in mi/h: ${car.speedUS}`);
  
  car.speedUS = 60;
  console.log(`Current speed in km/h: ${car.speed}`);