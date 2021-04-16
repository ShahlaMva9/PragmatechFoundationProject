//  gedilen yolu hesablama
// function findX(t = 1, V = 1) {
//   let S;
//   S = t * V;
//   console.log(S);
// }
// findX(5, 20);
// findX(7, 20);
// findX((V = 9));
// findX(12, 15, 20);

// // cevrenin uzunlugunu ve sahesini hesablamaq
// let p = 3.14;
// let r = prompt("Çevrənin radisunu daxil edin ");
// function length(r) {
//   l = 2 * p * r;
//   alert("Dairenin uzunlugu :" + l);
// }
// length(r);
// function area(r) {
//   s = p * r * r;
//   alert("Dairenin sahesi :" + s);
// }
// area(r);
// // Imtahandan keçib keçmədiyini yoxlamaq
// let imtBalı, girişBalı, minSum;
// // 2 ededi toplama funksiyasi
// function sum(x, y) {
//   minSum = Number(x) + Number(y);
//   if (minSum >= 51) {
//     alert("Siz imtahandan kecdiz");
//   } else {
//     alert("imtahandan kesildiz");
//   }
// }

// function getGirişBalı() {
//   girişBalı = prompt("Giriş balını daxil edin");
//   if (!/^[0-9]+$/.test(girişBalı)) {
//     getGirişBalı();
//   }
// }

// function getImtBalı() {
//   imtBalı = prompt("İmtahan balını daxil edin");
//   if (!/^[0-9]+$/.test(imtBalı)) {
//     getImtBalı();
//   }
// }

// function checkAndSum() {
//   getGirişBalı();
//   getImtBalı();
//   sum(girişBalı, imtBalı);
//   if (minSum < 51) {
//     const answer = prompt("Bir daha cehd etmek istrdiz?");
//     if (answer === "yes") {
//       checkAndSum();
//     }
//   }
// }

// checkAndSum();
// const numbers = [1, 2, 3];

// function multiSum(...arg) {
//   console.log("args", arg);
// }

// multiSum(numbers);

// multiSum().sumBir();

// // 3 reqem yazib menfi musbet oludugun mueyyenlesdirmek
// let num01 = 3;
// let num02 = -7;
// let num03 = 5;

// if (num01 >= 0 && num02 > 0 && num03 > 0) {
//   console.log("Rəqəmlər müsbətdir");
// }
// 1;

// let kullanici = {};

// kullanici.isim = "Mazlum";
// kullanici.soyisim = "Mulaim";

// kullanici.isim = "Kemal";
// delete kullanici.isim;
// console.log(kullanici);
// // 2
// function bosMu(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let program = {};
// console.log(program.ad === undefined);
// console.log("isim" in program);
// console.log(program);
// // 3
// const user = {
//   isim: "Mazlum",
// };
// user.isim = "Mahmut";
// console.log(user);
// // 4

// function toplama(object) {
//   let sum = 0;

//   for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//       const element = object[key];
//       if (typeof element === "number") {
//         sum += element;
//       }
//     }
//   }

//   return sum;
// }

// let maaslar = {
//   Ahmet: 100,
//   Ali: 160,
//   Mazlum: 130,
// };

// const top12 = toplama(maaslar);

// console.log("top12", top12);
// for (let key in maaslar) {
//   // console.log(maaslar[key]);
//   toplam += maaslar[key];
// }
// console.log(toplam);
// // 5
// let menu = {
//   en: 200,
//   boy: 300,
//   baslik: "Menü",
// };
// function ikiIleCarp(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }
// ikiIleCarp(menu);

// console.log(menu);

// console.log(document.getElementsByClassName)

// let num = prompt("100 den boyuk reqem yazin ");
// function check() {
//   if (num > 100 || num == "") {
//     console.log(true);
//   } else if (num < 100) {
//     num = prompt("zehmet olmas 100 den boyuk reqem yazin ");
//     check();
//   }
// }
// check();
// let i;
// function fnWithIf() {
//   if (i < 5) {
//     console.log("if i", i);
//     i++;
//     console.log(i);
//     fnWithIf();
//   }
// }
// fnWithIf();

// carName = "Volvo";
// console.log(carName);
// var str = "Please locate where 'locate' occurs!";
// var pos = str.search(/p/i);
// console.log(pos);

