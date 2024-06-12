//JS from 5:49 to 6:37 minutes

//JS Numbers
let num = 999999999999999; //15 digit(highest) of  number is perfect for dT = Number 
let num2 = 9999999999999999; //incase of 16 digits it may result error/unexpected result
console.log(num);
console.log(num2);
let num3 = 5555555555555555; //16 digits but not (digit = highest = 9); may work
console.log(num3); //best practice to keep 15 digits for dT = Number

//in js prececeion issue
let x = 0.6;
let y = 0.7;
console.log(x+y); //why it is 1.29999999...8 ? //this may happens sometime
//because processor arc of 64 bits, number sysytem, but if we use .2f than it will be 1.30

console.log((x * 10 + y * 10));
console.log((x * 10 + y * 10) / 10); //this way we can also get expected result

console.log((x+y).toFixed(1)); //decimal prececion approach

let z = x + y;
console.log('Value of z is :', z.toFixed(2));

//Rem : if you use toFixed it will be a string, than you may need to parseInt
console.log(typeof z); //remain number ; only if we use it to store number, example below
let zz = (x + y).toFixed(2); 
console.log('ZZ :', zz, 'type is', typeof zz); //type = string

//console.log(new Number(zz));//this will create a new object for this number; not recommended

let aa = 10, bb = 20;
console.log(aa + bb + zz); //number + number + string = string
console.log(zz + aa + bb); //string + number + number = string
//unexpected result during + operator; it will concatenate if string is found but
console.log(aa - zz); //corect output, also *, / and others will work, due to auto type conversion 

let cc = 'Javascript';
//console.log(aa - cc); //NaN : Not A Number
let ee = aa - cc;
console.log(ee, ', and type is ', typeof ee);

//size : for number 15 digits
//size : for decimal number 17 digits after decimal point

//largest number is Infinty
let x1 = 2;
let x2 = '';
while(x1 != Infinity){
    x1 = x1 * x1;
    x2 = x2 + x1 + ' ';
}
console.log(x2);

//base conversion :: decimal to hex, oct, bin
const myValue = 248;
console.log('Binary is :', myValue.toString(2));
console.log('Hexa DEcimal is:', myValue.toString(16));
console.log('Ocatal is :', myValue.toString(8));

let rr = 9999;
console.log(rr.toPrecision(3)); //not recommended, use toFixed
console.log(rr.toFixed(3));



//--------------------------------------------------------------------------------------
// next : js number method (remaining)
//--------------------------------------------------------------------------------------




/*
// Practice from preveious day :: JS MATH
let num = 5.9;
const PI = 3.1416;
console.log(Math.floor(num));
console.log(Math.ceil(PI));

let num2 = -15, num3 = 6;
console.log(Math.abs(num2));

console.log(Math.pow(2,3));
console.log(Math.sqrt(81));


console.log(Math.min(1, 3, 2, 5, 6, 3, 8), Math.max(1, 3, 2, 5, 6, 3, 8));
console.log(Math.PI);
console.log(Math.sin((180 * Math.PI) / 180));

//random number
console.log(Math.random());
console.log(Math.random().toFixed(3));
let t;
const arRanTen = [];
console.log(Math.floor(Math.random().toFixed(2) * 6) + 1); //efficient than round

//print random numbers from 1 to 10 (only integers)
console.log('print random numbers from 1 to 10 (only integers)');
for(t=0; t<10; t++){
    arRanTen[t] = Math.floor(Math.random() * 10) + 1;
}
console.log(arRanTen.join(', '));
*/