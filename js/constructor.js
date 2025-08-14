//ФУНКЦІЇ-КОНСТРУКТОРИ -головна задача
//створення нових об'єктів



const options = {
    name: "Mike",
    lastName: "Oldfield",
    email: "m@gmail.com",
}


//зміна з великої це конструктор
//розуміє, що це функція

//ШАБЛОН
const User = function ({name, lastName, email} = {}) {
    // const { name, lastName, email } = options;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
}

//КОНСТРУКТОРИ
const mike = new User(options);
console.log(mike);

const anastasya = new User({name: "Anastasya", lastName: "Dudko", email: "a@gmail.com"});
console.log(anastasya);



