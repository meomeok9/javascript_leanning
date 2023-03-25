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

  const properties = Object.keys(openingHours);
  console.log(properties);


for(const day of Object.keys(openingHours)){
  console.log(day);
}


//property values

const values = Object.values(openingHours);
console.log(values);


//entries object
const entries = Object.entries(openingHours);
console.log(entries);



for(const [key,{open,close} ] of entries){

  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
