function percentageOfWorld1(population){
    return ((population/7900)*100).toFixed(2);
}
const populations = [1441,355,99,65];
const percentages3 = [];
var i=0;
while(i<populations.length){
    percentages3[i]=percentageOfWorld1(populations[i]);
    i++;
}
console.log(percentages3);