"use strict";
console.log(this);



const calcAge = function(birthYear){
    console.log(2037 -birthYear);
    console.log(this);
};
calcAge(1991);

const calcAgeArr = birthYear =>{
    console.log(2037 -birthYear);
    console.log(this);
};
calcAgeArr(1980);

//var firstName='matilna';

const jonas = {
    firstName : 'Jonas',
    year : 1991,
    /*
        calcAge: function(){
        console.log(this);
        console.log(2037- this.year);
        const self = this;
        const isMillenia = function(){
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMillenia();
    },
    
    */
    calcAge: function(){
        console.log(this);
        console.log(2037- this.year);
        const isMillenia = ()=>{
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenia();
    },
    greet : function(){  // greet :()=> return window object of this key word
        console.log(`jonas.greet(): Hey ${this.firstName}`);
        console.log(this);
    },
}


jonas.greet();
console.log(this.firstName);
jonas.calcAge();

//jonas.calcAge();

/*const matilda ={
    year: 2017,
};
matilda.calcAge = jonas.calcAge;  //khai bao phương thức calcAge của matilda = jonas's. mượn phương thức
matilda.calcAge();

const f = jonas.calcAge;
/*   f(); // error beacuse not has year on f.*/
const addExpr2 = function (a,b){
    console.log(arguments);
    return a+b;
};
addExpr2(2,5);
addExpr2(2, 5, 5, 12);

var addArrow = (a,b) =>{
    console.log(arguments);
    return a+b; 
} 
addArrow (2, 5 ,8); /// return error.

