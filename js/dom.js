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

// const titleElem = document.createElement("h1");
// titleElem.textContent = "abracadabra"
// titleElem.classList.add("title")
// console.log(titleElem);
// document.body.appendChild(titleElem);

// const imageElem = document.createElement("img")
// imageElem.src =
//     "https://images.pexels.com/photos/32878855/pexels-photo-32878855.jpeg";
// imageElem.alt = "Mountain";
// imageElem.width = 300;
// console.log(imageElem);
// // document.body.appendChild(imageElem);

// const heroElem = document.querySelector(".hero");
// heroElem.appendChild(titleElem);
// heroElem.appendChild(imageElem);
// console.log(heroElem);

// const navElem = document.createElement("li");

// navElem.classList.add("item");
// console.log(navElem);

// const linkElem = document.createElement("a");
// linkElem.classList.add("link");
// linkElem.href = "";
// linkElem.textContent = "Partners";
// navElem.appendChild(linkElem);
// console.log(navElem);
// const navListElem = document.querySelector(".nav");
// navListElem.appendChild(navElem);

//Sibling  -сусіди

//REPAINT - коли вносити зміни в цсс відповідно
// браузер властивості в геометрії
// для нього саме болюче питання,тому в ньому
// можна міняти колір і т.д, але геометрію не трогати

//REFLOW - перебудова сторінки, видаляти, додавати елементи

//ДОДАТИ ДЕКІЛЬКА ЕЛЕМ

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const colorPickerContainerElement = document.querySelector(".js-color-picker");

// // const elements = colorPickerOptions.map(option => {
// //     const buttonElement = document.createElement("button");
// //     buttonElement.type = "button";

// //     buttonElement.classList.add("color-picker-option");
// //     buttonElement.textContent = option.label;
// //     buttonElement.style.backgroundColor = option.color;
// //     return buttonElement;
// // });
// // console.log(elements);

// // постійна функція, яка в масивах буде генерувати

// const makeColorPickerOptions = options => {
//     return options.map((option) => {
//         const buttonElement = document.createElement("button");
//         buttonElement.type = "button";

//         buttonElement.classList.add("color-picker-option");
//         buttonElement.textContent = option.label;
//         buttonElement.style.backgroundColor = option.color;
//         return buttonElement;
//     });
// };

// //
// const elements = makeColorPickerOptions(colorPickerOptions);

// //дістали елементи з масиву ...
// colorPickerContainerElement.append(...elements);

//InnerHTML - сам розпорошує елементи з масиву сразу,
//  не потрібно діставати елементи самому,
// сам вставить в свої місця приймає рядок і сам їх

//insertAdjacentHTML (position;string) - треба вказати
//  в які місця вставити

//

friends: ["Briana Decker", "Sharron Pace"],
  {
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 16,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    phone: "+1 (814) 593-3825",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    age: 24,
  };

const listElem = document.querySelector(".user-list");

function createUserMrkUp(users) {
    return users.map(
        (user) =>
            `<li>
  <h2>${user.name}</h2>
  <p>${user.age}</p>
  <span>eye color:</span>
  <span style="background-color: ${user.eyeColor}"></span>
</li>`
    ).join('');
}

listElem.innerHTML = createUserMrkUp(users);

listElem.insertAdjacentElement("beforeend", createUserMrkUp)
//все пропало
// listElem.innerHTML = ""
