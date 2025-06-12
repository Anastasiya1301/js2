//Цикли while,do..while,

//While (цикл з передумовою)-  цикл,який виконується поки істинна деяка умова, вказана перед його початком

//Інструкція while створює цикл,який виконує блок, коду,поки умова перевірки оцінюється як true

// while (умова) {
//     тіло циклу - код/інструкція для виконання
// }

// let i = 1;
// let and = 10;

// while (i <= and) {
//     console.log(i);
//     i = i + 1; // i = 1+1  лічильник
// }

// console.log("Виконуємо задачу після цикла WHILE!!!");

// let min = 10;
// let max = 100;

// while (min <= max) {
//     if (min % 10 === 0) {
//         console.log(min);
//     }
//     min = min + 1;
// }




//do..while

//do..while (цикл з постумовою) - цикл, в якому умова перевіряється після виконання тіла циклу

// do {
//     тіло циклу - код
// } while (умова)



// let e = 1;
// let n = 10;

// do {
//   console.log(e);
//   e = e + 1;
// } while (e <= n);


// let sum = 0;
// let number = 0;

// do {
//     sum = sum + number;
//     number = Number(prompt("Enter number:"));
// } while (number >= 0 && number <= 5);
// console.log(`Total is ${sum}`);


// let number;

// do {
//     number = prompt("Введіть число більше 10:")
// } while (Number(number) <= 10);
// alert("Дякуємо!");


// let randomNumber;
// do {
//     randomNumber = Math.round(Math.random() * 10);
//     console.log(randomNumber);
// } while (randomNumber !== 5);



//for

// for - цикл, в якому деяка змінна змінює своє значення від заданого початкового до кінцевого значення, з деяким кроком, і для кожного значення цієї змінної тіло циклу виконується 1 раз

// for (ініціалізація; умова роботи циклу; пост-вираз = лічильник){
//     тіло циклу - код
// }


// for (let k = 0; k < 10; k += 1){
//     console.log(k)
// }
// console.log("Вираз після циклу!!!");


// const students = 20;
// const min = 3000;
// const max = 10000;
// let totalSum = 0;

// for (let i = 1; i <= students; i += 1){
//     // console.log(i);
//     const premia = Math.round(Math.random() * (max - min) + min);
//     console.log(`${i}: ${premia}`);
//     totalSum = totalSum + premia;
// }
// console.log(totalSum);


// for (let u = 1; u <= 10; u += 2){
//     if (u === 5) {
//         // break;
//         continue//код нижче не йде, а повертає на початок
//     }
//     console.log(u);
// }

// for (let number = 0; number < 10;){
//     console.log(`Число ${number}`)
// }
//без лічильника буде просто бескінечно