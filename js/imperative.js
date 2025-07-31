//ІМПЕРАТИВНИЙ код пишеться послідовно
//і детально

//ДЕКЛАРАТИВНИЙ код пишеться не так детально
//і може бути схована якась функц. і т.д
//скорочується синтасксис коду



//ПЕРЕБИРАЮЧI МЕТОДИ

// massive.method(item => {
    //логіка, яка буде застосовуватися
    // на кожній ітерації
// });

//item обов'язковий доступ,
//бо треба до цього елементу на кожній ітерації

// idx,arr - не обов'язкові, дивлячись на задачі
//не обов'язково ці назви


//Чисті функції - якщо "оригінал" зберігається,
//тобто бере дані, робить якусь свою функцію
//і дані не змінились

//Брудні функції - якщо змінила дані
//після виконання функц.


// const numbers = [1, 3, 5, 7, 9];
// console.log(numbers);
// // const dirtyMultiply = (array, value) => {
// //     for (let i = 0; i < array.length; i++){
// //         array[i] = array[i] * value;
// //     }
// //     return array;
// // }

// // //вхідні дані змінились, тому це БРУДНА функц., мутація

// // console.log(dirtyMultiply(numbers, 2));
// // console.log(numbers);


// const cleanMultiply = (array, value) => {
//     const arrayCopy = [];
//     for (let i = 0; i < array.length; i++){
//         arrayCopy.push(array[i] * value);
//     }
//     return arrayCopy;
// }

// //вхідні дані не змінились, тому це ЧИСТА функц.

// console.log(cleanMultiply(numbers, 2));
// console.log(numbers);



//МЕТОДИ





