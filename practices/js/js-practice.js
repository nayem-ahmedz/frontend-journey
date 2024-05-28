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

/* day-6 (practice for previous day)
let fName = 'Nayem';
console.log(`My first name is ${fName}`);
let array = [ 1.5, BigInt('5'), true, undefined, null, 'String', [1, 'two', true], { name: 'Nayem', age: 23}];
console.log(array);

function display(name, age, birthYear=2001){
    console.log(`Name is ${name}, Age is ${age}, birthyear is ${birthYear}`);
}
display('Nayem', 23, 2000);
display('Hajifa', 22);
display('Sayem');

(function(message){
    console.log('Here is the ' + message);
})('Automatically Invoked Function');

let maths = function(x, y){
    return x + y;
}
console.log(maths(2, 3));
console.log(maths, typeof maths);
function fun3(){
    var a = 5;
    let b = 6;
    return(a*b);
}
console.log(fun3()); */


/* //day - 7
let numbers = [1, 2, 3, 4, 5];
let square = numbers.map(function(number){
    return number * number;
});
console.log(square);

//c type approach
let sQ = [];
for(let i=0; i<numbers.length; i++){
    sQ[i] = numbers[i] * numbers[i];
}
console.log(sQ);
let names = ['Nayem', 'Saadath', 'Rayhan'];
let NAMES = names.map(function(name){
    return 'Mr ' + name;
});
console.log(NAMES);
//arrow function
let add = (x, y) => x + y;
console.log(add(9, 5));

//nested function
function greet(name){
    function sayHello(){
        console.log('Hello Mr ' + name);
    }
    return sayHello();
}
greet(names[0]); */

/* //day -8
const mobile = {
    name: 'Samsung',
    model: 'F22',
    price: 22000,
    hasFinger: true,
    'Selfie Camera': '48MP'
};
console.log(mobile['Selfie Camera']);
const newSymbol = Symbol('Kaisloth-1');
const student = {
    name: 'Hajifa Jui',
    age: 23,
    [newSymbol]: 'chikani'
};
console.log(student[newSymbol]);
console.log(student);
student.name = 'Begum';
console.log(student);
Object.freeze(student);
student.name = 'Changed to :: Jui';
console.log('After using Object.freeze() : ', student);
console.log(student['name']);
console.log(student.hasOwnProperty('name'));
console.log(student.hasOwnProperty('birthYear'));

console.log(Object.keys(student));
console.log(Object.values(student));
const car = {
    name: 'Toyota',
    price: 2000,
    getDetails: function(){
        return `The price of ${this.name} is ${this.price} Euro`;
    }
}
console.log(car.getDetails());
console.log(car);

const obj1 = {
    a: 0,
    b: 1,
    c: 2
};
const obj2 = {
    d: 3,
    e: 4,
    f: 5
};
const obj3 = {
    g: 6,
    h: 7,
    i: 8
};
const objFinal = {obj1, obj2};
console.log(objFinal);
//const objFinal2 = Object.assign(obj1, obj2);
const objFinal2 = Object.assign({}, obj1, obj2);
console.log(objFinal2);
console.log(obj1, 'And', obj2); */

