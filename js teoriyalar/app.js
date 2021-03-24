// // array

// let names = ["Shahla", "Leman", "Mehriban", "Naile"];
// console.log(names);
// console.log(names[3][2]);
// names[6] = "Samir";
// console.log(names);

// // array sonuna elave edir
// names.push("Leyla");
// console.log(names);

// // əvvələ əlavə edir
// names.unshift("Aydan");
// console.log(names);

// // sonuncunu silir
// names.pop();
// console.log(names);

// // birincini silir
// names.shift();
// console.log(names);

// // indexof elemntin sirasini gosterir
// console.log(names.indexOf("Shahla"));

// // array uzunlugu
// console.log(names.length);

// // While
let x = 1;
// while (x < 10) {
//   console.log(x);
//   x++;
// }
// // //do while

// do {
//   console.log(x);
//   x++;
// } while (x < 11);

// // for

// for (x; x < 12; x++) {
//   console.log(x);
// }
//break;

for (x; x < 13; x++) {
  if (x == 5) {
    break;
  }

  console.log(x);
}
// continue

for (x; x < 13; x++) {
  if (x == 5) {
    continue;
  }

  console.log(x);
}
