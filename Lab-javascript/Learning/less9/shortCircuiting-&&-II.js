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
    orderPizza : function(...Ingredients){
        console.log('here is some declicious past ta with :' +Ingredients);

    }
  };
console.log('----------------------OR--------------');
  console.log(3 || 'jonas');
  console.log( '' ||'jonas');
  console.log(true || 0);
  console.log(undefined || null);

  console.log(undefined || 0 || ''|| 'helo' || 23 || null);

  const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; //10
  //console.log(guest1);
  restaurant.numGuests = 23;
  const guestt = restaurant.numGuests ? restaurant.numGuests : 10;//23
  console.log("? : " + restaurant.numGuests);


  console.log('------------------AND--------------');
  console.log( 0 && 'jonas');
  console.log( 7 && ' ');
  console.log( 'Hello' && 'jonas' && null && 23); // null

  if(restaurant.orderPizza){
    restaurant.orderPizza('mushroom' , 'spinach');
  }
restaurant.orderPizza && restaurant.orderPizza('1234423', '123133');

console.log('-----------------null value -------------');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);


// Nullish operator ?? : null and undifined ( NOT 0 and '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log(' ------------------- Logiccal assignment operators -----------');

const rest1 ={
    //name: 'capri',
    numguests : 0,
};

const rest2 ={
    name: 'capri',
    owner :'Giovani hoan',
};

const rest3 ={
    name: 'capri',
    numguests : 20,
};

//rest1.numGuests = rest1.numguests || 10;
//rest2.numGuests = rest2.numguests || 10;
// 
// a = a+10; => a+=10
//rest1.numguests ||= 10;
//rest2.numguests ||= 10;
// || va ?? giong nhau, ?? nhan 0 va '', || thi ko
rest1.numguests ??= 10;
rest2.numguests ??= 10;

//rest2.owner = rest2.owner && '<ANONYMUOS>';
//rest1.owner = rest1.owner || '<ANONYMUOS>';

rest1.owner ||= '<ANONYMUOS>';
rest2.owner &&= '<ANONYMUOS>';

console.log(rest1);
console.log(rest2);
