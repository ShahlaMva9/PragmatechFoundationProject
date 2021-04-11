let sideNav = document.getElementById("side-nav");
let closeBtn = document.getElementById("closeBtn");
let aboutMe = document.getElementById("aboutMe");

let myInfo = document.getElementById("myInfo");
// function openNav() {
//   document.getElementById("side-nav").style.width = "96%";
// }
// function closeNav() {
//   document.getElementById("side-nav").style.width = "0%";
//   sideNav.classList.remove("mystyle");
// }
aboutMe.addEventListener("click", function () {
  document.getElementById("side-nav").style.opacity = "1";
  // aboutMe.style.transform = "scale(1.1)";
  sideNav.style.width = "210%";
  sideNav.style.height = "220%";
  sideNav.classList.add("mystyle");
});
// function openNav() {
//   document.getElementById("side-nav").style.opacity = "1";
//   // aboutMe.style.transform = "scale(1.1)";
//   sideNav.style.width = "210%";
//   sideNav.style.height = "220%";
//   sideNav.classList.add("mystyle");
// }
// function closeNav() {
//   document.getElementById("side-nav").style.display = "none";
// }

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "closeBtn") {
    document.getElementById("side-nav").style.opacity = "0";
  }
});

// aboutMe.addEventListener("click", function () {
//   aboutMe.style.width = "700%";
//   // aboutMe.style.height = "200%";
//   // aboutMe.style.transform = "scale(1.1)";
//   // myInfo.style.opacity = "0";
// });

function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
