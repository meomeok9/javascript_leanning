//lab 2.1
console.log('lab2.1');
const contry='vietnam';
const continent='asia';
var popultion = 97;
var isIsland = false;
var langage ='';
console.log(contry +"-"+continent+"-"+popultion+" millions");
console.log(isIsland? " is island" : " not island but has island")

////////////////////////////////////////////////////////////////////////////

//lab 2.2
console.log('lab2.2');
langage='vietnamese';
console.log('language: '+ langage);
//lab 2.3
console.log('lab2.3');
console.log("half of population: " + popultion/2);
console.log("population add 1: " + (parseInt(popultion) + 1));
console.log("vietnam's population is: "+popultion +" millions ,finland's population is: 6 millions");
var finlandpopulation= 6;
console.log(popultion>finlandpopulation ? "Vietnam more":"finland more");
var avenpopulation = 33;
console.log("avange population is "+avenpopulation+" millions");
console.log(popultion>avenpopulation? "Viet nam more than avenge":"avange is more than vietnam");
var description = contry +" and its " +popultion + " million people speak "+ langage +".";
console.log(description);

//lab 2.4
console.log('lab2.4');
var description2 =`${contry} and its ${popultion} million people speak ${langage}`;
console.log(description2);

//lab 2.5
console.log('lab2.5');
if(popultion>33){
    console.log(`${contry}'s population is above average`);
}else{
    console.log(`${contry}'s population is${33-popultion} million below average`);
}
    //thu giam population
    console.log('try change population to 13');
    popultion =13;
    if(popultion>33){
        console.log(`${contry}'s population is above average`);
    }else{
        console.log(`${contry}'s population is ${33-popultion} million below average`);
    }
    console.log('try change population to 130');
    popultion =130;
    if(popultion>33){
        console.log(`${contry}'s population is above average`);
    }else{
        console.log(`${contry}'s population is ${33-popultion} million below average`);
    }