"use strict";
const cl = function(obj){ console.log(obj);} 

const airline ='TAP Air Portugal';
const plane = 'A320';
cl(plane[0]);
cl(plane[1]);
cl('B7b7[0] : '+'B737'[0]);

cl(airline.length);
cl('b737'.length);

cl(airline.indexOf('r'));
cl(airline.lastIndexOf('r'));
cl(airline.indexOf('Portugal'));
cl(airline.slice(4));
cl(airline.slice(4,7));
//fist word
cl(airline.slice(0,airline.indexOf(' ')));
//last word
cl(airline.slice(airline.lastIndexOf(' ') +1));

cl(airline.slice(-2,));
cl(airline.slice(1,-1));
cl(airline.slice(-2,));

const checkMiddelSeat = function(seat){
    // b and e is middle seats
    const s =seat.slice(-1);
    if(s === 'B' || s==='E') cl('you good');
    else cl(' you not good');

}

checkMiddelSeat('11B');
checkMiddelSeat('23C');
checkMiddelSeat('3E');

cl(airline.toLowerCase());
cl(airline.toUpperCase());

//fix capitalization ia name

const passenger = 'jOnAS';

const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
cl(passengerCorrect);
// comparing, check email

 const email ='hello@jonas.io';
 const loginEmail = ' Hello@Jonas.Io';

  //const lowerEmail = loginEmail.toLowerCase();

  //const trimmedEmail = lowerEmail.trim();
  //cl(trimmedEmail);

  const nomailizesEmail =loginEmail.toLowerCase().trim();
  //cl(nomailizesEmail);
cl(email === nomailizesEmail);

// replaceing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$','VND').replace(',' ,' nghin le ');
cl(priceUS);

const announcement ='All passengers come to barding door 23. Bourding door 23!';

cl(announcement.replace('door' ,'🚪'));
cl(announcement.replace(/door/g, '🚪'));
// this code no automatic gen : replaceALL() but still word
cl(announcement.replaceAll('door' ,'gate'));
cl('hom nay la hom qua'.replaceAll('hom' ,'🚗'));


//booleans
const plane2 = 'Airbus A320neo';
cl('--- Include ---');
cl(plane2.includes('A320'));
cl(plane2.includes('Boing'));
cl(plane2.startsWith('Air'));

if(plane2.startsWith('Airbus')&& plane2.endsWith('neo')) cl('true');

//pritice

const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')) cl('GO HOME!');
    else cl('WELCOME TO FLY!');
}

checkBaggage(' i have a laptop, some foof and pocket Knife');
checkBaggage('Socks and camera');
checkBaggage(' Got some snack and a gun for protection');

cl('a+very+nice+singer'.split('+'));
const [firstName, lastName] = 'Jonas chmedtMann'.split(' ');
const myName = ['Mr.',firstName , lastName.toUpperCase()].join(' ');
cl(myName);

const capitalizeName = function(name){
    const names = name.split(' ');
    const nameUper =[];
    for ( const n of names){
       nameUper.push(n.replace( n[0],n[0].toUpperCase()));
       n
    }
    cl(nameUper.join(' '));
}

capitalizeName('Jessica ann smith david');
capitalizeName('jonas schmedtmann');


//padding
const message ='go to gate 23!';

cl(message.padStart(25,"-").padEnd(40,'+'));
cl('Jonas'.padStart(25,"-"));

const maskCreditCard = function(nber){
    const str = nber +'';
    const last = str.slice(-4);
    cl( last.padStart(str.length,'*'));
}

maskCreditCard('1233 3213 441 1121');
maskCreditCard(45342342342424233);

// repeat

const message2 = 'Bad weather... all Departues Deleyed...';
cl(message2.repeat(5));

const planInline = function(n){
    cl(`theere are ${n} planes in line ${'✈'.repeat(n)}`);
}
planInline(5);
planInline(22);
planInline(15);

//
/* */
cl('------------------String methods Practice-------------------');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


  //cl(flights.split('+'));

const getCode= str=>str.slice(0,3).toUpperCase();

for( const flight of flights.split('+')){
    const [type, from ,to ,time] = flight.split(';');
    let isDeley , newType, newFrom, newTo, newTime;
    isDeley = type.startsWith('_Delayed') ? '⛔' : '';
    newType =type.replaceAll('_',' ');
    newFrom =getCode(from);
    newTo = getCode(to);
    newTime =time.replace(':','h');
    const output =`${isDeley}${newType} ${newFrom} ${newTo} ${newTime}`.padStart(35,' ');
    
    cl(output);
}

