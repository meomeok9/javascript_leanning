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
  };

  restaurant.orderDilevery({
    time: '22:30',
    address: 'via del sole,21',
    mainIndex: 2,
    starterIndex:2,
  });
//destructuring objec
const { name, openingHours , categories} = restaurant;
console.log( name ,openingHours ,categories);
console.log('----------------------');
const {
    name: restaurantName,
     openingHours: hours,
      categories: tags,
    }= restaurant;


console.log(restaurantName,hours,tags);


const{
    menu =[],
    starterMenu : starters =[]
}= restaurant;

console.log(menu , starters);

// mutating vảiables

let a= 111; let b = 999;
const obj ={a:23,b:7,c:14};

({a,b} = obj);
console.log(a,b);

// nested object

const {fri:{open :o, close :c}} =openingHours;
console.log(o , c);
