//ОБ'ЄКТ

// в об'єкті є перелік зачень з їхніми властивостями
//чим простіша сутність тим менше властивостей
//в складних об'єктів можуть бути вкладені ще об'єкти
//методи вказують на дію сутностей з властивостями
//методи в об'єктах будуть в значеннях функція


//ЯК СТВОРИТИ ОБ'ЄКТ?

//1 варіант

//   назва
// let pillow = new Object();



// //2 варіант
// //  назва
// let pillow = {
//     width: 500,
//     height: 300,
//     color: "white",
//     weight: 700,
//     "country of origin": "UK",
    
// };  //{} - літерал об'єкта

// console.log(pillow);


// //ДЛЯ ЧОГО?

// //щоб властивості і значення використовувати
// //  в якісь функц.


// //ЯК ОТРИМАТИ ЗНАЧЕННЯ ЯКОЇСЬ ВЛАСТИВОСТІ?
// //(як звертатися до властивостей?)
// //властивості - кіс "Keys"
// //  value - значення властивості


// //1 ВАРІАНТ

// const pillowColor = pillow.color;

// console.log(pillow.weight);
// console.log(pillow.color);

// console.log(pillowColor);//змінна



// //2 ВАРІАНТ, ЯКЩО В ЛАПКАХ та не тільки


// console.log(pillow["country of origin"]);
// console.log(pillow["width"]);



// //ЯК ПЕРЕВИЗНАЧИТИ ВЛАСТИВОСТІ?

// pillow.color = "red";
// console.log(pillow.color);

// pillow["country of origin"] = "China";
// console.log(pillow["country of origin"]);



// //ЯК ДОДАТИ ДО ОБ'ЄКТА НОВУ ВЛАСТИВІСТЬ?

// //звертаємось до властивості якої не існує,
// //отримаєте undefind

// pillow.shape = "rectangular";
// console.log(pillow.shape);
// console.log(pillow);


// //ЯК ВИДАЛИТИ З ОБ'ЄКТА ВЛАСТИВІСТЬ?

// delete pillow.height;

// console.log(pillow.height);
// console.log(pillow);


// //ЧИ МОЖНА В ОБ'ЄКТ ЗАСУНУТИ ІСНУЮЧІ ЗМІННІ?

// const name = "Nastya";
// const lastName = "Dudko";

// const woman = {
//     age: 16,
//     height: 173,
//     name,
//     lastName,
// }
// console.log(woman);

// //ОБЧИСЛЮВАННЯ ВЛАСТИВОСТЕЙ

// const inputName = "email";
// const inputEmail = "a@gmail.com";
// const inputUserName = function () {
//     return "userName";
// }
// const userEmailData = {
//     [inputName]: inputEmail,
//     [inputUserName()]:"Nastya Dudko"
// }
// console.log(userEmailData);


//THIS

// const userName = {
//     name: "Nastya",

//     getUserName() {
//         console.log(userName.name)
//     }
// }
// userName.getUserName();


// const newUserName = Object.assign({}, userName);
// console.log(newUserName);
// //перевизнач
// newUserName.name = "Vlad";
// console.log(newUserName);
// newUserName.getUserName();

// const newUserName2 = Object.assign({, newUserName });
// //перевизнач 2 раз
// newUserName2.name = "Nazar";
// //не працює
// newUserName2.getUserName();


