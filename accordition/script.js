let title = document.querySelectorAll(".title");
let text = document.querySelectorAll(".text");
let accorditionItem = document.querySelectorAll(".accordition-item");
//accordition
for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function () {
    let text = this.nextElementSibling;
    closeAccord(this.parentNode);
    if (text.style.display == "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  });
}

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

function closeAccord(clicket) {
  accorditionItem.forEach((item) => {
    if (clicket !== item) {
      item.childNodes[3].style.display = "none";
    }
  });
}
