"use strict";

console.log('arr' + ' - object');
console.log(4 + +'5');//плюс перед цифрой превращает строку в число

let incr = 10,
    decr = 10;


//Префиксный способ выводит сразу правильное значение
//++incr; //увеличивает на 1
//--decr; //уменьшает на 1

//Постфиксный способ работает не сразу
//incr++; //увеличивает на 1
//decr--; //уменьшает на 1


console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 * 2 !== '6');  // == сравнивает только значение 
                                // === сравнивает также тип данных

const   isChecked = false,
        isClose = false;
    

console.log(isChecked || !isClose);

// Приоритет операторов
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table