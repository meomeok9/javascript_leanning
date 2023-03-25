const populations = [1441,99,335,38];
console.log(populations);
const percentages = [];
// from lab 4-4
function percentageOfWorld1(pop){
    return ((pop/7900)*100).toFixed(2);
}

for(i=0; i<populations.length; i++){
    percentages[i] = percentageOfWorld1(populations[i]);
    console.log(`Population :${populations[i]}, percentage :${percentages[i]}`);
}
console.log(percentages);

