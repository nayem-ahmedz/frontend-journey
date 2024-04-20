let mySelf = 'My name is \'Nayem Ahmed\'';
console.log(mySelf);
let firstName = 'Nayem';
let mySelf2 = `My name is ${firstName}`;
console.log(mySelf2);
let age = 10, age2 = 20;
let calculation = age + age2 + firstName + age + age2;
console.log(calculation);
console.log('data type of calculation is : ' +typeof calculation);
console.log('data type of age is : ' + typeof age); // int, float, double == number
let num1 = 999999999999999; //digit == 15
console.log(num1);
let num2 = 9999999999999999;
console.log(num2); // why result is chnaged? because value is large enough for type = number
let num3 = 9999999999999999n; //becomes bigInt
console.log(num3 + ' and type of this varibale is : ' + typeof num3);
let num4 = BigInt(9999999999999999);
console.log('Defined with BigInt() ' + num4 + ' type is : ' + typeof num4);
//you can work on floating point while using bigInt, also cannt mixup with other type such as number
console.log(9n / 5n ); //why it is not 1.8? because bigInt
let num5 = BigInt(age);
console.log(num5);
/*
Data type == 8 types
    number
    BigInt
    string
    boolean
    array
    object
*/
let isAdult = true;
console.log(isAdult + ' and it\'s data type is : ' + typeof isAdult);
let adult; //data type == undefined
console.log(adult);
console.log('type is : ' + typeof adult);
let noValue = null; //null mean 0, null and undefioned are not same, two type, but both eq 0
console.log(noValue);
console.log(typeof noValue); //data type == null
//data type == object
console.log('-----------------------------------');
let fruits = ['Apple', 'Mango', 'Lemon'];
fruits[3] = 'Peer'; //new element in array can be added like this
console.log(fruits);
console.log(typeof fruits);
let array1 = [1, 'text', true, 10n, undefined, null];
console.log(array1);
let student = {
    name: 'Nayem Ahmed',
    age: 23,
    isAdult: true
};
console.log(student);
console.log(typeof student);


