// gedilen yolu hesablama
// function findX(t = 1, V = 1) {
//   let S;
//   S = t * V;
//   console.log(S);
// }
// findX(5, 20);
// findX(7, 20);
// findX((V = 9));
// findX(12, 15, 20);

// cevrenin uzunlugunu ve sahesini hesablamaq
let p = 3.14;
let r = prompt("Çevrənin radisunu daxil edin ");
function length(r) {
  l = 2 * p * r;
  alert("Dairenin uzunlugu :" + l);
}
length(r);
function area(r) {
  s = p * r * r;
  alert("Dairenin sahesi :" + s);
}
area(r);
// Imtahandan keçib keçmədiyini yoxlamaq
let imtBalı, girişBalı, minSum;
// 2 ededi toplama funksiyasi
function sum(x, y) {
  minSum = Number(x) + Number(y);
  if (minSum >= 51) {
    alert("Siz imtahandan kecdiz");
  } else {
    alert("imtahandan kesildiz");
  }
}

function getGirişBalı() {
  girişBalı = prompt("Giriş balını daxil edin");
  if (!/^[0-9]+$/.test(girişBalı)) {
    getGirişBalı();
  }
}

function getImtBalı() {
  imtBalı = prompt("İmtahan balını daxil edin");
  if (!/^[0-9]+$/.test(imtBalı)) {
    getImtBalı();
  }
}

function checkAndSum() {
  getGirişBalı();
  getImtBalı();
  sum(girişBalı, imtBalı);
  if (minSum < 51) {
    const answer = prompt("Bir daha cehd etmek istrdiz?");
    if (answer === "yes") {
      checkAndSum();
    }
  }
}

checkAndSum();
const numbers = [1, 2, 3];

function multiSum(...arg) {
  console.log("args", arg);
}

multiSum(numbers);

multiSum().sumBir();
