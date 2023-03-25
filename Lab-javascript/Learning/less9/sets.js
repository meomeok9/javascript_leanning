
// sets : la 1 tập hợp của các giá trị duy nhât

"use strict";

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

const ordersSet = new Set([
    'obb',
    'ygg',
    'att',
    'enn',
    'itt',
    'acc',
    'ebb',
    //copy
    'obb',
    'ygg',
    'att',
    'enn',
    'itt',
    'acc',
    'ebb'
]);
console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(ordersSet.size);

console.log(ordersSet.has('asdfasdf'));
console.log(ordersSet.has('att'));

ordersSet.add('emm');
console.log(ordersSet);
ordersSet.delete('acc');

//ordersSet.clear(); xoa set
console.log(ordersSet);
// lap
for(const order of ordersSet){ console.log(order)};

//example
const staff =['Waiter','Chief','Waiter','Manager','Chief','Waiter'];


//const staffUnique = new Set(staff); //return a set
const staffUnique = [...new Set(staff)]; // return a array
console.log(staffUnique);

console.log(new Set(staff).size);