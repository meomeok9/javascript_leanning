"use strict";
const arr = [7,8,9];

const badArr=[1,2,arr[0] ,arr[1], arr[2]];
console.log(badArr);
// other way better
const newArr = [1,2, ...arr]; // toan tu spread
console.log(newArr);
console.log(...newArr);

// copy from destructuring object.js
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
    }

  };
/////////////////////////////////////////////
const newMenu = [...restaurant.mainMenu ,'Gnocci'];
console.log(newMenu);
// copy array
const mainMenuCopy =[...restaurant.mainMenu ];
//jion 2 array
const menu =[...restaurant.mainMenu, ...arr];
console.log(menu);

//Iterables : lặp lại aray, string, map , sets, NOT object
const str = 'Jonas';
const leters = [...str , ' ' ,'S'];
console.log(leters);
//console.log(`${...srt} kdjf`); // error

/*const ingredients =[ 
    prompt('Let\' make pasta!Ingridient 1?'),
    prompt('Let\' make pasta!Ingridient 2?'),
    prompt('Let\' make pasta!Ingridient 3?')];

    restaurant.orderPasta(...ingredients);
*/
// spred on object

const newRestaurant = {foundedIn :1998 ,...restaurant , founder:'Guiseppe'};
console.log(newRestaurant);
// create new object = other object
const newRestaur = {...restaurant};
newRestaur.name='JoOOOOOOOOOOOOOg';
console.log(restaurant.name); // clasico italiano
console.log(newRestaur.name); // JoOOOOOOOOOOOOg

