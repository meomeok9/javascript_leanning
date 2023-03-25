let contry="";
let isIsland = false;
let population="";
let language="";

function setInfor(){
    let pif = document.getElementById("valEnter");
    pif.innerHTML ='';
    pif.innerHTML = `Info : ${contry} ${language} ${population} ${isIsland}`;
}
function setContry(){
    contry = prompt('Enter Contry: ', "Moon :)");
    setInfor();
}
function setIsIsland(){
    let valueEnter =prompt('Is that contry is Island ?', "True");
    if(valueEnter.toLowerCase()=='true' || valueEnter.toLowerCase() =='yes')
        isIsland = true;
    else if(valueEnter.toLowerCase()=='fasle' || valueEnter.toLowerCase()=='no')
        isIsland = false;
        setInfor();
}
function setPopulation(){
    population = prompt('Enter population(million): ', 0);
    setInfor();
}
function setlanguage(){
    language = prompt('Enter language: ', "vietnamese");
    setInfor();
}

function checkSarahCondition(){
    if(contry.toLowerCase() =='canada'){
        console.log('Canada is special !');
    }
    else if(isIsland==false && parseInt(population) < 50 && language.toLowerCase() =='english'){
        console.log('Sarah, You should live in ' + contry);
    }
    else console.log(contry + " does not meet your criteria :(");
}
