"use strict";
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },

      order: function(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
      }
    },

    orderDilevery: function({starterIndex,mainIndex,time,address}){
        console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta : function(ing1,ing2,ing3){
        console.log(`here is some declicious past ta with ${ing1}, ${ing2}, ${ing3}`)
    },
    orderPizza : function(mainIngredient, ...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);

    }
  };

  restaurant.orderPizza('mushrooms' ,'onion' , 'olives' ,'spninach');
  restaurant.orderPizza('mushrooms'); // mushroom and empty array
//spred, beacause onright side of =
  const arr =[1,2,...[3,4]];
  //rest because on left side of =
  const [a,b,...others] =[1,2,3,4,5];
console.log(a,b,others);

const [pizza, , risotto333 , ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza,risotto333,otherFood); // pizza , risotto just name of varia

//Object

const {thu, ...weekdays} = restaurant.openingHours;
console.log('------------------------');
console.log(thu);
console.log(weekdays);

// function

const add =function(...numbers){
  
  let sum2 =0;
  numbers.forEach( x => sum2 += x);
  console.log('sum2 :' +sum2);
}
add(2,3);
add(3,4,5,7);
add(1,2,3,2,12);
const x =[ 32, 34, -9];
add(...x);