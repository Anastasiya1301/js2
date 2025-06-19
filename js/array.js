//Масив - структура даних для зберігання і маніпуювання колекцією індексованих значень
// у масиві може зберігатися будь-яке число елементів будь-якого типу

// const numbers = [1,2,3,4];//[] - літерал
// console.log(numbers);

// numbers[1] += 1;
// console.log(numbers);

// const newNumbers = new Array(2,3,4,6,7,8);
// console.log(newNumbers);
// console.log(newNumbers.length);

// const names = ["Nastya", "Vlad", "Liza", "Artem", "Alina"];
// console.log(names.length);


// //можно перевизначати довжину масиву

// // names.length = 8;
// // console.log(names);

// names.length = 3;
// console.log(names);

// console.log(names[0]);//звернулись по індексу елемента


// //перевизначити значення елемента

// names[3] = "Nastya";
// console.log(names);

// names[0] = "Nazar";
// console.log(names);


// const lastIndex = names.length - 1;
// console.log(lastIndex);


// const fruits = ["apple", "orange", "lemon", "banana", "cherry"];
// console.log(fruits);
// console.log(fruits.length);

// console.log(fruits[4]);
// console.log(fruits[4] = "grape");
// console.log(fruits);
// console.log(fruits.length - 1);
// console.log(fruits.length = 5);
// console.log(fruits[5]);



//як перебрати масив?

// const names = ["Valera", "Vanya", "Jora", "Andrey", "Liza"];
// // console.table(names);


// // for (let i = 0; i < names.length;i = i+1){
// //     console.log(names[i]);
// // }



// //for of


// for (let name of names){
//     console.log(name);
// }


//перебір рядків у масиві

// const cities = ["Kyiv", "Kharkiv", "Los angeles", "New York", "Toronto"];

// for (let city of cities) {
//     console.log(city.toUpperCase());
//     console.log(city.toLowerCase());
//     console.log(city.length);
// }

//підрахунок суми чисел

// const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumNumbers = 0;
// console.log(sumNumbers)
// for (let number of numbersList) {
//     console.log(number);
//     sumNumbers = sumNumbers + number;
// }
// console.log(sumNumbers);


//фільтрація в масиві

// const figures = [12, 34, 1, 2, 5, 8, 9, 4, 15];
// let even = [];
// let odd = [];
// for (let figure of figures){
//     console.log(figure);
//     if (figure % 2 === 0) {
//         even.push(figure);
//     } else {
//         odd.push(figure);
//     }
// }
// console.log(even);
// console.log(odd);

// const words = ["one","two","apple","grape","chicken"];
// console.log(words);
// console.log(words[5]);
// for (let word of words) {
//     // console.log(word);
//     // if (word === "apple")
//     //     break
//     // console.log(word);
//     if (word.length > 4)
//         continue;
//     console.log(word);
// }



//МЕТОДИ МАСИВУ


//split цей метод не масива, а рядка,завдяки ньому з рядка перетвор. в масив
// string.split(delimiter(роздільник ,пробіл))


// const string = "HTML,CSS,JS,React";
// console.log(string);

// // const array1 = string.split(",");
// // const array2 = string.split(" ");
// // console.log(array1);
// // console.log(array2);

// const array3 = string.split(",", "2");
// console.log(array3);


// const greetMessage = "Вітаємо вас на курсі JS";
// const greetMessageArray = greetMessage.split(" ", 3);

// // console.log(greetMessageArray);



// //join - робить з масива рядок
// // array.join();

// console.log(greetMessageArray.join(" "));



//reverse - значення масиву навпаки 

const array4 = [1, 2, 4, 6, "apple", 10];
const reverseArray4 = array4.reverse();
console.log(array4);
console.log(reverseArray4);

