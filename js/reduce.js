//Перебираючий, після завершення кожної
// ітерації є якийсь результат

// Array.reduce(callback[(проміжний результат(акумулятор),
// елем до якого дали доступ,індекс,ориг.масив)],початкове значення акумулятора)


// const numbers = [1, 2, 3, 4, 6, 7, 9];


// // const total = numbers.reduce((acc, num) => {
// //     const result = acc + num;
// //     return result
// // }, 0);

// // console.log(total);

// //REDUCE

// const total = numbers.reduce((acc, num) => acc + num, 0);

// console.log(total);


// const salaries = {
//     artem: 0,
//     nastya: 4000,
//     vanya: 2000,
//     liza: 8000,
//     vlad: 6000,
//     alina: 1000,
//     nazar: 3000
// };

// const totalSalaries = Object.values(salaries).reduce((acc,salary) => acc + salary, 0);

// console.log(totalSalaries);


//Function

// function sumAllNumbers(...numbers) {
//     console.log(...numbers);
//     let total = 0;
//     for (const number of numbers) {
//          total += number;
//     };
//     return total;
// };
// console.log(sumAllNumbers(12, 4, 110, 15));

//REDUCE

// const allNumbers = (...numbers) =>
//     numbers.reduce((acc, number) => acc + number, 0);
// console.log(allNumbers(110,92,14));



//З МАСИВОМ ОБ'ЄКТІВ

// const hoursWorkedPerWeek = [
//     {day: "Monday", count: 9},
//     {day: "Tuesday", count: 9},
//     {day: "Wednesday", count: 9},
//     {day: "Thursday", count: 9},
//     {day: "Friday", count: 9},
// ];

// const hoursQuantity = hoursWorkedPerWeek.reduce((acc, hoursWorkedPerDay) =>
//     acc + hoursWorkedPerDay.count //витягуємо значення та 
//     // додаємо значення до акумулятора
// , 0); 
// console.log(hoursQuantity);





