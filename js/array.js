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


//метод split цей метод не масива, а рядка,завдяки ньому з рядка перетвор. в масив
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



// метод join - робить з масива рядок
// // array.join();

// console.log(greetMessageArray.join(" "));



//метод reverse - значення масиву навпаки

// const array4 = [1, 2, 4, 6, "apple", 10];
// const reverseArray4 = array4.reverse();
// console.log(array4);
// console.log(reverseArray4);



// метод indexOf - індекси

// Array.indexOf(item - елемент масиву,from - з якого почин. шукати) - на якому індексі;

// let array = ["HTML", "CSS", "JavaScript"];
// console.log(array.indexOf("HTML"));
// console.log(array.indexOf("JavaScript"));
// console.log(array.indexOf("React"));
// console.log(array.indexOf("JavaScript", 4));




// метод includes - чи містить масив

// Array.includes(item,from);(true,false)


// console.log(array.includes("Python"));
// console.log(array.includes("css"));
// console.log(array.includes("CSS"));
// console.log(array.includes("CSS", 1));



// метод push - додає новий елемент в кінець масиву


// array.push("React","Python");
// console.log(array);




// метод pop - видаляє останній елемент масиву


// array.pop("Python");
// console.log(array);
// array.pop();
// console.log(array);
// array.pop();
// console.log(array);



// метод unshift - додає елемент на початок масиву

// array.unshift("Java");
// console.log(array);



// // метод shift - видаляє елемент з початку масиву

// array.shift();
// console.log(array);



// const animals = ["Cat", "Dog", "Hamster", "Lion", "Chicken", "Snake"];
// const indexes = [];

// for (let i = 0; i < animals.length;i ++){
//     console.log(animals[i]);
//     if (animals.includes("Hamster")) {
//         indexes.push(i);
//     }
//     console.log(indexes);
// }


// метод splice - може робити декілька операцій(видалення,добавляє,заміняє)

// const animals = ["Cat", "Dog", "Hamster", "Lion", "Chicken", "Snake"];
//видалення елементу

// animals.splice(1, 3); //починаючи з першого видалилося 3 елемента
// console.log(animals);

// const removedAnimals = animals.splice(1, 3); //значення тих елементів, які видалили
// console.log(removedAnimals);


//заміна елементу

// animals.splice(0, 1, "Monkey","Elephant"); // 0 - на нульовий індекс, 1 - скільки значень добавити
// console.log(animals);

// animals.splice(4, 0, "Bear");
// console.log(animals);

//видалення з кінця масиву

// animals.splice(-1, 1);
// console.log(animals);


// метод slice - робити копію масива, чи його частини
// Array.slice([start - з якого почин],[end - до якого закінч.])

//часткове копіювання
// const animals = ["Cat", "Dog", "Hamster", "Lion", "Chicken", "Snake"];
// const animals1 = ["Cat", "Dog", "Hamster"];
// const animals3 = ["Lion", "Chicken", "Snake"];
// const partOfanimals = animals.slice(0, 3);
// console.log(partOfanimals);

// const copyOfAnimals = animals.slice(-3, -1);
// console.log(copyOfAnimals);

// const animals2 = animals.slice(); //повністю скопіювати
// console.log(animals2);
// console.log(animals2 === animals); //не правда, тому що це копія та оригінал


//метод concat - поєднує масиви

// const newAnimals = animals1.concat(animals1, animals3);