// let a = 1;
// function numbers() {
//   console.log(a);
//   a++;
//   if (a < 10) {
//     numbers();
//   }
// }
// numbers();

// // Object Practice
// let user = {
//   name: "Shehla",
//   age: 21,
//   "Sur name": "Maharramova",
//   test: undefined,
// };

// // for in
// for (key in user) {
//   //   console.log("user key ", user[key]);
//   console.log("key ", key);
// }

// let codes = {
//   49: "Almanya",
//   41: "İsveç",
//   44: "İngiltere",
//   // ..,
//   1: "Amerika Birleşik Devletleri",
// };
// console.log(codes);
// for (key in codes) {
//   console.log(key);
// }
// console.log(user.size == undefined);
// console.log("color" in user);
// console.log("find test", user.test === undefined);
// console.log("find test in", "test" in user);
// // delete user.age;
// delete user["Sur name"];
// console.log(user["name"]);
// console.log(user);

// let kullanici = {
//   isim: "Mahsun",
//   yas: 30,
// };

// // let anahtar = prompt("Kullanıcı hakkında ne bilmek istiyorsun?", "yas");

// // değişkene göre değer alınır.
// // alert(kullanici[anahtar]); // Mahsun (eğer "isim" girerse )

// const something = {
//   name: "Memmed",
// };

// const admin = something;
// admin.name = "Shehla";
// console.log(something);
// console.log(admin);

// let f = {
//   sayHi: function () {
//     console.log("Hi");
//   },
// };
// let g = {
//   isim: "Gunay",
//   sayhi() {
//     console.log(this.isim);
//   },
// };
// f.sayHi();
// g.sayhi();

// // String Metodlri

// text = "Javasript Angular JS PHP JS";
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(text.charAt(0));
// console.log(text.search("JS"));
// console.log(text.indexOf("JS", 21));
// console.log(text.slice(5, 21));
// console.log(text.substr(10, 5));
// // console.log(text.replace("JS", "CSS"));
// console.log(text.replace(/JS/g, "CSS"));
// text2 = "text2";
// console.log(text.concat(text2));
// console.log(typeof console.log);

// let html = document.documentElement;
// console.log(html);
// let body = document.body;
// console.log(body);
// let head = document.head;
// console.log(head);

// // let pareantNode = document.getElementsByClassName("pareantNode");
// let child1 = document.getElementsByClassName("child-1");
// console.log(child1);
// let findParent = child1.parentNode;
// console.log(findParent);

// console.log(document.URL);
// console.log(document.dir);

// document.title = "Javascript praktikalar";
// console.log(document.title);
// console.log(document.links);
// let myElement = document.querySelector("#myHeader");
// let navLink = document.querySelector("body > h4:nth-child(6)");
// let item = document.querySelectorAll(".item");
// // myElement.removeAttribute("id");
// myElement.setAttribute("id", "New id");
// // myElement.classList.add("class");
// myElement.hasAttribute("id");
// // myElement.classList.remove("class");
// myElement.classList.toggle("hidden");
// console.log(myElement);
// // for (let i = 0; i < h4.length; i++) {
// //   console.log(h4[i]);
// // }
// // body > h4:nth-child(6)

// window.onload = function () {
//   let beforeButton = document.querySelector("#beforeButton");
//   beforeButton[0].addEventListener("click", function () {
//     let newNode = document.createElement("p");
//     newNode.innerHTML = `<strong>New paragraph element </strong>`;
//     newNode.setAttribute("id", "myNode");
//   });
// };

// let parentelem = document.getElementsByClassName("parentelem");
// console.log(parentelem);
// parentelem.removeChild(child);
// console.log(parentelem);

let clickMe = document.getElementById("clickMe");
let bgColor = ["red", "yellow", "green", "grey", "blue", "orange", "purple"];
let container = document.getElementsByClassName("container");
let i = 0;
container[0].style.backgroundColor = `${bgColor[0]}`;
clickMe.addEventListener("click", function () {
  i++;
  container[0].style.backgroundColor = `${bgColor[i]}`;
  if (i == bgColor.length) {
    i = 0;
    i++;
  }
});
