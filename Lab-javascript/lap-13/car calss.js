const cl = (something) => console.log(something);
class CarCl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(_speed) {
    this.speed = _speed * 1.6;
  }
}

CarCl.prototype.accelerate = function () {
  this.speed += 10;
  cl(`${this.name}'s speed ⬆⬆ increase ${this.speed} km/h`);
};
CarCl.prototype.brake = function () {
  this.speed -= 5;
  cl(`${this.name}'s speed ⬇⬇ decrease ${this.speed} km/h`);
};

class EV extends CarCl {
  #change;
  constructor(name, speed, charge) {
    super(name, speed);
    this.#change = charge;
  }

  chargeBattery(chargeTo) {
    this.#change = chargeTo;
    cl(`charge to ${this.#change}`);
    return this; // for channing method
  }

  accelerate() {
    this.speed += 20;
    cl(`Speed up ${this.speed}`);
    return this;
  }
  brake() {
    this.speed -= 10;
    cl(`Speed down ${this.speed}`);
    return this;
  }
}
const carrrr = new EV('mes',190,60);

carrrr.accelerate().accelerate().brake().chargeBattery(100).accelerate();