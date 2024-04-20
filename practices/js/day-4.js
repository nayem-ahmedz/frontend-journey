// js operator till 1:57 mins on 13 April
/*
let userInput = prompt('Enter a number : '); //use prompt for user input, ('for message')
let number = parseInt(userInput); //convert received string value to int
if(number % 2 == 0){
    console.log(`${number} is even number`);
} else{
    console.log(`${number} is odd number`);
} */
let x = 5;
let y = 6;

let a = '9';
let b = 9;
console.log("String a and number b are same ? " + (a==b));
//loose check, only check if both values are same or not; equal to
console.log(a===b); //stricter check, check both value and type; equal v and eq type

console.log(a!=b); //loose checkup 9 and string '9' is same, type conversion when necessary
console.log(a!==b); //strict checkup; not equal value or not equal type
/*
true && true == true, otherways false
true || false == true, only false || false == false
! Logical not, alternative/opposite result
*/
console.log(5**2); //sqrt
let t1 = 5, t2 = 6;
let ter = t1 > t2 ? true : false; //ternary op
console.log(ter);
console.log(typeof ter); //type of a data type
console.log(typeof(t1));
console.log('--------------------------------------')


