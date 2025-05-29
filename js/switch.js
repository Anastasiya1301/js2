//Інструкція switch.Область видимості

//switch (одна умова декілька варіантів значень)

// switch (умова) {
//     case "значення 1":
//         інструкція для виконання 1;
//         break;//щоб не виконувались всі варіанти, пишемо break - стоп
//     case "значення 2":
//         інструкція для виконання 2;
//         break;
//     case "значення 3":
//         інструкція для виконання 3;
//         break;
//     case "значення 4":
//         інструкція для виконання 4;
//         break;
//     case "значення 5":
//         інструкція для виконання 5;
//         break;
//     case "значення 6":
//         інструкція для виконання 6;
//         break;
//     default:
//         інструкція, яка виконується у разі, коли НІ одне
//         значення не відповідає умові
// }



// 1* - 20$,
// 2* - 30$,
// 3* - 50$,
// 4* - 70$,
// 5* - 120$


const stars = Number (prompt("enter amount of stars of tour hotel"));
// const stars = 1;
let price;

if (stars === 1) {
    price = 20;
    alert(`Your price is ${price}`);
} else if (stars === 2) {
    price = 30;
    alert(`Your price is ${price}`);
} else if (stars === 3) {
    price = 50;
    alert(`Your price is ${price}`);
} else if (stars === 4) {
    price = 70;
    alert(`Your price is ${price}`);
} else if (stars === 5) {
    price = 120;
    alert(`Your price is ${price}`);
} else {
    alert("Enter amount of stars correctly!");
}
