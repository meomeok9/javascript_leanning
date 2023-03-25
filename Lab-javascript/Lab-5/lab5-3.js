"use strict";

const myCountry ={
    contry: 'vietnam',
    capital: 'hanoi',
    language: 'vietnamese',
    population: 99,
    neightbours: 3,
    describe: function() {console.log(`${this.contry} has ${this.population} million ${this.language}-speaking people, ${this.neightbours} neighbouring countries and a capital called ${this.capital}`);}
    // khai bao bang ham mui ten: => thi this tro ra window ???
};

const setContry = (con,cap,lan,pop,nei)=>{
    myCountry.contry = con;
    myCountry.capital = cap;
    myCountry.language = lan;
    myCountry.population = parseInt(pop);
    myCountry.neightbours = parseInt(nei);
};
setContry('Finland','Helsinki','finnish',6,3); 
console.log(myCountry);
myCountry.describe();
