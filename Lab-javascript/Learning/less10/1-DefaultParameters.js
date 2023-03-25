"use strict";
const cl = function(obj){console.log(obj)}

const bookings =[];
const createBooking = function( // ES6 'defaut=' co the la 1 bieu thuc phuc tap
    fliNum,
    numPass =1,
    price =199 + (numPass*numPass/2-4)*0 ){

    /*numPass= numPass ?? 1;
    price = price ?? 199;             ES5*/
    const booking ={
        fliNum,
        numPass,
        price,
    }
    cl(booking);
    bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123',2,900);
createBooking('LH123',undefined,900); // undefined => =defaul => =1 this case!
///// value and reference, reference thuc chat la 1 value tro den object trong heap
const flight ='LHF234';
const jonas ={
    name: 'Jonas SchmedtMann',
    passport: 2345565213,
}

const checking = function(flightNum, passenger){

    flightNum = 'LH999';
    passenger.name ='mr. ' + passenger.name;
    if(passenger.passport === 2345565213){
       cl('check in ✔');
    }else cl('Wrong ❌');
    
}

//checking(flight,jonas);

cl(flight);
cl(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*10000000);
}

newPassport(jonas);

checking(flight,jonas);


