"use strict";
//same lab 4-2
function percentageOfWorld1(population){
    return ((population/7900)*100).toFixed(2);
}
function describePopulation(country,population){
    return `${country} has ${population} million people, witch is about ${percentageOfWorld1(population)} of the world!`
}
console.log(describePopulation('chinese',1441));
console.log(describePopulation('vietnam',99));
console.log(describePopulation('usa',335));