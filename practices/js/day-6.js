/*
let mySelf = 'My name is \'Nayem Ahmed\'';
console.log(mySelf);
let fname = 'Nayem';
let mySelf2 = `My first name is ${fname}.`;
console.log(mySelf2);
let age1 = 10, age2 = 20;
let calc = age1 + age2 + fname + age1 + age2;
console.log(calc);
console.log(typeof age1, typeof calc);
let num1 = 999999999999999;
console.log(num1);
let num2 = 9999999999999999;
console.log(num2);
let num3 = 9999999999999999n;
console.log(num3);
console.log(typeof num3);
let num4 = BigInt('9999999999999999');
console.log(num4);
console.log(typeof num4);
let num5 = BigInt(age1);
console.log(num5 , typeof num5);

let isAd = true;
console.log(isAd, typeof isAd);
let adult;
console.log(adult, typeof adult);
let noValue = null;
console.log(noValue, typeof noValue);
console.log('-----------------obejct data type-------------');
let fruits = ['Apple', 'Lemon'];
console.log(fruits);
fruits[2] = 'Mango';
fruits[0] = 'Peer';
console.log(fruits, typeof fruits);
let array1 = [1, 'text', 3.5, BigInt('99999999999999999999'), null, undefined, true];
console.log(array1);
let student = {
    name: 'Nayem Ahmed',
    age: 23,
    isAdult: true
};
console.log(student);
console.log(typeof student);
*/

function fun(){
    console.log('Hello Function');
}
fun();

//code driven function
function display(name, age){
    console.log(`hello ${name}, Age : ${age}.`);
}
display('Nayem', 23);
function display2(name, age, birthYear = 1999){
    console.log(`hello ${name}, Age : ${age} years, birthYear: ${birthYear} `);
}
display2('Nayem', 23, 2000);
display2('Hajifa', 22);
display2('no-name');
