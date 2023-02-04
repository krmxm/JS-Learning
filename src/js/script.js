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

/*
1.	while – Проверяет условие перед каждой итерацией.
2.	do..while – Проверяет условие после каждой итерации.
3.	for (;;) – Проверяет условие перед каждой итерацией,
	есть возможность задать дополнительные настройки.

  for (Начало; Условие; Шаг) {
	// Тело цикла
	// Тут будет выполняться код
  }

  while (Условие) {
	// Тело цикла
	// Тут будет выполнятся код
  }
Чтобы организовать бесконечный цикл, используют
конструкцию while (true).
При этом он, как и любой другой цикл, может быть
прерван директивой break.

Если на данной итерации цикла делать больше
ничего не надо, но полностью прекращать цикл не
следует – используют директиву continue.

Обе этих директивы поддерживают метки, которые ставятся
перед циклом. Метки – единственный способ для break/continue
выйти за пределы текущего цикла, повлиять на выполнение внешнего.
Помним, что метки не позволяют прыгнуть в произвольное место кода,
в JavaScript нет такой возможности.
*/

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

/* let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

	for (let j = 0; j < i; j++) {
		result += "*";
	}

	result += '\n';
}

console.log(result); */

/* let result = '';
const lines = 5;

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
	result += " ";
  }
  for (let j=0; j < 2 * i + 1; j++) {
	result += "*";
  }
  result += "\n";
  
}
console.log(result); */

/* let num = 0;

while (num < 3) {
  console.log(`Число: ${num}`);
  num++;
} */

/* for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
} */


/* for (let i = 5; i <= 10; i++) {
  console.log(i);
}

for (let i = 20; i >= 10; i--) {
  if (i === 13) {
	break;
  }
  console.log(i);
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
	console.log(i);
  }
}

let i = 2;

while (i <= 16) {
  if (i % 2 === 0) {
	i++;
	continue;
  } else {}
  console.log(i);
  i++;
} */


/* const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
  arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
  result [i] = arr[i];
}
console.log(result); */

/* const data = [5, 10, 'Shopping', 20, 'Homework']; */

/* for (let i = 0; i < data.length; i++) {
  if (typeof(data[i]) === 'number') {
	data[i] = data[i] * 2;
  } else if (typeof(data[i]) === 'string') {
	data[i] = `${data[i]} - done`;
  }
} */

/* const result = [];

for (let i = 1; i <= data.length; i++) {
	result[i - 1] = data[data.length - i]
}

console.log(result); */

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
console.log(numberOfFilms);

const personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
}; */

/* for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
		  b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
	personalMovieDB.movies[a] = b;
	console.log('done');
  } else {
	console.log('error');
	i--;
  }
  
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
 
console.log(personalMovieDB); */


//while
/* let i = 0;
while (i < 2){
  const a = prompt('Один из последних просмотренных фильмов?', ''),
		  b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
	personalMovieDB.movies[a] = b;
	console.log('done');
  } else {
	console.log('error');
	i--;
  }
  i++
}

console.log(personalMovieDB); */

//do..while

/* let i = 0;

do {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
		  b = prompt('На сколько оцените его?', '');
  i++;

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
	personalMovieDB.movies[a] = b;
	console.log('done');
  } else {
	console.log('error');
	i--;
  }
}
while (i < 2);

console.log(personalMovieDB); */

//Функции, стрелочные функции

/* let num = 50;

function showFirstMessage(text) {
	console.log(text);
	console.log(num);
}

showFirstMessage("Hello world!");
console.log(num); */

/* Hello world!
50
50 */

/* function calc(a, b) {
	return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
	let num = 50;

	//

	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const usdCurr = 28;
const discount = 0.9;

function convert (amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res); */

/* function sayHello(name) {
	return `Привет, ${name}!`;
}

sayHello('Антон');

function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

console.log(getMathResult(10, 5)); */


//методы и свойства строк и чисел

/* const str = "test";
const arr = [1, 2, 4];

console.log(str.length);

console.log(str.toUpperCase());

const logg = "Hello world"; */

/* console.log(logg.slice(6, 11)); //world

console.log(logg.substring(6, 11)); //world */

/* console.log(logg.substr(6, 5)); //Начиная с 6 5 символов

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); //числовой вид данных
console.log(parseFloat(test)); // десятичный */


//First app

/* let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
	}
}

start();

const personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			  b = prompt('На сколько оцените его?', '');
    
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

detectPersonalLevel(); */

/* function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat); */

