//як поєднати певні функції в джс с певними елем.?

//ПОДІЇ - сигнал від браузера про тещо щось сталося
//використов. для реакції
//на дії користувача і виконання коду.
//(реакція браузера на дії користувача)


//CLICK - відбув. коли
// клацнув на елем. лівою кнопкою миші

//SUBMIT- віжвідувач відправив форму

//FOCUS - відвідувач фокусується на елем.

//KEYDOWN - відвідувач натискає клавішу



//СЛУХАЧІ ПОДІЙ - функція,
//яка спрацює як тільки подія відбулася

//elem.addEventListener - додає подію(слухача)

//elem.removeEventListener - відключає подію(слухача)



//ОБ'ЄКТ ПОДІЙ

//властивості:

//event.type - тип події

//event.target - елем. на якому відбув. подія

//event.currentTarget - елем. на якому спрацював обробник

//отрим. доступ
// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");


//addEventListener

// targetBtn.addEventListener("click", callback - функція-обробник(handler));

// targetBtn.addEventListener("click", () => console.log("click"));

//НЕ РОБИТИ ТАК

// function handleClick() {
//     console.log("click");
// }

//ПОТРІБНО ТАК ПИСАТИ

//1

//handleSubjectEvent - присут.завжди.назва.подія

// targetBtn.addEventListener("click", handleTargetBtnClick);

// function handleTargetBtnClick() {
//     console.log("click");
// }


//2

//SubjectEventHandler - назва елем.подія.присут


// targetBtn.addEventListener("click", targetBtnClickHandler);

// function targetBtnClickHandler() {
//   console.log("click");
// }


//3

//onSubjectEvent

// targetBtn.addEventListener("click", onTargetBtnClick);

// function onTargetBtnClick() {
//   console.log("click");
// }


//натиснувши на кнопку добавити слухача
//подій повісивши цього слухача на

// function onTargetBtnClick() {
//   console.log("click");
// }

// addListenerBtn.addEventListener("click", (event) => {
//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.currentTarget);

//     //додали слухача
//     // targetBtn.addEventListener("click", onTargetBtnClick);
//     targetBtn.addEventListener("click", onTargetBtnClick);
// });

// removeListenerBtn.addEventListener("click", () => {
//     targetBtn.removeEventListener("click", onTargetBtnClick);
// })



//ФОРМА

//доступ до форми

// const form = document.querySelector(".js-register-form");
// console.log(form);

// form.addEventListener("submit", onFormSubmit)

// function onFormSubmit(event) {
//   event.preventDefault();
//   // console.log( `target`,event.target);

//   //.elements - можна достукатися до кожного інпута
//   console.log(`currentTarget`, event.currentTarget.elements.email.value);
//   const formElements = event.currentTarget.elements;
//   const email = formElements.email.value;
//   const password = formElements.password.value;
//   const subscription = formElements.subscription.value;
//   console.log(email, password, subscription);

//   // const formData = {
//   //   email,
//   //   password,
//   //   subscription,
//   // }
//   const formData = new formData(event.currentTarget)
//   formData.forEach((value, name) => {
//     console.log("value", value);
//     console.log("name", name);
//   })
// }


const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

refs.input.addEventListener("input", onInputChange)
refs.licenseCheckbox.addEventListener("change", onLicensChange)
function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTrget.value;
}
function onLicensChange(event) {
  refs.btn.disabled = !EventTarget.currentTarget.checked;
}





