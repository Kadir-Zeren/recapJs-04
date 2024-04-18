// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("BYE");

let not = prompt("Lutfen 0-100 arasinda bir not giriniz:");

// if (not < 0 || not > 100) {
//   console.log("Not 0'dan kucuk veya 100'den buyuk olamaz");
// }

while (not < 0 || not > 100) {
  console.log("Not 0'dan kucuk veya 100'den buyuk olamaz");
  not = prompt("Lutfen 0-100 arasindaki bir not giriniz:");
}

console.log("Notunuz:", not);
