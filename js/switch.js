//Інструкція switch.Область видимості

//switch (одна умова декілька варіантів значень)

// switch (умова) {
//     case "значення 1":
//         інструкція для виконання 1;
//         break;//щоб не виконувались всі варіанти, пишемо break - стоп
//     case "значення 2":
//         інструкція для виконання 2;
//         break;
//     case "значення 3":
//         інструкція для виконання 3;
//         break;
//     case "значення 4":
//         інструкція для виконання 4;
//         break;
//     case "значення 5":
//         інструкція для виконання 5;
//         break;
//     case "значення 6":
//         інструкція для виконання 6;
//         break;
//     default:
//         інструкція, яка виконується у разі, коли НІ одне
//         значення не відповідає умові
// }

// 1* - 20$,
// 2* - 30$,
// 3* - 50$,
// 4* - 70$,
// 5* - 120$

// const stars = Number(prompt("enter amount of stars of tour hotel"));
// // // const stars = 1;
// let price;

// if (stars === 1) {
//     price = 20;
//     alert(`Your price is ${price}`);
// } else if (stars === 2) {
//     price = 30;
//     alert(`Your price is ${price}`);
// } else if (stars === 3) {
//     price = 50;
//     alert(`Your price is ${price}`);
// } else if (stars === 4) {
//     price = 70;
//     alert(`Your price is ${price}`);
// } else if (stars === 5) {
//     price = 120;
//     alert(`Your price is ${price}`);
// } else {
//     alert("Enter amount of stars correctly!");
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     alert(`Your price is ${price}`);
//     break;
//   case 2:
//     price = 30;
//     alert(`Your price is ${price}`);
//     break;
//   case 3:
//     price = 50;
//     alert(`Your price is ${price}`);
//     break;
//   case 4:
//     price = 80;
//     alert(`Your price is ${price}`);
//     break;
//   case 5:
//     price = 120;
//     alert(`Your price is ${price}`);
//     break;
//   default:
//     alert("Enter amount of stars correctly!");
// }

//1,2 - 20$
//3,4 - 40$
//5 - 100$

// if (stars === 1 || stars === 2) {
//   price = 20;
//   alert(`Your price is ${price}`);
// } else if (stars === 3 || stars === 4) {
//   price = 40;
//   alert(`Your price is ${price}`);
// } else if (stars === 5) {
//   price = 100;
//   alert(`Your price is ${price}`);
// } else {
//   alert("Enter amount of stars correctly from 1 to 5!");
// }

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     alert(`Your price is ${price}`);
//     break;
//   case 3:
//   case 4:
//     price = 40;
//     alert(`Your price is ${price}`);
//     break;
//   case 5:
//     price = 100;
//     alert(`Your price is ${price}`);
//     break;
//   default:
//     alert("Enter amount of stars correctly from 1 to 5!");
// }


// //CALCULATOR

// let result;
// const operator = (prompt("Введіть оператор:(+,-,/,*,<,>"));
// const num1 = Number(prompt("Введіть перше число"));
// const num2 = Number(prompt("Введіть друге число"));
// console.log(typeof num1);
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     alert(`${result}`);
//     break;
//   case "-":
//     result = num1 - num2;
//     alert(`${result}`);
//     break;
//   case "/":
//     result = num1 / num2;
//     alert(`${result}`);
//     break;
//   case "*":
//     result = num1 * num2;
//     alert(`${result}`);
//     break;
//   case "<":
//     result = num1 < num2;
//     alert(`${result} ? "Перше число менше другого" : "Перше число більше другого"`);
//     break;
//   case ">":
//     result = num1 > num2;
//     alert(`${result} ? "Перше число більше другого" : "Перше число менше другого"`);
//     break;
//   default:
//     alert("Шановний, будьте уважні! Введіть правильний оператор");
// }


// //Область видимості

// const a = 10;


// if (true) {
//     const b = 25;
//     console.log(a);
//   console.log(b);
//   if (true) {
//     const c = 100;
//     console.log(a);
//     console.log(b);
//   }
  // console.log(c);
// }
// console.log(c);
// console.log(b);


