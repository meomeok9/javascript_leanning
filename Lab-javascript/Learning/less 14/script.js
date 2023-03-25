"use strict";
const cl = (something) => console.log(something);
//------------- this is Person object ---------------//
const Person = function (
  firstName,
  birthYear // khong the viet hamkhoi tao object voi ham arrow vif hamf arrow khong co this
) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  /*  never do this make slow with more object Person call
    this.calcAge = function(){return 2037-this.birthYear};
  */
};
// write out of constructor
Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};
Person.prototype.species = "Homo Sapiens";
//----------------- end Person object ----------------//

const jonas = new Person("Jonas", 1991);
const matida = new Person("Matida", 2017);
const jack = new Person("Jack", 1975);
cl(jonas);
//1. new empty object created
//2.function is called, this keyword : this ={}
//3.{} linked to prototype
//4.Function automatticcall return {}

//-------------------prototypes--------------------------//

cl(Person.prototype);
Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

cl(jonas.calcAge());
cl(jonas.__proto__);
cl(jonas.__proto__ === Person.prototype); // true
cl(jonas.species); //'Homo Sapiens'
//check own property
cl(jonas.hasOwnProperty("firstName")); // true
cl(jonas.hasOwnProperty("species")); //false

//------------------Prototypel inherirance--------------------------

cl(jonas.__proto__.__proto__); // object prototype
cl(Person.prototype.constructor);

const arr = [1, 3, 4, 6, 7, 2, 1, 5, 3];
cl(arr.__proto__);
cl(arr.__proto__ === Array.prototype); // true
cl(arr.__proto__.__proto__);

//set Array prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};
cl(arr.unique());
//-------------------------------------------------

//------------------ es6 class ------------------
// class expresstion
//const PersonClass = class{};
//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

PersonCl.prototype.greet = function () {
  cl(`Hi I am ${this.firstName}`);
};

const jessica = new PersonCl("Jessica", 1996);
jessica.greet();

//-------------------------------------------------

//getter setter

const account = {
  owner: "jonas",
  movements: [200, 540, 12000, 400, -2000],

  get lastes() {
    return this.movements.slice(-1).pop();
  },

  set lastes(mov) {
    this.movements.push(mov);
  },
};

class Human {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }
}
const js = new Human("Jessica", 1996);
cl(js.age);

cl(account.lastes);

account.lastes = 50;

// static methods --> static key word
//-------------------------------------------------------
// Object . create

const PersonProto = {
  calcDead() {
    cl(2037 - this.deadhYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
cl(steven);
steven.ass = "Steven";
steven.deadhYear = 2000;
steven.calcDead();

//ke thua giua class constructor function
// class Person
// class student is child of person class

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear; repace code NOT inderitace
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  cl(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
cl(mike.calcAge());

// ke thua class trong ES6

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
}

const martha = new StudentCl(" Marthar Jones", 2012, "teacher Computer");

//--------------------------------------------------------------------//

//----------------------------ke thua trong object.create-------------

/* ----------copy from top to see esyse-----------
const PersonProto = {
  calcDead() {
    cl(2037 - this.deadhYear);
  },
  init(firstName ,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};
const steven = Object.create(PersonProto);
*/

const StutdentProto = Object.create(PersonProto);
StutdentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StutdentProto);
jay.init("jay", 2020, "it");
jay.calcDead();
//

class account1 {
  local = navigator.language;
  #movement =[];
  #pin;
  constructor(owner, currency, pin){
    this.owner = owner;
    this. currency = currency;
    this.#pin = pin;
  }
  getMoverment(){
    return this.#movement;
  }

};
cl()