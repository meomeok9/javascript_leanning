function percentageOfWorld1(population){
    return ((population/7900)*100).toFixed(2);
}
const populations = [1441,355,99,65];
const percentages2 = [];
for(var i = 0;i< populations.length ;i++){
    percentages2[i] = percentageOfWorld1(populations[i]);
}
console.log(percentages2);
console.log('lam thu coong');
console.log(`percent of 1441: ${percentageOfWorld1(1441)}`);
console.log(`percent of 355: ${percentageOfWorld1(355)}`);
console.log(`percent of 99: ${percentageOfWorld1(99)}`);
console.log(`percent of 65: ${percentageOfWorld1(65)}`);
