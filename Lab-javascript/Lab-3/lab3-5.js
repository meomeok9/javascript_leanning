function checkAvg(){
    var ppl= prompt("Population ?", 1);
    var pp= document.getElementById("para");
    ppl > 33 ? pp.innerHTML=`${ppl} Portugal's population is above average` //console.log(something)
             : pp.innerHTML=`${ppl} Portugal's population is below average`;//console.log(some NOthing)
}