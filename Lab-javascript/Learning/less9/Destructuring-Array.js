"use strict"


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(sraterIndex , mainIndex){
        return [this.starterMenu[sraterIndex], this.mainMenu[mainIndex]]
    }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y , z] = arr; //desucturing technic
console.log(x,y,z);
console.log(arr);
let [main, , secondary] = restaurant.categories;
console.log(main , secondary);

/*const temp = main;
main = secondary;
secondary = temp;
*/
console.log(main,secondary);
[main, secondary] = [secondary,main]; // swich position of 2 items in array
console.log(main,secondary);
//receive 2 retturn from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter , mainCourse);
const nested =[2,3,[5,6]];
//const [i, ,j] = nested;
//console.log(i,j);
const [i, , [j,k]] = nested;
console.log(i,j,k);

//const [p,q,r] =[8,9]; r is undefined
const [p = 1 , q =1, r =1] =[2,9];
console.log( p,q,r);
console.log('-------------------------------');

