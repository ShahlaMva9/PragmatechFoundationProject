// // gedilen yolu hesablama
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


let num = prompt("100 den boyuk reqem yazin ");
function check() {
  if (num > 100 || num == "") {
    console.log(true);
  } else if (num < 100) {
    num = prompt("zehmet olmas 100 den boyuk reqem yazin ");
    check();

  }
}
check();

function fnWithIf() {
  if (i < 5) {
  432 console.log("if i", i);
    i++;
    console.log(i);
    fnWithIf();
  }
}
fnWithIf();

let numbers=2
for (numbers<=10;numbers++){
  if(numbers/)
}