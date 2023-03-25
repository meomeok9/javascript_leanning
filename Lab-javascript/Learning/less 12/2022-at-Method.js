"use strict";
const cl =(obj)=>console.log(obj);


const arr =[12,11,453];
cl(arr[0]);
cl(arr.at(1));

cl(arr[arr.length-1]);
cl(arr.slice(-1)[0])

//new at method
cl(arr.at(-1));
cl(arr.at(-2));
