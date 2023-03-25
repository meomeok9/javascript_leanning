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
    }
  };


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    orderDilevery({starterIndex,mainIndex,time,address}){
        console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1,ing2,ing3){
        console.log(`here is some declicious past ta with ${ing1}, ${ing2}, ${ing3}`)
    },
    orderPizza(mainIngredient, ...otherIngredient){
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
    order(starterIndex, mainIndex){
        return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
      }
  };
 if(restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open); // this line return undefined

    //with ogtional chaining

    console.log(restaurant.openingHours.mon?.open);
    console.log(restaurant.openingHours?.mon?.open);

// example

const days =['2','3','4', '5','6','7','sun'];
// object restaurant ,property openingHours
for( const day of days){ 
    const open= restaurant.openingHours[day]?.open ?? 'close'; 
    /* restaurant.openingHours[day]? 
    dung ten bien de lam ten thuoc tinh. su dung dau vuong openingHours[variable]
        => restaurant.openingHours.2?open
           restaurant.openingHours.3?open
           restaurant.openingHours.4?open
           restaurant.openingHours.5?open
           ....
    */
    console.log(`on ${day} , we open at ${open}`);
}


//methods

console.log(restaurant.order?.(0,1) ?? 'methoddoest not exest');
console.log(restaurant.orderRisotto?.(0,1) ?? 'methoddoest not exest');

//aray
const uesr =[
    {name: 'jonas', email: 'jonas123.gmail.com'},
    {name: 'tom', email: 'jonas123.gmail.com'},
    {age: 22, email: 'jonas123.gmail.com'},
]
console.log(uesr[0]?.name ?? 'User array empty');
console.log(uesr[1]?.name ?? 'User array empty');
console.log(uesr[2]?.name ?? 'User array empty');

// loop object
console.log('----------Loop Object -------------');
const properties = Object.keys(openingHours);
console.log(properties);
for(const day of Object.keys(openingHours)){
    console.log(day);
}