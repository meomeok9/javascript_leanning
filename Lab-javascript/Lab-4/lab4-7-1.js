const calcAverage = (a1,a2,a3) =>{return (a1+a2+a3)/3};

function checkWinner(ad,ak){ // ad = average dolphins, ak = average koalas
    if(ad>=ak*2){
        console.log(`Dolphins win (${ad} vs. ${ak})`);
    }else if(ak>=ad*2){
        console.log(`Koalas win (${ak} vs. ${ad})`);
    }else console.log('both lose');
}

var avgDolphins = calcAverage(44,23,71);
var avgKoalas = calcAverage(65,54,49);
console.log(`Dolphins : 44 23 71, aver:${avgDolphins}. Koalas : 65 54 49, aver:${avgKoalas}`);
checkWinner(avgDolphins,avgKoalas);
var avgDolphins = calcAverage(85, 54,  41);
var avgKoalas = calcAverage(23, 34,  27);
console.log(`Dolphins : 85, 54 và 41, aver:${avgDolphins}. Koalas : 23, 34 và 27, aver: ${avgKoalas}`);
checkWinner(avgDolphins,avgKoalas);