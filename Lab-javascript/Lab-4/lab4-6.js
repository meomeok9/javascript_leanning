var neighbours =['Moon','Sun','Heaven','Sweden'];
neighbours.push('Utopia');// add
console.log(`add utopia to neighbours array`);
console.log(neighbours);
var uto = neighbours.pop();// xoa 1 phan tu cuoi tra ve phan tu day ra
console.log(`${uto} is no more neighbour`);
console.log(neighbours);
// check germany in neighbours array
console.log(neighbours.indexOf('Germany')>=0 ? 'has Germany' : 'Probably not a central European country :D');
//
console.log('change sweden');
var x = neighbours.indexOf('Sweden');
neighbours[x]='Republic of Sweden';
console.log(neighbours);