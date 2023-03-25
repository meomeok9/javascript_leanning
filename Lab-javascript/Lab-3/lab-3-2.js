let numNeighbours;

function nbcontries(){
    numNeighbours = prompt('How many neighbor countries does your country have?', "0");
    if(numNeighbours==1){
        console.log('Only 1 border!');
    }else if(numNeighbours>1){
        console.log('neighbor countries are: '+ numNeighbours);
        console.log('More than 1 border');
    }else{
        console.log('No borders!');
    }
}
function nbcontries2(){
    numNeighbours = prompt('How many neighbor countries does your country have?', "0");
    if(numNeighbours===1){
        console.log('Only 1 border!');
    }else if(numNeighbours>1){
        console.log('neighbor countries are: '+ numNeighbours);
        console.log('More than 1 border');
    }else{
        console.log('No borders!');
    }
}
function nbcontries3(){
    numNeighbours = prompt('How many neighbor countries does your country have?', "0");
    if(parseInt(numNeighbours)===1){
        console.log('Only 1 border!');
    }else if(numNeighbours>1){
        console.log('neighbor countries are: '+ numNeighbours);
        console.log('More than 1 border');
    }else{
        console.log('No borders!');
    }
}
