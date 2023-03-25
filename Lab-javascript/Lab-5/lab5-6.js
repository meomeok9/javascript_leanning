const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
var i,j,k;
for(i=0;i<listOfNeighbours.length;i++){ // chay trong aray tong
    if(listOfNeighbours[i].length!=1){ //check neu aray con co nhieu hon 1 phan tu, neu =1 return ngay
        for(j=0;j<listOfNeighbours[i].length;j++){  //chay trong aray con          
            var nei=''; // chuoi de inra result, xoa neu co san
            nei= `${listOfNeighbours[i][j]} has :`;
            for(k=0; k<listOfNeighbours[i].length; k++){ // voi moi phan tu con trong aray con them vao result, voi dk la ko them chinh no
                if(k!=j){
                    nei+=`${listOfNeighbours[i][k]},`
                }
            }
            nei= nei.slice(0,-1);// xoa dau ',' khi ket thuc ghep chuoi nei
            console.log(nei + ` ${listOfNeighbours[i].length>2 ? 'are': 'is'} neighbour(s)`); //same to the '(s)' at end string
        }
    }else {
        console.log(listOfNeighbours[i][0]+" has no neighbour!");
    }
}
