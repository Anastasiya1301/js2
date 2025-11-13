//БІБЛІОТЕКА LODASH - сторонній код який можна
//  підкл. до свого проекта і
//  виконати якусь функц.
//можна підкл через CDN


// CDN - геогр. розроділ.
// мережева інфраструктура, що забезепеч.
// швидку доставку контенту користувачам
// і веб-сервірів


//THROTTLE - забезпеч. контроль
// на к-стю разів, які функц. може бути
// викликана протягом проміжку часу
// (сповільнює опрацювання)


//DEBOUNCE - гарантує, що функц.
//  не буде виклакана знову, поки не пройде
// певна к-сть часу без її виклику

//режими дебоунсе
//trailing edge(в кінці)
//leading edge(на початку)


// const coordsOutputEl = document.querySelector(".js-coords");
// console.log(coordsOutputEl.textContent);

// //THROTTLE
// //_ - бібліотека лодеш
// const throttleMouseMove = _.throttle(onCoordsOutputElMouseMove, 1000);
// let mouseMoveCounter = 0;
// // window.addEventListener("mousemove", onCoordsOutputElMouseMove);
// window.addEventListener("mousemove", throttleMouseMove);
// function onCoordsOutputElMouseMove(event) {
//     mouseMoveCounter += 1;
//     coordsOutputEl.textContent = `Кількість викликів функцій: ${mouseMoveCounter},
//     x: ${event.clientX}, y: ${event.clientY}`;

// }


//DEBOUNCE

// const inputElement = document.querySelector(".js-input");

// const textElement = document.querySelector("js-output");


// let inputCounter = 0;

// inputElement.addEventListener("input", _.debounce(onInputElementChange), 1000);
// // inputElement.addEventListener("input", onInputElementChange);
// function onInputElementChange(event) {
//     inputCounter += 1;
//     textElement.textContent = `Кількість викликів функцій: ${inputCounter}
//     Значення: ${event.target.value}`;
// }



// const countries = [
//   { label: "Ukraine" },
//   { label: "Sweden" },
//   { label: "USA" },
//   { label: "Canada" },
//   { label: "Mexico" },
//   { label: "Italy" },
//   { label: "England" },
//   { label: "Poland" },
//   { label: "France" },
//   { label: "Scotland" },
//   { label: "Norway" },
//   { label: "Spain" },
//   { label: "Germany" },
// ];


// // КРОК 1 - отримуємо доступ до елементів
// const inputElement = document.querySelector("#input");
// const listElement = document.querySelector(".js-list");

// inputElement.addEventListener("input", _.debounce(onFilterChange, 500));
// function onFilterChange(event) {
//     // console.log(event.target.value);
//     const filterSearch = event.target.value.toLowerCase()
//     // console.log(filterSearch);

//     const filteredItems = countries.filter(country => country.label.toLowerCase().includes(filterSearch))
//     console.log(filteredItems);

//     const listFilteredItemsMarkUp = createListItemsMarkUp(filteredItems);   
//     listElement.innerHTML = listFilteredItemsMarkUp
// }

// function createListItemsMarkUp(items) {
//     return items.map(item => <li>${item.label}</li>).join(" ")
// }
// const listItemsMarkUp = createListItemsMarkUp(countries)
// console.log(listItemsMarkUp);


// // listElement.innerHTML = listItemsMarkUp

// const coordsOutputEl = document.querySelector(".js-coords");
// console.log(coordsOutputEl);


// const throttleMouseMove = _.throttle(onCoordsOutputElMouseMove, 1000);
// let mouseMoveCounter = 0
// // window.addEventListener("mousemove", onCoordsOutputElMouseMove);
// window.addEventListener("mousemove", throttleMouseMove);

// function onCoordsOutputElMouseMove(event) {
//     mouseMoveCounter += 1
//     coordsOutputEl.textContent = `Кількість викликів функцій: ${mouseMoveCounter}, 
//     x: ${event.clientX},
//     y: ${event.clientY}`;    
// }

// const inputElement = document.querySelector(".js-input");
// const textElement = document.querySelector(".js-output");

// let inputCounter = 0;

// // inputElement.addEventListener("input", onInputElementChange)
// inputElement.addEventListener("input", _.debounce(onInputElementChange, 1000));

// function onInputElementChange(event) {
//     inputCounter += 1

//     textElement.textContent = `Кількість викликів функцій: ${inputCounter},
//     значення: ${event.target.value}`
// }

