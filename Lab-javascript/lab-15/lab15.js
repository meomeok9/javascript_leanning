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
createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-3.jpg");
  })

  .catch((err) => ce(`Something worng! ${err.message}`));
