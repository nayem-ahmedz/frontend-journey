// Day 2 JS

var a, b, c;
a = 30; b = 6;
c = a / b;
console.log(c);

let t1 = 'A';
let t2 = 'B';
console.log(t1<t2);

let fName = "Nayem";
let lName = "Ahmed";
console.log(fName + " " + lName);
fName += " Ahmed"; // += also adds/concatenate Strings
console.log(fName);

//If you add a number and a string, the result will be a string!
let x = 5 + 5; //10
let y = "5" + 5; //55
let z = "Hello " + 5; //Hello 5
console.log(z);

let xx ="marks : " + 5 + 5 ; //marks : 55
let xy = 5 + 5 + " Marks"; // 10 Marks
let xyz = 5.55555;
console.log(typeof(xyz));

console.log(5%2);
let e = 5;
console.log(e++);
console.log(e);
console.log(++e);
console.log(2**3); // 2 to the power 3
console.log(Math.pow(2,3)); //same as 2**3
let f = 10;
f **= 2;
console.log("Result of f^2 is : " + f );

console.log("line upto 38");
//predecence
console.log( 100 + 5 * 2 );
console.log( (100 + 5) * 2 );
console.log( 5 * 2 * 6 / 2 );

let x2 = true;
x2 = 5;
x2 = "Dynamically chnaged Datatype";
console.log(x2);
x3 = 55e-5;
x4 = 33e2;
console.log(x3);
console.log(x4);
let x5 = BigInt("123456789012345678901234567890");
console.log(x5);

console.log(x3==x4);
console.log(x3!=x4);

const cars = ["Toyota", "BMW", "Volvo"];
console.log("Car in 0 index is : " + cars[0]);

const person = {
    firstName: "Nayem",
    lastName: "Ahmed",
    age: 23
};
console.log(person.firstName + " is " + person.age + " years old.");
console.log(typeof person);
let x6;
console.log("Type of x6 variable is : " + x6 + " because the value was not assigned yet");
let x7 = "ValueAble";
x7 = undefined;
console.log(x7);
let x8 = "";
console.log("The value of x8 is : " + x8 + " And the data type is : " + typeof(x8));
