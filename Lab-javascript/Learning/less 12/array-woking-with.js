'use strict';
const cl =(obj) => console.log(obj);

/*
let arr = ['a','b','c','d','e','f'];

cl(arr.slice(2,));
cl(arr.slice(2,4));
cl(arr.slice(-1));
cl(arr.slice(1,-2))
cl(arr.slice());

//splice change object that call it
//cl(arr.splice(2)); // = [3,4,5] new array. return arr [1,2]
//arr.splice(-1);// delete last in array
//arr.splice(1,2); cl(arr); //[0,3,4,5] delete at [1] and 2 member
// reverse
const arr2= [0,1,2,3,4];

cl(arr2.reverse()); cl(arr2);

// concat
const letter = arr.concat(arr2);
cl(letter);
cl([...arr,...arr2]);

//join
cl(letter.join('-'));
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//forEach loop
cl('--------------For of arr -------------');
for( const [key, value] of movements.entries()){
    if(value>0){
        cl(`you deposited ${key} :${value}`);
    }else cl(`you withdrew ${key} ${Math.abs(value)}`);
}

cl('--------------- for each --------------');
movements.forEach(function(move, index, arr){
    cl(arr);
    if(move>0){
        cl(`you deposited ${index} :${move}`);
    }else cl(`you withdrew ${index} ${Math.abs(move)}`);
})

// for each with maps and sets!!

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  
  currencies.forEach(function(value ,key , maps){
     cl(`${key} : ${value}`);
  });

  const currenciesUniqe = new Set (['USD', 'GBP','USD' ,'EUR', 'ERU' ,'VND']);
  cl(currenciesUniqe);


  currenciesUniqe.forEach(function(value, _ ,sets){
    cl(`${value} : ${value}`);
  })

