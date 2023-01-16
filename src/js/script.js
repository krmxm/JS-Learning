"use strict";

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

/* const user = "Maxim";

alert(`Привет, ${user}`); */

/* console.log('arr' + " - object"); //строка
console.log(4 + " - object"); //строка
console.log(4 + +"5"); //type - number, + перед кавычками (унарный плюс) превращает строку в число

let incr = 10,
    decr = 10;

incr++; // увеличение значения на единицу, постфиксная форма записи
decr--; // уменьшение значения на единицу, постфиксная форма записи */

/* ++incr; // префиксная форма записи 
--decr; // префиксная форма записи */

/* console.log(incr);
console.log(decr); */


//First app

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
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

console.log(personalMovieDB);