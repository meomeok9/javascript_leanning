var language;

function clickLang(){
    language = prompt('Language ?','Chinese').toLowerCase();
    var para= document.getElementById("lang");
    switch(language){
        case "chinese" || "mandarin": 
        console.log("MOST number of native speakers!");
        para.innerHTML =`${language} !MOST number of native speakers!`;
        break;
        case "spanish": 
        console.log("2nd place in number of native speakers");
        para.innerHTML =`${language} !2nd place in number of native speakers`;
        break;
        case "english": 
        console.log( '3rd place');
        para.innerHTML =`${language} !3rd place`;
        break;
        case "hindu" : 
        console.log('Number 4');
        para.innerHTML =`${language} !Number 4`;
        break;
        case "arabic": 
        console.log('5th most spoken language');
        para.innerHTML =`${language} !5th most spoken language`;
        break;
        default: {
        console.log( 'Great language too :D');
        para.innerHTML =`${language} !Great language too :D`;
        }
    }
}