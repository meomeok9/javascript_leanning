"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: 'USD',
  locale: 'en-US',
  currency: "USD",
  locale: "en-US",
};


//---------------------------------- NUMBER -----------------

const cl = obj=> console.log(obj);

cl(23===23.0);

cl(Number('23'));
cl(+23);

//parsing

cl(Number.parseInt('30px',2));
cl(Number.parseInt('30px',10));
cl(Number.parseInt('e30px',10));
cl('----------------');
cl((Number.parseInt('  2.5rem  ')));
cl((Number.parseFloat('  2.5rem   ')));
cl('------------NaN--------')
//// is NaN check is NaN
cl( Number.isNaN(20));
cl( Number.isNaN('20'));
cl( Number.isNaN(+'20X'));
cl( Number.isNaN(+20/0));

// checking number with isFinite

cl(Number.isFinite(20));
cl(Number.isFinite('20'));
cl(Number.isFinite(+'20X'));
cl(Number.isFinite(20/0));
cl('----------INTERGER------------');


cl(Number.isInteger(23));
cl(Number.isInteger('23'));
cl(Number.isInteger(+'23x'));


//Math and Rounding
console.clear();
cl(Math.sqrt(25));
cl(25**(1/2));
cl(8**(1/3));
cl(Math.max(5,12,16,22,1,2));
cl(Math.max(5,12,'16px',22,1,2));
cl(Math.max(5,12,16,'22',1,2));

cl(Math.PI*Number.parseFloat('10px')**2);

cl(Math.random()*6);

cl('--------max-min------------');
const randomInt = (min,max) => Math.floor(Math.random() * (max-min) +1) + min;

cl(randomInt(10 ,20));


// rouding interger
cl(Math.trunc(23.3));

cl(Math.trunc(-23.2));


// rounding decimal
cl((2.7).toFixed(0));
cl((2.7).toFixed(3));
cl(+(2.7).toFixed(3));

//remider operator phan con lai cua 1 phep chia
cl('-----------toan tu remider %  ---------')
cl(5%2);


// Numeric Separators
console.clear();
const deameter = 287460000000;
cl(deameter);
const price = 345_99;
cl(price);
cl(Number('230000'));
cl(Number('230_000'));// NaN

//big Int

cl(3820374298374982374298342n);
cl(10000n+10000n);

// date 4 cach create

const now = new Date();
cl(now);
cl(new Date('Sun Oct 02 2022 11:17:53'));
cl(new Date('Oct 24 2012'));


cl(new Date(account1.movementsDates[0]));
cl(new Date(2037 , 10 , 19, 15 ,23 ,5));
cl(new Date(2037 , 10 , 31, 15 ,23 ,5));
cl(new Date(0));

cl(new Date(3*24*60*60*1000));

//working with date
console.clear();
const future = new Date(2037 , 10 , 19, 15 ,23);
cl(future);
cl(future.getFullYear());
cl(future.getMonth());
cl(future.getDay()); // day of week == thusday == 4
cl(future.getDate());
cl(future.getHours());
cl(future.getSeconds());
cl(future.toISOString());

cl(future.getTime());
cl(new Date(2142231780000));

cl(Date.now()); // return mili second from to 1970 until now
cl(new Date(Date.now()));

cl(+future);
const CalsDaysPassed = (date1,date2) =>Math.abs((date2 - date1)/(1000*60*60*24));

const day1 = CalsDaysPassed(new Date(2037 , 3 , 14), new Date(2037 , 3 , 4));
console.clear();
cl(day1);

const now2 = new Date();
const options ={
  hour:'numeric',
  minute:'numeric',
  day:'numeric',
  month:'long',
  year:'numeric',
  weekday:'long'
};




// local

const loc = navigator.language;
cl(loc);
const text= new Intl.DateTimeFormat(loc,options).format(now2);
cl(text);

// Internationalizing Number
const num = 3884764.23;

const option2 ={
  style :'currency',
  unit:'celsius',
  currency:'EUR',
  //useGruoping: false,
};

cl( new Intl.NumberFormat('us-US',option2).format(num));
cl( new Intl.NumberFormat('ar-SY',option2).format(num));

cl( new Intl.NumberFormat('de-DE',option2).format(num));
cl( new Intl.NumberFormat(navigator.language,option2).format(num)) ;
console.clear();
// timer set time out and set Interval
// time out call back function

const ingredients =['olives', 'spinach']


const pizzaTimer = setTimeout((ing1, ing2) =>
cl(`here is your pizza🍕🍕 whit ${ing1} and ${ing2}`),3000, ...ingredients);

if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// set Interval lap lai thoi gian sau moi 1 khoang thoi gian

// setInterval(() => {
//   const now = new Date();
//   cl(`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`);
// }, 2000);

// implementing a countdown timer


