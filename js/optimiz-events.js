//Оптимізації подій

//Події - реакція браузера на дії користувача

//ПОШИРЕННЯ ПОДІЙ

//занурення до цільової точки і вспливає

//CAPTURE-занурення(подія почин. на window) і тоне
//  елем. проходить через всі елеме.предки до
//  найглибшого цільового елем. на якому відбув
//  подія


//TARGET-подія дійшла до цільового елем.
//містить повідом. елем. про те,
//  що на ньому відбулася дія


//BUBBLE-подія вспливає від найглибшого
//цільового  елем. через усі елем-предки до
//window

//EVENT.CURRENTTARGET - на якому стоїть слухач подій
//EVENT.TARGET - по якому клацаємо елем.


// const refs = {
//     parent: document.querySelector("#parent"),
//     child: document.querySelector("#child"),
//     innerChild: document.querySelector("#inner-child")
// }

// refs.parent.addEventListener("click", onParentClick);
// refs.child.addEventListener("click", onChildClick);
// refs.innerChild.addEventListener("click", onInnerChildClick);

// function onParentClick(event){
//     // console.log("onParentClick");
//     console.log("onParentClick-event.target", event.target)
//     console.log("onParentClick-event.currentTarget", event.currentTarget);

// }
// function onChildClick(event){
//     // console.log("onChildClick");
//      console.log("onChildClick-event.target", event.target);
//     //  console.log("onChildClick-event.currentTarget", event.currentTarget);
// }
// function onInnerChildClick(event){
//     // console.log("onInnerChildClick");
//     console.log("onInnerChildClick-event.target", event.target);
//     console.log("onInnerChild-event.currentTarget", event.currentTarget);
// }



//ДЕЛЕГУВАННЯ ПОДІЙ

//коли замість 100 слухачів
// ставиться 1 на батьківський елем.

//отрим.доступ до контейнера
// const container = document.querySelector(".js-container");
// container.addEventListener("click", onButtonClick);

// //функції
// function onButtonClick(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   console.log(event.target.textContent);
//   console.log(event.target.nodeName);
//   //                           |
//   //NODENAME-назва кнопки на яку
//     // натиснули великим шрифтом,щоб працював лише кнопки
//       console.log(event.target);
// }

//Додаємо кнопку addbutton
// const addButton = document.querySelector(".js-add-button");
// addButton.addEventListener("click", onAddButtonClick);
// let labelCountBtn = 8;
// function onAddButtonClick(event) {
//     const btn = document.createElement("button");
//     btn.type = "button";
//     btn.textContent = `button ${labelCountBtn}`;
//     labelCountBtn += 1;
//     container.appendChild(btn);
// }

//2
//доступ до конт

// const tagsContainer = document.querySelector(".js-tags");
// tagsContainer.addEventListener("click", onTagButtonClick);

//1 Одиничний вибір

// let selectedTag = null;
// function onTagButtonClick(event) {
//     if (event.target.nodeName !== "BUTTON") {
//         return;
//     }
//     const currentActiveButton = document.querySelector(".tags__btn--active");
//     if (currentActiveButton) {
//         currentActiveButton.classList.remove("tags__btn--active");
//     }
//     const nextActiveButton = event.target;
//     nextActiveButton.classList.add("tags__btn--active");

//     selectedTag = nextActiveButton.dataset.value;
//     console.log(selectedTag);
    
// }



//2 Множинний вибір


const tagsContainer = document.querySelector(".js-tags");
tagsContainer.addEventListener("click", onTagButtonClick);

// const selectedTag = [];

const selectedTag = new Set;
//new Set - масив у якому не дозвол. дублікати
function onTagButtonClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  //проблема в тому что дублюються дублікати

  // event.target.classList.toggle("tags__btn--active");
  // selectedTag.push(event.target.dataset.value);
  // console.log(selectedTag);

  const btn = event.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("tags__btn--active");
  if (isActive) {
    selectedTag.delete(tag);
  } else {
    selectedTag.add(tag);
  }
  console.log(selectedTag);
  btn.classList.toggle("tags__btn--active");
}
