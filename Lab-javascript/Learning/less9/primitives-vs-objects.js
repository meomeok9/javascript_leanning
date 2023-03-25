"use strict";
/* primitives các giá trị nguyên thuỷ :
    -Number
    -string
    -boolean
    -undefined
    -null
    -symbol bieu tuong
    -bigInt
    luu trong call stax
    trong call stack khi gán giá trị nguyen thuỷ = 1 giá trị thì tạo ra 1 địa chỉ + value của giá trị mới
*/

/* Object :
    -object literal
    -arrays
    -function
    -many more 
    luu trong heap
    trong heap khi gán 1 object = 1 giá trị thì luu trong heap và chỉ trả về địa chỉ của nó
        các object cùng trỏ về 1 địa chỉ vd : friend = me; là cùng trỏ về 1 địa chỉ!!!!
            nên khi gán friend.age= 27 thì chỉ có giá trị age trong heap thay đổi.
            friend and me vẫn trỏ về 1 giá trị age = 27.
*/
let age = 30;
let oldAge = age;
oldAge = 44;
age = 31;
console.log(age);
console.log(oldAge);

const me ={
    name : 'Jonas',
    age : 30,
};
const friend = me;
friend.age = 27;
 console.log('friend :', friend); //jonas 27
 console.log('me :', me);   // jonas 27 

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName ='David';
console.log(`last name :${lastName}. Old last Name: ${oldLastName}`);
//reference types
const jessica ={
    fistName :'jessica',
    lastName: 'williams',
    age: 27
};
const marriedJessica = jessica;
jessica.lastName = 'David';
console.log('Before mariage: ${jessica}' , jessica),
console.log('After marriage :${marriedJessica}' ,marriedJessica);

//marriedJessica = {};

//coping objects
const jessica2 ={
    fistName :'jessica',
    lastName: 'williams',
    age: 27,
    family:['alice','bob']
};

const jessicaCopy= Object.assign({},jessica2); // cach khai bao 1 object moi. giong object jessica 2
jessicaCopy.lastName ='David';
console.log('Before mariage: ${jessica}' , jessica2),
console.log('After marriage :${marriedJessica}' ,jessicaCopy);
jessicaCopy.family.push('mary');
jessicaCopy.family.push('John');
console.log('----------------------------------');
console.log('Before mariage: ${jessica}' , jessica2);
console.log('After marriage :${marriedJessica}' ,jessicaCopy);