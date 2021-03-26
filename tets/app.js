function openNav() {
  document.getElementById("side-nav").style.width = "65%";
  //   document.getElementById("side-nav").style.opacity = "1";
  document.getElementById("side-nav").classList.add("mystyle");
}
function closeNav() {
  document.getElementById("side-nav").style.width = "0%";
  //   document.getElementById("side-nav").style.opacity = "0";
  //   document.getElementById("closeBtn").style.z - index = "1";
  document.getElementById("side-nav").classList.remove("mystyle");
}
let a = document.getElementsByClassName("resume-list-item");
a.addEventListener("click", function () {
  console.log("jk");
});
