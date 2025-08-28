//DOM - міжплатформовий, незалежний від мови інтерфейс
// для роботи з HTML, містить
// набір властивостей і методів дозвол.
//шукати, створювати і видаляти елементи,
// реагувати на дії користувача і іншк


// BOM - інтерфейс для роботи з браузером,
//містить набір властивостей і методів, щоб отримати доступ
//безспосередньо до поточної вкладки


//DOM ДЕРЕВО
//кожен штмл тег є об'єктом
//атрибути об'єкта це його властивості

//вузли елементи є  утворення тегами
//текстові вузли утвор. текстом всередині елем.


// console.log(document);
// console.log(document.body); //body - об'єкт

// console.dir(document);

// ///доступ

// // querySelector - шукає 1 елем


// const firstElement = document.querySelector("p");
// console.log(firstElement);

// //доступ по id
// const secondElement = document.querySelector("#element");
// console.log(secondElement);

// //доступ до класу
// // писати крапку на початку, якщо це клас .

// const thirdElement = document.querySelector(".first-element");
// console.log(thirdElement);

// //доступ по арибуту []

// const lastElement = document.querySelector("[title= Hello]")
// console.log(lastElement);


// queueSelectorAll - шукає всі елем.

// const paragraph = document.querySelectorAll("p");
// console.log(paragraph);
// paragraph.forEach(element => console.log(element));


// const elemRef = document.querySelector("#element");
// console.dir(elemRef);

// //add - добавляє класи
// elemRef.classList.add("red");
// elemRef.classList.add("green");


// //remove - видаляє класи

// elemRef.classList.remove("red");

// //contains - метод який перевіряє наявність містить
// // чи той чи інший елемент такий класс - true,false

// const isRed = elemRef.classList.contains("red");
// console.log(isRed);

// // toggle - перемикач, якщо нема,
// // то додає, якщо є то видаляє певний клас

// elemRef.classList.toggle("red");

// //style - як в цсс
// // elemRef.computedStyleMap.border = "2px solid green";
// // elemRef.computedStyleMap.padding = "10px";
// // elemRef.style.backgroundColor = "red";

// //все в 1 строчку
// elemRef.style.cssText = "border:2px solid green; padding: 10px; background-color: red";


// // як дізнатися який тег належить тому чи іншому елементу?

// const titleElement = document.querySelector("h1");
// console.log(titleElement);

// //tagName - дізнатися назву тега

// const titleElementTag = titleElement.tagName;
// console.log(titleElementTag);



// //textContent - показує те що внутри тега контент
// console.log(titleElement.textContent);

// //можна змінювати значення
// titleElement.textContent = "goodbye everybody"
// console.log(titleElement);


//navigation

// const listRef = document.querySelector("#elem");

// //firstElementChild - перший елем

// listRef.firstElementChild.style.color = "red";
// console.log(listRef);

// //lastElementChild - останній елем

// listRef.lastElementChild.style.color = "green";

// //children - всі елем

// console.log(listRef.children);

// const listItems = [...listRef.children];
// console.log(listItems);

// //+= - в кінці добавити текст(контент)
// listItems.forEach(item => item.textContent += "!");


//СТВОРЕННЯ ЕЛЕМЕНТІВ

//createElement

const titleElem = document.createElement("h1");
titleElem.textContent = "abracadabra"
titleElem.classList.add("title")
console.log(titleElem);
document.body.appendChild(titleElem);

const imageElem = document.createElement("img")
imageElem.src =
    "https://images.pexels.com/photos/32878855/pexels-photo-32878855.jpeg";
imageElem.alt = "Mountain";
imageElem.width = 300;
console.log(imageElem);
// document.body.appendChild(imageElem);

const heroElem = document.querySelector(".hero");
heroElem.appendChild(titleElem);
heroElem.appendChild(imageElem);
console.log(heroElem);

const navElem = document.createElement("li");

navElem.classList.add("item");
console.log(navElem);

const linkElem = document.createElement("a");
linkElem.classList.add("link");
linkElem.href = "";
linkElem.textContent = "Partners";
navElem.appendChild(linkElem);
console.log(navElem);
document.querySelector("")



