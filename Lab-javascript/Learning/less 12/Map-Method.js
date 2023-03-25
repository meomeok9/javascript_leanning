"use strict";
const cl =(obj) => console.log(obj);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const a = movements.map( mov => mov * eurToUsd);
cl(a);
const movementsDesciptions = movements.map((move,index,arr)=>{
    return `You ${move>0 ? `deposited ${index} :${move}` : ` withdrew ${index} ${Math.abs(move)}`}`;
});

cl(movementsDesciptions);