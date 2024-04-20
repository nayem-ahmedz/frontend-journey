//day - 3 , from Youtube : pro-coder //13 April 2024 till 1:22 mins
let fruit = 'Apple';
fruit = 'Verel';
console.log(`${fruit} is my favourite food, I like to eat ${fruit} regularly`);
/*
    var variable can be redeclare
    var variable can be reassign
    global scope
    hoisted //can be used before initialization but with value: undefined
*/
var a = 5;
console.log(country); //undefined
var country = 'Bangladesh';

/*
    let variable cannot be redeclare
    but you can reassign
    block scope
    let is not hoisted // cannt be used before initialization
*/
let b = 10;
{
    console.log(b);//you can get access in the block, while varibale(let) is outside
    let c = 12;
}
//console.log(c); //But you cant access block variabel outside from a block
//console.log(people);
let people = 'Nayem';

/*
    const variable cannot be redeclare
    const variable cannot be reassign
    block scope
    const is not hoisted // cannt be used before initialization
*/
const c = 10;
//array, object declared with const can be modified, element can be chnaged
const person = {
    firstName: 'Hajifa',
    age: 24
};
person.country = 'Bangladesh';
console.log(person);

const fruits = ['Apple', 'Mango', 'Orange'];
console.log(fruits);
console.log(`First fruit is ${fruits[0]}`);
fruits[2] = 'Malberry';
fruits.push('Strawberry');
console.log(fruits);
fruits.push('null');
console.log(fruits);
fruits.pop();
console.log(fruits);
