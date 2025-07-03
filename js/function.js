//Функція - підпограма, незалежна частина коду, призначена
//для виконання конкр. завдання.
// у js функція - це блок коду, який можна викликати з іншого місця у програмі.


//Як створювати функції?


//FUNCTION EXPRESSION - функціональний вираз
//ви не можее використов. функц. до її створення цим способои


// const num = function (вхідні дані(параметри)) {
    //тіло функції(код), який функія має виконувати
// }


// const sumNumbers = function (num1,num2) {
//    return num1 + num2;
// }


//виклик функії,коли функц. виклик. в дужках (аргументи)
// sumNumbers(3, 5);

// console.log(sumNumbers(3, 5));
// console.log(sumNumbers(45, 100));
// console.log(sumNumbers(200, 300));


//return - повернення результату фуцнкції в глобальну область видимості


//параметри функції
//можна написати параметри по замовчуванню, щоб не вибивало помилку


// const sumNumbers2 = function (num3 = 1, num4 = 2) {
//     // return num3 + num4;
//     const result = num3 + num4;
//     return result;
//     // console.log(result);
// }
// console.log(sumNumbers2());

// const functionResult = sumNumbers2(3, 5);
// console.log(functionResult);//8


  

//FUNCTION DECLARATION(другий варіант)
//хороший варіант ви зможете використати функц. і до і після створення самої функц.

// function назва функції(параметри){

// }

// function sumNumbers(num1,num2) {
//   const result = num1 + num2;
//       return result;
// }
// const argument1 = 10;
// const argument2 = 20;
// const resultNumbers = sumNumbers(argument1, argument2);
// console.log(resultNumbers);


// const functionA = function () {
//     console.log("Виконується functionA");
// }

// const functionB = function () {
//     console.log("Виконується functionB");
// }
// const functionC = function () {
//     functionA();
//     console.log("Виконується functionC");
// }

// console.log("Логування перед викликом functionA");
// functionA();
// console.log("Логування після викликом functionA");

// functionC();



//Псевдомасив(arguments) - масив який має менше методів

// const sum = function () {
//     console.log(arguments);
//     let total = 0;
//     const argArray = Array.from(arguments);
//     console.log(argArray);
//     for (const argument of argArray) {
//         console.log(argument);
//         total = total + argument;
//     }
//     return total;
// }


//(...назва)- спрет, він перетворює псевдомасив в масив
// const sum = function (...arg) {
//     console.log(arg);
// }
// console.log(sum(2,5,8,10,12));



//GUARD CLAUSE

//Як без нього?

// function canDrive(person) {
//     if (person) {
//         if (person.age >= 18) {
//             if (!person.isSuspended) {
//                 console.log("Людина може водити авто");
//             } else {
//                 console.log("Людина є порушником");
//             }
//         } else {
//             console.log("Людина не повнолітня");
//         }
//     } else {
//         console.log("Людина не визначена");
//     }
// }


//Як з ним?

// function  canDrive(person) {
//     if (!person) {
//         console.log("Людина не визначена");
//         return;
//     }
//     if (person.age < 18) {
//         console.log("Людина не повнолітня");
//         return;
//     }
//     if (person.isSuspended) {
//         console.log("Людина є порушником");
//         return;
//     }
//     console.log("Людина може водити авто");
// }

// const offerTrip = function () {
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
// }

// const offerTrip = function (payment) {
//     if (payment <= 15000) {
//         return "Welcome to work";
//     }
//     if (payment >= 15000 && payment < 30000) {
//         return "Welcome to Boguslove";
//     }
//     if (payment >= 30000 && payment < 60000) {
//         return "Welcome to Turkey";
//     }
//     return "Welcome to Australia";
// }
// console.log(offerTrip(12000));






