// ham tinh bill 15% voi bill trong khoang 50~300, 20% voi bill ngoai khoang
const calcTip = (bill) =>{return (bill >=50 && bill <=300) ? bill*0.15 : bill*0.2};
console.log('bill 100$ tip:'+calcTip(100));// check ham bill 100
const bills =[125,555,44];
const tips =[calcTip(125),calcTip(555),calcTip(44)];
const totals =[125+calcTip(125),555+calcTip(555),44+calcTip(44)];
console.log(bills);
console.log(tips);
console.log(totals);
