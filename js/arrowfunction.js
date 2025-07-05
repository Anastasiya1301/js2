//КОЛБЕК І СТРІЛОЧНІ ФУНКЦІЇ


//FUNCTION EXSPRESION

// const add = function (a,b,c) {
//     const result = a + b + c;
//     return result;
// }

// console.log(add(2,7,3));


//СТРІЛКОВИЙ ФОРМАТ () =>


//1 варіант явне повернення

// const add = (a, b, c) => {
//   const result = a + b + c;
//   return result; //явне повернення
// }
// console.log(add(2, 7, 3));


//БЕЗ ФІГУРНИХ ДУЖОК ЗАВЖДИ ПИСАТИ НЕ МОЖНА


//2 варіант використов. коли треба виконати 1 дію,
// не явне повернення

// const add = (a, b, c) => a + b + c;



// const log = () => {
//     console.log("Привіт всім")
// }
// console.log(log());


// const message = ("Hello World");
// const greetMessage = text => console.log(text);

// greetMessage(message);


//ВІДМІННІСТЬ
//якщо ми хочемо отримати доступ к аргументам, то робимо масив

//зробили масив повноінний масив з методами

// const add = (...arg) => {
//     console.log(arg);
// };
// console.log(add(2, 7, 3));



// const offerTrip = (payment) => {
//     console.log(payment);
//     let message = "";
//     if (payment >= 60000) {
//         message = "Welcome to Australia"
//     } else if (payment >= 30000) {
//         message = "Welcome to Turkey";
//     } else if (payment >= 15000) {
//         message = "Welcome to Boguslove"
//     } else {
//         message = "Go to work!"
//     }
//     return message;
// }
// console.log(offerTrip(60000));


//Стек контекстів виконання - черга по виконанню



//КОЛБЕК

//Колбек - функція, яка передається
// іншій функції як аргмумент.

//Функція вищого порядку - функція, що приймає в
//якості параметрів інші функції.

//прикоад 1

//callback - функція     |
// const filter = (array, callback) => {
//     const filteredArray = [];
//     for (const element of array) {
//         const passed = callback(element);
//         if (passed) {
//             filteredArray.push(element);
//         }

//     }
//     return filteredArray;
// }
// const callback1 = value => value > 3;
// const callback2 = value => value % 2 === 0;
// const result1 = filter([2, 3, 4, 8], callback1);
// const result2 = filter([2, 3, 4, 8], callback2);
// console.log(result1);
// console.log(result2);


// //приклад 2

// const fruits = [
//   { name: "apples", quantity: 200, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const callback3 = fruitInfo => fruitInfo.quantity >= 120;
// const result3 = filter(fruits, callback3);
// // const result3 = filter(fruits, (fruitInfo) => fruitInfo.quantity >= 120);
// console.log(result3);


// //приклад 3

// //функія вищого порядку(приймає колбеки)
// const letMeSeeYourName = (username, callback) => {
//     const upperCaseName = username.toUpperCase();
//     callback(upperCaseName);//приймає аргументи для функції
//  }

// //функція колбек
// const greetMessage = name => console.log(`Вітаємо вас, ${name}!`);
// const sayByeMessage = name => console.log(`До нової зустрічі, ${name}!`);

//викликаємо функцію letMeSeeYourName
// letMeSeeYourName("Liza", greetMessage);
// letMeSeeYourName("Liza", sayByeMessage);



//приклад 4


//FUNCTION

// const doMathOperation = function (a, b, callback) {
//     const result = callback(a, b);
//     return result;
// }
// const sum = function (x, y) {
//     return x + y;
// }
// const multiply = function (x, y) {
//     return x * y;
// }
// doMathOperation(2, 5, multiply);
// doMathOperation(2, 5, sum);
// console.log(doMathOperation(2, 5, multiply));
// console.log(doMathOperation(2, 5, sum));


//СТРІЛОЧНИЙ ВАРІАНТ


// const doMathOperation = (a, b, callback) => callback(a,b)
 
// console.log(doMathOperation(2, 5, multiply));

// const multiply = (x, y) => x * y
// const sum = (x, y) => x + y