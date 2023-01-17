/* "use strict"; */

/* alert('Hello'); */

/* const result = confirm("Are you here?");
console.log(result); */

/* const answer = +prompt("Вам есть 18?", "18");
console.log(answer + 5); */

/* const answers = [];
answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
document.write(answers); */



//Интерполяция

/* const category = 'toys';

console.log(`https:/someurl.com/&{category}/15`);
const user = "Maxim";

alert(`Привет, ${user}`); */

//Операторы JS

/* console.log('arr' + " - object"); //строка
console.log(4 + " - object"); //строка
console.log(4 + +"5"); //type - number, + перед кавычками (унарный плюс) превращает строку в число

let incr = 10,
    decr = 10;

incr++; // Инкремент - увеличение значения на единицу, постфиксная форма записи
decr--; // Декремент - уменьшение значения на единицу, постфиксная форма записи

++incr; // префиксная форма записи 
--decr; // префиксная форма записи

console.log(incr);
console.log(decr); */



//First app

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
console.log(numberOfFilms);

const personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */



// Условия

/* if (4 == 9) {
  console.log('Ok!');
} else {
  console.log('Error');
}


const num = 50;

if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Много');
} else {
  console.log('Ok!');
}


(num == 50) ? console.log('Ok!') : console.log('Error'); //тернарный оператор, потому что в нём учавствуют 3 аргумента
// В JS один тернарный оператор

switch (num) {
  case 49:
    console.log('Неверно');
    break;
  case 100:
    console.log('Неверно');
    break;
  case 50:
    console.log('В точку!');
    break;
  default:
    console.log('Не в этот раз');
    break;
} */


//(д) Логические операторы - или, и, оператор отрицания не

/* const humburger = 5;
const fries = 0;

if (humburger && fries) {
  console.log('Я сыт!');
}

console.log((humburger && fries)); // true, логический тип данных, блиновое значение */

/* const humburger = 3;
const fries = 1;
const cola = 0;

console.log (humburger === 3 && cola && fries);

if (humburger === 3 && cola === 1 && fries) {
  console.log('Все сыты!');
} else {
  console.log('Мы уходим');
} */

/* const humburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (humburger === 3 && cola === 2 || fries === 3 && nuggets) {
  console.log('Все довольны!');
} else {
  console.log('Мы уходим');
}

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport ||mariaReport);

console.log(!0); // 0 - 0, !0 - true */

//Логические операторы задачи

/* console.log( NaN || 2 || undefined ); //true 2 - ok

console.log( NaN && 2 && undefined ); // 0 NaN - ok

console.log( 0 ); //3 3 +

console.log( !1 && 2 || !3 ); // false - ok

console.log( 25 || null && !3 ); //false 25 - ok

console.log( NaN || null || !3 || undefined || 5); //5 +

console.log( NaN || null && !3 && undefined || 5); //5 +

console.log( 5 === 5 && 3 > 1 || 5); // 5 true - ok

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
} else {
  console.log('False');
} */


// Циклы

/* let num = 50; */

/* while (num <= 55) {
  console.log(num);
  num++;
} */

/* do {
  console.log(num);
  num++;
}
while (num < 55); */

/* for (let i = 1; i < 10; i++) {
  if (i === 6) {
    //break;
    continue;
  }
  
  console.log(i);
} */


// Цикл в цикле и метки

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}

// Задача Ёлочка (Астерикс)

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += '\n';
}

console.log(result);
