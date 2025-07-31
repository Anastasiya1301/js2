//Деструкталізація - дозволяє нам розпакувати
// масиви чи об'єкти та використати їх


// const hotel = {
//     "hotel name": "Romada",
//     stars: 5,
//     capacity: 30,
//     city: "Lviv"
// }

// const hotelName = hotel["hotel name"];
// const hotelStars = hotel.stars;
// const hotelCapasity = hotel.capacity;
// console.log(hotelStars);


//якщо витягуємо з об'єкта то ставимо {} -
//бо це літерал об'єкта

// const {capacity, city = "Kyiv", "hotel name": hotelName} = hotel;
// console.log(hotelName);
// console.log(capacity);
// console.log(city);

//якщо НЕМАЄ ТАКОГО ЗНАЧЕННЯ - пише undefind

//якщо Є ТАКЕ ЗНАЧЕННЯ, то перевизначення не спрацює
//(21 рядок city = "Kyiv")



//ЯКЩО ВКЛАДЕНІ ІНШІ ОБ'ЄКТИ


// const newHotel = {
//   "hotel name": "Romada",
//   stars: 5,
//   capacity: 30,
//     city: "Lviv",
//     rooms: {
//         size: {
//         small: 10,
//         medium: 10,
//         large: 10
//         },
//   },
// };

// const { small, medium, large } = newHotel.rooms.size
// console.log(small, medium, large);


// const profile = {
//     name: "Igor",
//     tag: "rudi",
//     location: "Copenhagen, Dehmark",
//     stats: {
//         followers: 5000,
//         views: 7000,
//         likes: 2000,
//         comments: 500
//     }
// }

// const { name, tag, location, ...rest } = profile;
// console.log(name);
// console.log(tag);
// console.log(location);
// console.log(rest);



// const array = [4, 6, 2, 7];
// console.log(array);
// console.log(...array);
// const minNumber = Math.min(...array);
// console.log(minNumber);


//




