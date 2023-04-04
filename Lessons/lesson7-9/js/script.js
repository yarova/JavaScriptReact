"use strict";

a = 15;
console.log(a);


//Способ 1
let number = 5; //let можем поменять значение

//Способ 2
const leftBorderWidth = 1; //const не можем поменять значение
//прямых констант в js не бывает

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a = 10;

console.log(obj);

//Способ 3
console.log(name);
var name = 'Ivan';

{
    var result = 50; //const и let не видно в console.log
}

console.log(result);