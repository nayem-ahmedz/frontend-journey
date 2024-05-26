//js practice practice

/*
//24-25 May :: Night
let a, name = 'Nayem\'s Ahmed', age = 23, age2;
console.log(a, name, age);
const cars = ['Toyota', 'BMW', 'Pajero'];
console.log(cars);
const car = {
    type: 'four wheler',
    model: 2005,
    color: 'red'
};
console.log(car.type);
car.owner = 'Nayem';
console.log(car);
Object.freeze(car);
car.price = '2k';
car.owner = 'Hajifa';
console.log(car);
var b = 5;
let c = 7;
{
    var b =6;
    console.log('value of b is : ' + b);
    let c = 1, d = 5;
    console.log('value of c in block : ' + c );
    const e = 'constant';
}
console.log(b);
console.log(c); //let c 's value 
//console.log(d, e);
const PI = 3.1416;
{
    console.log(PI); //block variable declared outside block, allowed in block
    const SI = 3.14;
}
console.log(cars[0]);
console.log(cars[2]); //[3] = undefined
cars.push('Ducati');
console.log(cars);
cars.pop();
console.log(cars); */



//25 May 2024
//from day-2
/*
var a, b, c;
a = 30, b = 6;
c = a / b;
console.log(c);
let t1 = 'A', t2 = 'B';
console.log(t1>t2);
let fName = 'Nayem', lName = 'Ahmed';
console.log(fName + ' ' + lName);
fName += ' Ahmed';
console.log(fName);
let z = 'Hello ' + 5;
console.log(z);
console.log(typeof(z));
let aa = 3.1416;
console.log(typeof aa);
console.log(5%2);
let ab = 5;
console.log(ab++);
console.log(ab);
console.log(++ab);
console.log('The value of 2^3 is :' , 2**3);
console.log(Math.pow(2, 3));
let f = 10;
f **= 2;
console.log(f);
console.log(100 + 5 * 2);
console.log( 5 * 2 * 6 / 2 ); 
let g = true;
console.log(typeof(g));
g = 5;
console.log(typeof g);
let h = 22e2;
console.log(h);
h = 22e-2;
console.log(h);
let hx = BigInt('123456789123456742345');
console.log(hx);
console.log(typeof hx);
console.log(5==5);
console.log(5!=5);
const cars = ['Toyota', 'BMW', 'Volvo'];
console.log(cars[0]);
const person = {
    name: 'Nayem',
    age: 23
};
console.log(person.name + ' is ' + person.age + ' years old.');
console.log(typeof(person));
let xx;
console.log(typeof(xx) + ' is datatype and value is ' + xx);
let xz = '';
console.log(typeof(xz) + ' is datatype and value is : ' + xz);
let x8 = null;
console.log("The value of x8 is : " + x8 + " And the data type is : " + typeof(x8));
console.log(typeof(null)); */



/* from day 3
var fruit = 'Apple';
console.log(fruit2); //var is hoisted, can be used before declared, with undefined value
var fruit2 = 'Mango';
console.log(fruit2);
//console.log(fruit3); //let is not hoisted
//fruit3 = 'Tok';
console.log(`${fruit} is my favourite fruit and I love to eat ${fruit} regularly`);
var fruit2 = 'Mango redeclared';
console.log(fruit2);
let a = 5;
// let a = 6; cant be redeclared
a = 6;
console.log(a);

const b = 5;
const person2 = {
    name: 'Hajifa Jui',
    age: 22
};
console.log(person2);
person2.country = 'Bangladesh';
console.log(person2);
const fruits = ['Apple', 'Strawberry'];
console.log(fruits);
fruits.push(null);
console.log(fruits);
fruits.pop();
console.log(fruits); */

/* from day-4
let a = 5, b = '5';
console.log(a==b); //true
console.log(a===b); //false
console.log(a!=b); //false;
console.log(a!==b); //true

console.log(!true);
let t1 = 5, t2 = 6;
let ternarY = t1 > t2 ? true : false;
console.log('Value of ternarY is : ' + ternarY);
console.log(typeof ternarY);
let fName = 'Nayem', lName = 'Ahmed';
console.log(fName === lName ? true : false); */





/* day-5
let mySelf = 'My name is \'Nayem Ahmed\'.';
console.log(mySelf);
let fName = 'Nayem';
let mySelf2 = `My first name is ${fName}`;
console.log(mySelf2);
let age = 10, age2 = 20;
let calc = age + age2 + fName + age + age2;
console.log(calc);
console.log(typeof age, typeof(calc));

let num = 1234567891234567;
console.log(num);
let num2 = 12345678912345678n; //becomes bigint
console.log(num2);
let num3 = BigInt('1234567891234567');
console.log(typeof num3);
//console.log(5 + num3); error, cannot mixup bigint with others
let num4 = BigInt(num);
console.log(num4);
let x;
console.log('type is : ' + typeof x + ' Value is : ' + x);
let xx = null;
console.log('type is : ' + typeof xx + ' Value is : ' + xx);
let people = ['Nayem', 'Hajifa'];
console.log(people);
people[2] = 'Ahmed';
console.log(people);
console.log(typeof people);
console.log('-----------------------------');
let dType = [1, 2n, 'string', true, undefined, null, ['Nayem', 'Hajifa'], { name: 'Nayem', age: 23 }];
console.log(dType);
let student = {
    name: 'Nayem',
    year: '3rd'
};
console.log(student);
console.log(typeof student); */


/* day 5v2
function fun(){
    console.log('hello my function');
}
fun();
//function: type 1 : code-driven invocation
function printMySelf(name, age, home='Sylhet'){
    console.log('hello! I am', name, 'and I\'m', age, 'years old. I live at', home );
}
printMySelf('Nayem Ahmed', 23, 'Bhadeshwar');
printMySelf('Hajifa Jui', 23);

//function : type-2 : event-driven invocation
//check doc 5

//function : type-3 : Automatice (self-invoked) invocation
(function(){
    console.log('Automatically called function');
})();
(function(message){
    console.log(`This is the ${message}`);
})('event');

//function expression
let maths = function(x, y){
    //console.log(x*y); X
    return x * y; //if you dont return, js will by itself :: return undefined
}
console.log(maths(4, 3));
console.log(maths, typeof maths);

function fun2(){
    var f1 = 'Nayem';
    let f2 = 'Ahmed';
    console.log(f1, f2);
}
//console.log(f2); variable declared in fucntion cannot be used outside, even var
fun2(); */


