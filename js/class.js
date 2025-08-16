//КЛАСИ - об'єкт, який є шаблоном,
//на якому робляться копії об'єктів
//НАЗВИ КЛАСІВ З ВЕЛИКОЇ
//функція конструктор
class Car {
  //Статична властивість пишуться перед функц. конструктор
  static description = "Класс, який описує, певну марку автомобіля"; //властивість,
  //яка придназначена тільки для цього
  // класу(статична,тобто її в копії не видно)

  //Статичні методи пишуться перед функц. конструктор
  static logInfo(carObj) {
    console.log(carObj);
  }

  constructor({ brand, model, price } = {}) {
    this._brand = brand;
    this._model = model;
    this._price = price;
    }
    
    //Набори методів,для роботи з класом
    // getBrand() {
    //     return this.brand
    // }
    
    // getPrice() {
    //     return this.price
    // }


//ГЕТTЕРИ, СЕТTEРИ(оновлений синтаксис набори методів з класом)

    //ГЕТTЕРИ не може назва гетера співпадати з назвою власт.
    //отримати інф.
    get brand() {
        return this._brand;
    }
    get price() {
        return this._price;
    }
    get model() {
        return this._model;
    }
    //СЕТТЕРИ
    //міняти,додавати інф.
    set brand(newBrand) {
        this._brand = newBrand;
    }

    set model(newModel) {
        this._model = newModel;
    }

};

//1

const toyotaCar = new Car({ brand: "Toyota", model: "Campry", price: 35000 });

// console.log(toyotaCar);

// //Геттери

// //старий синтаксис

// // console.log(toyotaCar.getBrand());
// // console.log(toyotaCar.getPrice());

// //новий синтаксис
// console.log(toyotaCar.brand);
// console.log(toyotaCar.price);


//Сеттери

toyotaCar.brand = "Audi"

console.log(toyotaCar.brand);

toyotaCar.model = "Q7"
console.log(toyotaCar.model);


// const mersedesCar = new Car({ brand: "Mersedes", model: "ML", price: 40000 });
// console.log(mersedesCar);


//НАСЛІДУВАННЯ КЛАСІВ - 
//розширення додатковими властивостями готовго класу

class ElectroCar extends Car {
    constructor({ brand, model, price, powerCapasity } = {}) {
        super(brand, model, price);
        // super - передаються з мин. класа
    // this._brand = brand;
    // this._model = model;
    //   this._price = price;
      this._powerCapasity = powerCapasity;
    }
    
}

const vwId6 = new ElectroCar();
console.log(vwId6);



