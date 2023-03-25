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

const menu =[...restaurant.starterMenu, ...restaurant.mainMenu];

for (const items of menu) console.log(items);

for (const item of menu.entries()){ // each item in entries() [] is an aray: item = [lengh , value]
    console.log(`${item[0]+1} :${item[1]}`);
}
//other way
for(const [i, vl] of menu.entries()){
    console.log(`${i+1} : ${vl}`);
}

//
