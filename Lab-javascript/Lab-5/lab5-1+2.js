"use strict";
const myCountry ={
    contry: '',
    capital: '',
    language: '',
    population: 0,
    neightbours: 0
};
//Finland has 6 million finnish-speaking people,
// 3 neighbouring countries and a capital called Helsinki
const setContry = (con,cap,lan,pop,nei)=>{
    myCountry.contry = con;
    myCountry.capital = cap;
    myCountry.language = lan;
    myCountry.population = parseInt(pop);
    myCountry.neightbours = parseInt(nei);
};
setContry('Finland','Helsinki','finnish','6','3');
console.log(myCountry);
console.log(`${myCountry.contry} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neightbours} neighbouring countries and a capital called ${myCountry.capital}.`);
console.log('insert 2million people population');
myCountry.population +=2;
console.log(myCountry.population +' million people.');
console.log('Reduce 2 milion people population');
myCountry['population']-=2;
console.log(myCountry.population +' million people.');
