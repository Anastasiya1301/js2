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


const functionA = function () {
    console.log("Виконується functionA");
}

const functionB = function () {
    console.log("Виконується functionB");
}

const functionC = function () {
    console.log("Виконується functionC");
}

console.log("Логування перед викликом functionA");
functionA();
console.log("Логування після викликом functionA");

functionB();