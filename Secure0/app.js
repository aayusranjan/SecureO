

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    // comsole.log(links.classlist);
    //console.log(links.classList.contains("random"));
    //console.log(links.classList.contains("links"));
    //if(links.classList.contians("show-links")){
       // links.classList.add("show-links");
    //} else {
    //    links.classList.add("show-links");
    //}
    links.classList.toggle("show-links");
});
//sticky navbar
window.onscroll = function() {myfunction()};

var navCentre = document.getElementsByClassName("nav-center");

var sticky = navCentre.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navCentre.classList.add("sticky")
  } else {
    navCentre.classList.remove("sticky");
  }
}