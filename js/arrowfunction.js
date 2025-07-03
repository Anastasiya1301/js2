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
