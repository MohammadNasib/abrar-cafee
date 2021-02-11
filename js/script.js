// --- variable declation --

var navList = document.getElementById("nav-list");
var nVar = document.getElementById("navbar");
var fSection = document.getElementById("first-section");
var icon = document.getElementById("icon");
var body = document.getElementById("body");
var check = navList.classList.contains("open");

// --- funtion and other parts ---

// --- navlist open function 

function openFunction() {
  navList.classList.toggle("open");
  body.classList.toggle("bg");
}

// --- var changing function

function changeFunction(x) {
  x.classList.toggle("change");
}

// --- scrolling function

window.onscroll = function () {
  scrollfunction1();
};

function scrollfunction1() {
  if (document.body.scrollTop > 57 || document.documentElement.scrollTop > 57) {
    nVar.style.background = "rgba(10, 10, 10, 0.57)";
    navList.style.background = "rgba(10, 10, 10, 0.57)";
  } else {
    nVar.style.background = "transparent";
    navList.style.background = "transparent";
  }
}




// easiest way with jquery

// $(document).ready(function () {
//   $("#icon").click(() => {
//     $(".nav-list").toggleClass("open");
//     $(".first").toggleClass("bg");
//   });
// });
