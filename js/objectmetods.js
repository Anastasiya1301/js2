// const user = {
//     name: "Nastya",
//     age: 16,
//     height: 170
// }


// const user2 = Object.create(user);
// console.log(user2);
// console.log(user2.name);

// user2.weight = 50;
// user2.hobby = "Gaming";
// user2.location = "UK";
// console.log(user2);


// //FOR IN - видає всі значення

// // for (const key in user2) {
// //     //дістали значення
// //     console.log(`${key}: ${user2[key]}`);
// // }

// for (const key in user2) {
// //властивість буде виводитися тільки тоді що властивість власна
//     if (user2.hasOwnProperty(key)) {
//         console.log(`${key}: ${user2[key]}`);
//     }
// }



//OBJECT.KEYS() - з об'єкта витянули масив його властивостей

 //приклад 1
// const keys = Object.keys(user2);
// console.log(keys);
// //використов власні
// for (const key of keys) {
//     console.log(`${key}: ${user2[key]}`);
// }



// //OBJECT.VALUES - повертає масив значень

// // Object.values()

// const values = Object.values(user2);
// console.log(values);

// const lohne = {
//     js: 2000,
//     java: 1500,
//     python: 1700,
// }
// let totalLohne = 0;
// const lohneValues = Object.values(lohne);
// console.log(lohneValues);
// for (const lohneValue of lohneValues) {
//     console.log(lohneValue);
//     totalLohne = totalLohne + lohneValue;
// }
// console.log(totalLohne);


//OBJECT.ENTRIES - перетвор. об'єкт на масив пар(ключ,значення)

// 1 масив в я кому 3 масива
// const wagesInfo = Object.entries(lohne);
// console.log(wagesInfo);

// for (const wage of wagesInfo) {
//     // console.log(wage[0]);
//     // const key = wage[0];

//     const value = wage[1];
//     console.log(`${key}:${value}`)
// }

//1

// const menu = {
//     width: 200,
//     height: 400,
//     title: "Наше меню",
//     "background color":"blue",
// }

// const multyplayNumbers = object => {
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     const value = object[key];
//     if (typeof value !== "number") {
//       continue;
//     }
//     object[key] *= 4;
//   }
// }
// multyplayNumbers(menu);
// console.log(menu);


//Розпорошення масивів

//spread - розпорошення об'єктів,отримання доступу
// робить просто значення

// const array = [1, 2, 4, 5, 7];
// // const arrayCopy = array.slice();
// // console.log(arrayCopy);

// const arrayCopy = [...array];
// console.log(arrayCopy);
// console.log(arrayCopy === array);

// const array1 = [0, 1, 2];
// const array2 = [3, 4, 5];
// // const commonArray = array1.concat(array2);

// const commonArray = [...array1, ...array2];
// console.log(commonArray);

// const numbersArray = [25, 64, 49, 38];
// // const max = Math.max(numbersArray);
// // const max = Math.max(numbersArray[0], numbersArray[1], numbersArray[2], numbersArray[3],);
// console.log(...numbersArray);
// const max = Math.max(...numbersArray);
// console.log(max);


// //spread In Object

// // в об'єкті не може бути 2 раза 1 властивості,
// // лишається завжди друга

// //1

// const a = {
//     x: 1,
//     y: 2,
// }
// const b = {
//     x: 0,
//     z: 3,
// }
// const c = {
//   ...b,
//   ...a,
//   d: 10,
// }
// //{ x: 0, z: 3, x: 1, y: 2, d: 10}
// console.log(c);

// //2

// const defaultSettings = {
//     font_family: "Roboto",
//     font_size: 16,
//     color: "black",
//     background_color:"white"
// }

// const userSettings = {
//     font_family: "Arial",
//     font_size: 14,
//     name: "John"
// }

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings
// }
// console.log(finalSettings);


// const users = [
//   { name: "Anna", age: 25 },
//   { name: "Oleh", age: 30 },
//   { name: "Iryna", age: 22 },
// ];

// for (const user of users) {
//     console.log(`${user.name} is ${user.age} years old`)
// }



