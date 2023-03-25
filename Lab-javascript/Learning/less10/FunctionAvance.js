"use strict";
const cl = function(obj){console.log(obj);}

const oneWord = function(str =''){
    return str.replace(/ /g ,'').toLowerCase();
}

const uperFirstWord =function( str =''){
    const [first, ...others] = str.split(' ');
    
    return [first.toLocaleUpperCase(), ...others].join(' ');
};
// heigher order function
const transformer = function(str ='', fcnName){
    cl(`Original String : ${str}`);
    cl(`transformerd string: ${fcnName(str)} `);
    cl(`Transformed by: ${fcnName.name}`);
}

transformer('java is the best!', uperFirstWord);

const hight5 = function(){
    cl('🖐👋');
};

//document.body.addEventListener('click',hight5);


//['123','aabc','!@#','-]][.','helo'].forEach(hight5);

//function return funct=ion

const greet = function(greeting){
    return function(name){
        cl(`${greeting} ${name}`);
    }
}

const say = greet('hey');
say('Jonas');
say('me');

greet('Hello')('Jonas');

const greet2 = greeting=> name2 => cl(`${greeting} ${name2}`);
greet2('hey')('Jonas');

console.clear();

cl('--------------------------------------')
const lufthansa ={
    airline:' Lufthasa',
    iataCode :'LH',
    bookings:[],

    book(flightNum ,customer){
        cl(`${customer} booked a seat on ${this.airline} flight code: ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
             customer
            });
    }
}


const euroWings ={
    airline:'EuroWings',
    iataCode : 'EW',
    bookings: [],
};

const book = lufthansa.book; // main call

//book(23,'Rarah willliams'); //error this return undifined
const swiss ={
    airline :' Swiss Airline',
    iataCode: 'LX',
    bookings:[]
};

const flightData =[1233, 'Ogge king'];

lufthansa.book(239,'jonas schmedtmann');

book.call(euroWings , 23 ,'sarua william'); //cl( euroWings);

book.call(lufthansa, 239 , 'Mary posible'); //cl(lufthansa);

book.call(swiss, 431 ,'sfs sfes swr');

//book.apply(swiss, flightData);---->
book.call(swiss, ...flightData);
const bookEW = book.bind(euroWings);  // vay muon ob ject cua thang khac thanh cua minh
const bookLH =book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'BOM THAI HOC');

const bookWE23 = book.bind(euroWings ,23); // set book( 23, undifined)

bookWE23('bom');
bookWE23('thai hoc');

//with addEventListener
console.clear();

 lufthansa.planes = 300;
 cl(`Planes :${lufthansa.planes}`);

 lufthansa.buyPlane = function(){
    //alert('here in sight');
    document.querySelector('.label').textContent ='Plane ' + lufthansa.planes;
    document.body.style.backgroundColor ='black';
    document.body.style.color ='white';
    cl(this);  // cl= console.log
    this.planes++;
    cl(this.planes); // cl= console.log
 }

 document.getElementById('buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

 //partial allplication

 const addTax= (rate, value)=>value + value *rate;

 cl(addTax(0.1, 200));
 const addVAT =addTax.bind(null, 0.23); // <=> addVAT = value =>value + value *0.23;

 cl(addVAT(200));

 const addTaxRare =function(rate){
    return function (value){
        return value+value*rate;
    }
 }
 var addvat2 = addTaxRare(0.23);
 cl(addvat2(100));
 cl(addvat2(200));

 //bieu thuc ham thuc hien ngay Immediately Invoked Function Expressions ( IIFE )
 
(function(){cl("<-----?------>")})();

((str) => cl('This is ' + str))('string!!!');

