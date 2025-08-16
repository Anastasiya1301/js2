//Процедурне програмування - це набір не пов'язаних явно функц.
//і змінних для зберігання і обробки інформації
//але при зростанні кодової бази
//результатом може те, що буде
//спагетті код

//OOP - основується на роботі з об'єктами дозволяють
//змоделювати програму, робить більш структурованим

//ООР - це документація(шаблон) многоразовий

//КЛАС - спосіб опису суті,
// визначає стан і поведінку, залежно від цього стану,
//а також правила взаємодії з даною сутністю(контракт)


//ПРОТОТИВНЕ НАСЛІДУВАННЯ

// const someObject = { x: 52 }
// console.log(someObject);

// const copySomeObject = Object.create(someObject);
// console.log(copySomeObject); //успадкувала властивість x: 52

// //додаємо властивість

// copySomeObject.y = 100;
// console.log(copySomeObject); //була пустота тепер y: 100

// //в об'єкті  є значення і 100 і 52

// console.log(copySomeObject.y);//власна властивість
// console.log(copySomeObject.x);//не власна властивість,
// //тому що наслідувала властивість


// //ПЕРЕВІРКА ЧИ ВЛАСТИВІСТЬ ВЛАСНА ЧИ НІ

// console.log(copySomeObject.hasOwnProperty("x")); //false
// console.log(copySomeObject.hasOwnProperty("y")); //true

// //НАСЛІДУВАННЯ ВСІХ ВЛАСИВОСТЕЙ ДО
// const objectThree = Object.create(copySomeObject);
// console.log(objectThree);

// //додаємо властивість

// objectThree.w = 200;
// console.log(objectThree);
// console.log(objectThree.w);//результат властивості
// console.log(objectThree.x);//результат властивості
// console.log(objectThree.y);//результат властивості
// console.log(objectThree.a);//undefind, бо нема такої властивості








