function percentageOfWorld1(population){
    return ((population/7900)*100).toFixed(2);
}
var a,b,c;
a= percentageOfWorld1(1441);
b=percentageOfWorld1(99);
c=percentageOfWorld1(80);

console.log('a= '+ a+ '%');

console.log('b= '+ b+ '%');

console.log('b= '+ c+ '%');
// bieu thuc ham
var percentageOfWorld2 = function(population2){
    return ((population2/7900)*100).toFixed(2);
};
console.log(percentageOfWorld2(1441));//18.24
console.log(percentageOfWorld2(99));//1.25
console.log(percentageOfWorld2(80));//1.01
console.log(percentageOfWorld2(7900));//100.00
//------------------------------------------------

// lab 4-3
console.log('lab 4-3');
var percentageOfWorld3 =(population3) =>{return ((population3/7900)*100).toFixed(2)};
console.log(percentageOfWorld3(1441));
console.log(percentageOfWorld3(99));
console.log(percentageOfWorld3(80));
