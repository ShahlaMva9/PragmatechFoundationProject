let leftBtn = document.getElementsByClassName("leftBtn");
let rightBtn = document.getElementsByClassName("rightBtn");
let sliderBox = document.querySelector(".slider-box");
let slideritems = document.querySelectorAll(".slider-inner");
let sliderWidth = document.querySelector(".slider").clientWidth;

step = 0;

leftBtn[0].addEventListener("click", function () {
  if (step) {
    --step;
    sliderBox.style.transform = `translateX(${-step * 400}px)`;
  } else {
    leftBtn.disabled = true;
  }
});

rightBtn[0].addEventListener("click", function () {
  if (step < slideritems.length - 1) ++step;
  sliderBox.style.transform = `translateX(${-step * 400}px)`;
});
