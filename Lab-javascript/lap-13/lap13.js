"use strict";
const cl = (something) => console.log(something);

// class ES 6

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




// EVCl extends CarCl
class EVCl extends CarCl {
  #charge;
  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    cl(`charge battery up to: ${this.#charge}`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    cl(`${this.name} run ${this.speed}km/h charge :${this.#charge}`);
    return this;
  }
  break() {
    this.speed -= 5;
    cl(` speed down 5km/h: ${this.speed}`);
    return this;
  }
}
const rivian = new EVCl("rivian", 120, 23);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .break()
  .break()
  .chargeBattery(100)
  .accelerate();

cl("⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆  -  EVCL  -  ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆");
//---------------object car -----------------
const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  cl(`${this.name}'s speed is increase ${this.speed} km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  cl(`${this.name}'s speed is decrease ${this.speed} km/h`);
};
//---------------------------------------------
//     create 2 car objects

// const bmv = new Car("BMV", 120);
// const merc = new Car("Mercedes", 95);
// bmv.accelerate();
// bmv.break();
// merc.accelerate();
// merc.break();

//---------------------------------------------------//

// -------------------------object.create-----------------------------

const EV = function (name, speed, charge) {
  Car.call(this, name, speed);
  this.charge = charge;
};
// set: EV object ke thua Car object
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  cl(
    `${this.name}'s speed ⬆⬆ increase ${this.speed} km/h and with a charge ${this.charge}`
  );
};

const tesla = new EV("Tesla", 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.break();

//----------create 2 CarCl for test-------------
const bm = new CarCl("BMW", 120);
const mercd = new CarCl("Mercedes", 95);

bm.accelerate();
bm.brake();
bm.speedUS = 100;
cl(`${bm.speedUS} mile/h`);
cl(`${bm.speed} kmh`);
//--------------------------------------------//
