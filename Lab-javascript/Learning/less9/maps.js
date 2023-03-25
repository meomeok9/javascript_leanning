
"use strict";

const cl = function(obj){ console.log(obj);} 
const weekdays =['2','3','4', '5','6','7','sun'];

// out sight
const openingHours = {
[weekdays[3]]: {
  open: 12,
  close: 22,
},
[weekdays[4]]: {
  open: 11,
  close: 23,
},
[weekdays[5]]: {
  open: 0, // Open 24 hours
  close: 12+12,
},
};


const restaurant = {
name: 'Classico Italiano',
location: 'Via Angelo Tavanti 23, Firenze, Italy',
categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//old
//openingHours : openingHours,
//es6 enchence object literals
openingHours,

//old
/*orderDilevery: function({starterIndex,mainIndex,time,address}){
    console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
},*/
//es6 remove :function key word
orderDilevery({starterIndex,mainIndex,time,address}){
    console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
},
//same
orderPasta(ing1,ing2,ing3){
    console.log(`here is some declicious past ta with ${ing1}, ${ing2}, ${ing3}`)
},
orderPizza(mainIngredient, ...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);

},


order : function(starterIndex, mainIndex){
  return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
}
};


const rest = new Map();
rest.set('name' ,'clasico italiano');
rest.set(1,'FIreze , Italy');
rest.set(2,'Lisbon, Portugal'); // this method return map that call :return rest;
console.log(rest.set(3,'None, Nowhere'));

rest.set('Categories' ,
['Italian', 'Pizzeria',
 'Vegetarian', 'Organic'
])
.set('open', 11)
.set('close',23)
.set(true,'We are open !')
.set(false,'We are closed !');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('Categories'));

const time = 8;
console.log(rest.get((time >rest.get('open')) && time <rest.get('close')));

console.log(rest.has('Categories'));
//rest.clear();
rest.delete(2);
const arr = [1,2];// khai bao object trong heap 
rest.set(arr ,'test');

rest.set(document.querySelector('h1') ,'headding');
console.log(rest);

console.log(rest.size);

cl(rest.get(arr));
/////////////////////////////////////

cl('---------------------------------------');

const question = new Map([
['question',' What is the 🐷🐖?'],
[1,'C'],
[2,'Java'],
[3,'Java Script'],
['Correct',3],
[true,'Correct 🎉'],
[false,'Try again 🤦‍♂️']
]);

cl(question);

// convert object to maps
cl(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
cl(hoursMap);

cl(question.get("question"));
for(const [key ,value] of question){
    if(typeof key === 'number') cl(`answer ${key} : ${value}`);
}

//const answer = Number(prompt('answer :' ,1));
//cl(question.get(answer===question.get('Correct')));

// conver maps to array
cl(question);
cl([...question]);
cl([...question.keys()]);
cl([...question.values()]);

