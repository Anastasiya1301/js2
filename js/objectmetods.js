const user = {
    name: "Nastya",
    age: 16,
    height: 170
}


const user2 = Object.create(user);
console.log(user2);
console.log(user2.name);

user2.weight = 50;
user2.hobby = "Gaming";
user2.location = "UK";
console.log(user2);


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

const lohne = {
    js: 2000,
    java: 1500,
    python: 1700,
}
let totalLohne = 0;
const lohneValues = Object.values(lohne);
console.log(lohneValues);
for (const lohneValue of lohneValues) {
    console.log(lohneValue);
    totalLohne = totalLohne + lohneValue;
}
console.log(totalLohne);

