"use strict";

const cl = (something) => console.log(something);
const ce = (something) => console.error(something);
const imgContainner = document.querySelector(".images");

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  let html = "";
  return new Promise(function (resolve, reject) {
    html = document.createElement("img");
    html.src = imgPath;
    html.addEventListener("load", function (e) {
      imgContainner.insertAdjacentElement("beforeend", html);
      resolve(html);
    });
    html.addEventListener("error", function (e) {
      reject(new Error("Can not found img!"));
    });
  });
};

let currentImg;
// createImage("img/img-1.jpg")
//     .then((img) =>{
//         currentImg = img;
//         return wait(2);
//     })
//     .then(()=>{
//         currentImg.style.display = 'none';
//         return createImage('img/img-2.jpg');
//     })
//     .then(img=>{
//         currentImg = img;
//         return wait(2);
//     })
//     .then(()=>{
//         currentImg.style.display = 'none';
//         return createImage('img/img-3.jpg');
//     })

    // .catch((err) => ce(`Something worng! ${err.message}`));


//////////lab 15-2
// string path like img/img-${number}.jpg then we  use this number to loop, number :1~4
const loadNPause = async function(numbers){
  try{
    for(let i = 1; i<= numbers;i++){
      const img = await createImage(`img/img-${i}.jpg`);
      //cl(`img/img-${i}.jpg`);
      currentImg = img;
      currentImg.style.display = 'block'; 
      await wait(2) ;
      currentImg.style.display = 'none';
    }
  }catch(err){
    ce(err.message);
  }
};
//loadNPause(4);// 5 error if i >= 5

//------------------------------------------------------------------
const lab15_2_2= function(){
  const imgArr =['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
  const imgs =  imgArr.map(async img =>{
    const res = await createImage(img);
    res.classList.add('parallel');
  })
  cl(imgs);
}
lab15_2_2()