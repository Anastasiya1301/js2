//SORT

//по замовчуванню ставить
// значення масиву по зростанню, мутує ориг.масив
//сортує по системі юнікод


//система ЮНІКОД - перелік різних символів
// кожний символ має свій юнікод(номер)
//спочатку йдуть великі букви, потім маленькі
//при обчислюванні якщо результат мінусовий то перший елемент
//треба щоб стояв попереду другого


//МЕТОД SORT З ЧИСЛАМИ

// const numbers = [5, 3, 1, 2, 4];

// numbers.sort()

// console.log(numbers); //поставило числа по зростанню


//МЕТОД SORT З БУКВАМИ

// const letters = ["A", "a", "c", "z", "X"];
// letters.sort();
// console.log(letters); //спочатку великі, потім маленькі


//ЩОБ НЕ ВИКРИВЛЯТИ МАСИВ, АЛЕ ТРЕБА ВИКОРИСТАТИ SORT
//ТРЕБА СТВОРИТИ КОПІЮ МАСИВА(slice,spret(...))

//1

// const lettersCopy = letters.slice();
// console.log(lettersCopy);

//2

// const lettersCopy = [...letters];
// console.log(lettersCopy);


//sort

//спочатку прилітає currentElem потім nextElem
// numbers.sort((currentElem, nextElem) => {
//   return nextElem - currentElem; //якщо рез. від'ємний,
//     // то currentElem перед nextElem,
//     //якщо додатний, то навпаки
// });


// //ПО СПАДАННЮ

// const LowSortedNumbers = [...numbers].sort((a, b) =>
//     b - a
// );
// console.log(LowSortedNumbers); //по спаданню,
// //  якщо навпаки то по зростанню

// // [...numbers] копія масиву


// //ПО ЗРОСТАННЮ

// const UpSortedNumbers = [...numbers].sort((a, b) =>
//     a - b
// ); //по зростанню
// console.log(UpSortedNumbers);


//МАСИВ ОБ'ЄКТІВ

const items = [
    {brand: "Samsung", price: 1000},
    {brand: "LG", price: 1250},
    {brand: "Siemence", price: 2000},
    {brand: "Bosch", price: 1750}
];


// const sortedByPrice = [...items].sort((a, b) =>
//     a.price - b.price
// );

// console.log(sortedByPrice);


//FUNCTION localCompare

const sortedByPrice = [...items].sort((a, b) =>
    a.brand.localeCompare(b.brand)
);

console.log(sortedByPrice);