/* function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieDB.genres[i - 1] = genre;
	}
}

writeYourGenres(); */

/* function calculateVolumeAndArea(num) {
	if ((num) < 0 || typeof (num) !== 'number' || !Number.isInteger(num)) {
		return "При вычислении произошла ошибка";
	}

	let volume = 0,
		area = 0;

	volume = num * num * num;
	area = 6 * (num * num);

	return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(seatNumber) {
	if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
		return "Ошибка. Проверьте правильность введенного номера места";
	}
	if(seatNumber === 0 || seatNumber > 36) {
		return "Таких мест в вагоне не существует";
	} 
    
	return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(33));


function getTimeFromMinutes(time) {
	if (typeof (time) !== 'number' || time < 0 || !Number.isInteger(time)) {
		return "Ошибка, проверьте данные";
	}

	const hours = Math.floor(time / 60);
	const minutes = time % 60;

	let hoursStr = '';

	switch (hours) {
	  case 0:
		hoursStr = 'часов';
		break;
	  case 1:
		hoursStr = 'час';
		break;
	  case 2:
	  case 3:
	  case 4:
		hoursStr = 'часа';
		break;
	  default:
		hoursStr = 'часов';
	}

	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(90)); */



/* function findMaxNumber(a, b, c, d) {
  if (typeof(a) !== 'number' ||
	  typeof(b) !== 'number' ||
	  typeof(c) !== 'number' ||
	  typeof(d) !== 'number' ||
	  arguments < 4) {
	  return 0;
	  // argumets не обязательно
  }

  return Math.max(a, b, c, d);
}

console.log(findMaxNumber(1, 2, 3, 4));

function fib(numFib) {
	if(typeof(numFib) !== 'number' || numFib <= 0 || numFib % 1 !== 0) {
	  return '';
	}

	let arrNumbers = [0];

	for (let i = 1; i < numFib; i++) {
	  if (i === 1) {
		arrNumbers.push(1);
	  } else {
		arrNumbers.push(arrNumbers[i-1] + arrNumbers[i-2]);
	  }
	}

	return arrNumbers.join(' ');
}

console.log(fib(4)); */

// callback - функции

/*   function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
  }

  function done() {
	console.log('Я прошёл этот урок');
  }

  learnJS('JavaScript', done);

  // Объекты и дисктруктуризация объктов

  const options = {
	name: 'test',
	width: 1024, 
	height: 1024,
	colors: {
	  border: 'black',
	  bg: 'red'
	},
	makeTest: function() {
	  console.log("Test");
	} // метод - действие, которое может совершать объект
  };

  options.makeTest();

  const {border, bg} = options.colors;
  console.log(border); // диструктуризация */

// Объекты - структура, которая может сохранять в себе любые типы данных в формате ключ - значение

/* console.log(Object.keys(options).length); // счётчик элементов внутри */

/* console.log(options.name);

delete options.name;

console.log(options); */

/*   let counter = 0; // счётчик
  for (let key in options) {
	if (typeof(options[key]) === 'object') {
	  for (let i in options[key]) {
		console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
		counter++; // счётчик
	  }
	}
	else {
	  console.log(`Свойство ${key} имеет значение ${options[key]}`);
	  counter++; // счётчик
	}
  }

  console.log(counter); */

// массивы и псевдомассивы

/*   const arr = [2, 13, 26, 8, 10];
  arr.sort(compareNum);
  console.log(arr);

  function compareNum(a, b) {
	return a - b;
  } */
/* arr[90] = 0;
console.log(arr.length); // 5, последний индекс + 1
console.log(arr); */

/* arr.pop(); // удаляет последний элемент */
/*   arr.push(10); // добавляет в конец элемент

  console.log(arr); */

/*   for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]); // перебор
  }

  for (let value of arr) {
	console.log(value); // перебор
  } */

/*   arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
  }); */

/* const str = prompt("", "");
const products = str.split(", "); // то что ввёл пользователь переводит в массив
products.sort(); // сортировка в алфавитном порядке
console.log(products.join('; ')); // переводит массив в строку */

// Передача по ссылке или по значению, Spread оператор

/*   let a = 5,
	  b = a;

  b = b + 5;

  console.log(b);
  console.log(a); */

/*   const obj = {
	a: 5,
	b: 1
  };

  const copy = obj; // ссылка

  copy.a = 10;

  console.log(copy);
  console.log(obj); */

/*   function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
	  objCopy[key] = mainObj [key];
	}

	return objCopy;
  }

  const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
  };

  const newNumbers = copy(numbers);

  newNumbers.a = 10; */
