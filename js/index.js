//Логічні оператори.Розгалуження

// 0,NaN,null,undefinded,"", '', false - завжди значення falsy
console.log(Boolean(1)); //true
console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));



//&& - and  - логічне і (зупиняється на правді (false))

// const a = 1;
// const b = 2;
// const c = 3;
// const result = (a < b) && (b < c);
// console.log(result);

// const result2 = (a > b) && (b < c);
// // const result2 = 1 > 2 false && 2 < 3 true
// console.log(result2);

// const a = 1;
// const b = "Hello";
// const c = null;

// // const result = a && b;
// const result = c && b;

// console.log(result);
// console.log(1 && undefined && 5 && "Hello");




// || or - логічне або - зупиняється на правді true

// const a = 1;
// const b = 2;
// const c = 3;

// // const check = (a < b) || (c > b);
// // console.log(check);

// // const check2 = (a < b) || (c < b) || (a > c);
// // console.log(check2);

// const result3 = 5 || 0 || "Hello";
// const result4 = "false" || 0 || "Hello";
// console.log(result3);
// console.log(result4);//пише не правда бо це рядок де написано false



// ! not - логічне ні

// const a = 5;
// const b = !a;
// const c = false;
// console.log(a);
// console.log(b); // коли стоїть логічний оператор ! в цьому випадку виконується умова !5 (не 5)
// console.log(c);



// ?? -  нульовий оператор об'єднання

const a = null;
const name = "Nastya";
const check2 = a ?? name;
console.log(check2);

let firstName = "Prokopenko"; 
let lastName = null;
let nickName = "kolyasochnik";
alert(firstName ?? lastName ?? nickName);//тому що стоїть значення які показують false він пропускає, а перше значення правди видає в консолі

