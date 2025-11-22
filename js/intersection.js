//КОНЦЕПЦІЯ OBSERVER
// IntersectionObserver(callback, options);

//OBSERVER(спостерігач)

// ROOT(корінь,контекст)- область спостерігання
// (viewport)можна налаштувати(звузити і т.д)

//TARGET(ціль)- елем. над яким спостерігаєм



//Ініціалізація IntersectionObserver(callback,options)

//ROOT: Це кореневий елемент,
// який використовується для спостереження.
// Він визначає базову «рамку захоплення» для
// спостережуваних елементів. За замовчуванням
// це вікно перегляду вашого браузера,
// але насправді може бути будь-яким елементом
// у вашому DOM


//THRESHOLD

//Значення за замовчуванням має реагувати,
//  коли найперший або останній піксель
// спостережуваного елемента перетинає одну з меж
// «кадру захоплення». Майте на увазі, що він
// не залежить від напрямку, тобто реагуватиме
// в обох сценаріях: а) коли елемент входить і
// б) коли він залишає «рамку захоплення»


//ШАБЛОН IntersectionObserver(callback,options)
// const lazyImages = document.querySelectorAll(".feed-img")
// console.dir(lazyImages);

// const callback = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) { //result true
//             console.log(entry.target);
//             entry.target.src = entry.target.dataset.src; //створ. атрибут src
//             observer.unobserve(entry.target);//вимкнули спостерігача
//        }
//     });
// }
// const options = {
//     rootMargin: "0px 0px 75px 0px",
//     threshold: 0,
// }
// callback(lazyImages);
// const observer = new IntersectionObserver(callback, options);
// console.log(observer);

// lazyImages.forEach(image => {
//     observer.observe(image)
//     console.log(image);
    
// });