/* newNumbers.c.x = 10; */

/*   console.log(newNumbers);
  console.log(numbers);

  const add = {
	d: 17,
	e: 20
  };

  const clone = Object.assign({}, add);

  clone.d = 20; */

/*   console.log(add);
  console.log(clone); */

/*   const oldArray = ['a', 'b', 'c'];
  const newArray = oldArray.slice();
  
  newArray[1] = 'afdsfref';
  console.log(newArray);
  console.log(oldArray);

  const video = ['youtube', 'vimeo', 'rutube'],
		blogs = ['wordpress', 'livejournal', 'blogger'],
		internet = [...video, ...blogs, 'vk', 'facebook'];

  console.log(internet);

  function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
  }

  const num = [2, 5, 7];

  log(...num);

  const array = ["a", "b"];

  const newAaray = [...array];

  const q = {
	one: 1,
	two: 2
  };

  const newObj = {...q};

  console.log(newObj);
  console.log(q); */

/* const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
	  languages: ['ru', 'eng'],
	  programmingLangs: {
		  js: '20%',
		  php: '10%'
	  },
	  exp: '1 month', 
  }, 
  showAgeAndLangs: function(plan) {
	const {age} = plan;
	const {languages} = plan.skills;
	let str = `Мне ${age} и я владею языками: `;

	languages.forEach(function(lang) {
	  str += `${lang.toUpperCase()} `;
	});

	console.log(str);

  }
}; */

/* function showExperience(plan) {
  const {exp} = plan.skills;
  return exp;
}

showExperience(personalPlanPeter); */

/* function showProgrammingLangs(plan) {
  
  let str = '';
  const {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
	str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return str;
}

console.log(showProgrammingLangs(personalPlanPeter)); */



/* const family = ['Peter', 'Ann', 'Alex', 'Linda'];

let str = '';
function showFamily(arr) {
	if(arr.length <= 0) {
	  str = 'Семья пуста';
	  return str;
	} else {
	  str = 'Семья состоит из: '
	  let newArr = [...family];
	  newArr = str + newArr.join(' ');
	  return newArr;
	}

	arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

	arr.forEach(member => {
	  str += `${member} `;
	});

	return str;
    
}


console.log(showFamily(family)); */


/* const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	arr.forEach(function(city) {
	  console.log(city.toLowerCase());
	});
}

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {

  if(typeof(str) === 'string') {
	return str.split('').reverse().join('');
  } else {
	return 'Ошибка!';
  }
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(curr => {
	if(curr !== missingCurr) {
	  str += `${curr}\n`;
	}
  });

  return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

// Основы ООП, прототипно-орентированное наследование

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function() {
	console.log("Hello");
  }
};

/* const john = {
  health: 100
};

Object.setPrototypeOf(john, soldier); // установили прототип для john от soldier */

/* const john = Object.create(soldier); // создаём объект john, который будет прототипно наследоваться от soldier */


/* const personalMovieDB = {
	'count': 0,
	'movies': {},
	'actors': {},
	'genres': [],
	'privat': false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '1');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '1');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count >= 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i}`);

			if (genre === '' || genre == null) {
				console.log('Вы ввели некорректные данные или не ввели их вовсе');
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};

function isBudgetEnough(data) {
	let square = 0;
	let fullSize = 0;

	data.shops.forEach(shop => {
		square += shop.width * shop.length;
	});

	fullSize += square * data.height;

	if (fullSize * data.moneyPer1m3 > data.budget) {
		return 'Бюджета недостаточно';
	} else {
		return 'Бюджета достаточно';
	}
}

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
	arr.sort();
	const a = [], b = [], c = [], rest = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < 3) {
			a.push(arr[i]);
		} else if (i < 6) {
			b.push(arr[i]);
		} else if (i < 9) {
			c.push(arr[i]);
		} else {
			rest.push(arr[i]);
		}	
	}

	return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];	
	
}

console.log(sortStudentsByGroups(students)); */

// Замыкание

/* let number = 5; debugger

function logNumber() {
	let number = 4; debugger
	console.log(number);
}

number = 6;

logNumber(); debugger */

/* function createCounter() {
	let counter = 0;

	const myFunction = function() {
		counter = counter + 1;
		return counter;
	};

	return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3); */

function createCounter() {
	let counter = 0;

	const myFunction = function() {
		counter = counter + 1;
		return counter;
	};

	return myFunction;
}

console.log(createCounter());