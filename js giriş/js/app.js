// let a, b, c;
a = prompt("Birinci ədədi daxil edin");

if (!/^[0-9]+$/.test(a)) {
  prompt("Zəhmət olmasa rəqəm daxil edin");
}

b = prompt("İkinci ədədi daxil edin");
if (!/^[0-9]+$/.test(b)) {
  prompt("Zəhmət olmasa rəqəm daxil edin");
}
c = Number(a) + Number(b);

console.log(c);
// Alqoritm
// 1.a b ve c deyerlirini elave edirik
// 2.a dəyirini daxil edirik
// 3 a deyerini reqem olubolmadigini yoxluyuruq
// 4 a reqem deyilse yeniden sorgu gonderirirk
// 5.b dəyirini daxil edirik
// 6 b deyerini reqem olubolmadigini yoxluyuruq
// 7 b reqem deyilse yeniden sorgu gonderirirk
// 8 a ve b ededlerin topluyuruq
