"use strict";
const cl = function(obj){console.log(obj)}

const SB = function(){ //sb = securebooking
    let pasCout =0;
    let i ='WHY only once console.log call ????????';
    cl(i);
    return function(){
        pasCout++;
        cl(`${pasCout} passengers`)
    }
};

const booker = SB();
//booker = function =>> booker's value is store in HEAP memory.
// in call stack only store key to map to value in heap!!!

booker();
booker();
booker();
console.dir(booker);

let f;
const g = function(){
    const a = 23;
    f=function(){
        cl(a*2);
    }
};

const h = function(){
    const b = 777;
    f=function(){
        cl(b*2);
    }
};

g();
f();console.dir(f);
h();
f();
console.dir(f);

cl('------------------------ 2 !----------------------');

const boarPass = function(n, wait){
    const perGruop =n/3; // comment this with || store in heap mean differncence out sight
    setTimeout(function(){
        cl(`We are now bourding all ${n} passengers!`);
        cl(`there are 3 gruops, each with ${perGruop} passenger`);
    }, 1000);

    cl(`Will strar boarding in ${wait} seconds!`);
}
const perGruop =1000; // this run // store in call stack

boarPass(180,3);