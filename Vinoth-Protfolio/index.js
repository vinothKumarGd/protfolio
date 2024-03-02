// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let Amazonwork = document.querySelector("#Amazonwork");
let GraphicDesign = document.querySelector("#GraphicDesign");
let FigmaDesign = document.querySelector("#FigmaDesign");
let offlineSales = document.querySelector("#offlineSales");
let Photography = document.querySelector("#Photography");
let NPD = document.querySelector("#NPD");


Amazonwork.onclick = function(){
    window.open("https://github.com/vinothKumarGd/AmazonWork","_target");
}
  GraphicDesign.onclick = function(){
    window.open("https://github.com/vinothKumarGd/Website","_target");
  }
  FigmaDesign.onclick = function(){
    window.open("https://www.figma.com/file/OotCN0uRe18CWIL2fryJsP/Untitled?type=design&node-id=1%3A2&mode=design&t=rgLzF5RTTjOvRqQf-1","_target");
  }
  offlineSales.onclick = function(){
    window.open("https://github.com/vinothKumarGd/Website/tree/main/offline","_target");
  }
  Photography.onclick = function(){
    window.open("https://github.com/vinothKumarGd/Website/tree/main/photo","_target");
  }
  NPD.onclick = function(){
    window.open("https://github.com/vinothKumarGd/Website/tree/main/npd","_target");
  }

menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}