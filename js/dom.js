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

//вузли елементи є  утворення тегами
//текстові вузли утвор. текстом всередині елем.


console.log(document);
console.log(document.body); //body - об'єкт

console.dir(document);

///доступ

const firstElement = document.querySelector("p");
console.log(firstElement);

//доступ по id
const secondElement = document.querySelector("#element");
console.log(secondElement);

//доступ до класу
const thirdElement = document.querySelector(".first-element");
console.log(thirdElement);

//доступ по арибуту

const lastElement = document.querySelector("[title= Hello]")

