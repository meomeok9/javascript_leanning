"use strict";

function calcAge(birthYear){
    const age = 2037 - birthYear;

    function printAge(){
        let output =`you are ${firstName} , born in ${birthYear}`;
        console.log(output);
        if(birthYear>= 1981 && birthYear<=1996){
            var millenial = true;
            const firstName = 'Steven'; // var away is fumction scope
            const str =  `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
            function add(a,b){
            return a + b;
            }

            const output ='NEW OUTPUT!'; // will not affect out sight if block scope
        }
        console.log(millenial); //milenial is in block scope but can call our sight block becase it declare by 'var' 
        console.log(output);
        //console.log( add(2,3)); // cant work with "use strict"
        
        
    }
    printAge();
    return age;
}
const firstName = 'Jonas';
calcAge(1991);

//variable
console.log(me);
//console.log(job);
//console.log(year);

var me  = 'Jonas';
let job = 'teacher';
const year ='1991';

console.log(addDecl(2,3));
//console.log(addExpr(2,3));
//console.log(addArrow(2,3));

function addDecl(a,b){
    return a + b;
}
var addExpr = function(a,b){
    return a+b;
}
const addArrow = (a,b) =>a+b; 

//example

if(!numproducts) deleteShoppingCart();
    console.log(numproducts);
var numproducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}

var x =1;
let y= 2;
const z =3;

console.log(x===window.x);
console.log(y===window.y);
console.log(z===window.z);
