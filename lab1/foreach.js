// const rollNum = "967583538";
// const digit = String(rollNum).split("");
// const words = [
//   "Zero", "One", "Two", "Three", "Four",
//   "Five", "Six", "Seven", "Eight", "Nine"
// ];
// // console.log(digit);
// let inWord="";
// digit.forEach((d) => {
//     inWord+=" "+toWords(Number(d));
// //   console.log(toWords(Number(d)));
// console.log(inWord);
// });
const rollNum = "967583538";
const digit = String(rollNum).split("");

function toWords(num) {
  const words = [
    "Zero", "One", "Two", "Three", "Four",
    "Five", "Six", "Seven", "Eight", "Nine"
  ];
  return words[num];
}

let inWord = "";

digit.forEach((d) => {
  inWord += " " + toWords(Number(d));
});

console.log(inWord);
