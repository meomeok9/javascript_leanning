"use strict";
const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
const tips = [];
const totals= [];
const calcTip = (bill) =>{return (bill >=50 && bill <=300) ? bill*0.15 : bill*0.2};
for (var i=0; i<bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i]) + bills[i]);
    console.log(`${i+1}.Bill :${bills[i]}, tip :${tips[i]} then total is ${totals[i]}`);
}
//bonus viet ham calcAverage nhan aray lam doi so, su dung for
var sumBill =0;
bills.forEach((bill)=>{sumBill+= bill;}); //co for nha!!!!!!
var aver= sumBill/bills.length;
console.log('sum :'+ sumBill+' average :' + aver);
//-------------------------again----------
var sumBill2 =0;
function calcAverage(arr){
    for(var i =0; i<arr.length ; i++){
        sumBill2 += arr[i];
    }
    var aver2 = sumBill2/arr.length;
    console.log(`Sum bills are: ${sumBill2}, average is :${aver2}`);
}
calcAverage(bills);
console.log('use func for totals');
calcAverage(totals);
