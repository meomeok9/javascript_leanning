"use strict";
const cl = (somthing) => console.log(somthing);

//1. Bổ sung Animation cho Sidebar
const animationForSideBar = function () {
  const nav = document.getElementById("sidebar");
  const content = document.getElementById("content");

  const sideBarClick = function (e) {
    if (e.target.tagName !== "A") {
      nav.classList.toggle("active");
      nav.classList.toggle("deActive");
    }
  };

  const contentClickOut = function (e) {
    if (nav.classList.contains("deActive")) {
      nav.classList.toggle("active");
      nav.classList.toggle("deActive");
    }
  };

  nav.addEventListener("click", sideBarClick);
  content.addEventListener("click", contentClickOut);
};

animationForSideBar();

//----------------end---------------
