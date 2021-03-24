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
