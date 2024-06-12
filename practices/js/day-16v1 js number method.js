//from 6:37 to 6:39:00

//-----js number methods
let num = Number.EPSILON;
num = Number.MAX_VALUE;
num = Number.MIN_VALUE;
num = Number.POSITIVE_INFINITY;
num = Number.NEGATIVE_INFINITY;
num = Number.NaN;
num = Number.MAX_SAFE_INTEGER;
//console.log(num);






/*
practice from day-15.js
let x = 0.6;
let y = 0.7;
console.log((x * 10 + y * 10) / 10);
console.log((x+y).toFixed(2));
let x2 = 100 / 3;
//x2 = x2 * 3; // x * 3 == 100
x3 = (100 / 3).toFixed(2);
//x3 = x3 * 3; // x * 3 == 99.99
console.log(x2, x3);
console.log(typeof x3); //type == string, because we used toFixed(1);

let x4 = parseFloat(x3);
console.log(x4, typeof x4);

let x5 = 'Javascript';
console.log(x5 - x4); //not a number = NaN;
console.log(x4- x5); //same, string - number
//but number - 'number';
let b1 = 10, b2 = '10';
console.log(b1- b2, 'and', b2 - b1); // 0 and 0 :: due to auto type conversion
console.log((b1 * 3.32134567).toFixed(17));

//infinte number
let c1 = 2;
let c2 = '';
while(c1 != Infinity){
    c1 = c1 * c1;
    c2 = c2 + c1 + ' ';
}
console.log(c2);

const myNum = 11;
console.log(myNum.toString(8));

// console.log('Binary 0 to 50');
// let series = 0;
// for(let j=0; j<50; j++){
//     console.log(series.toString(2)); //toString(base) try using 10, 8, 16
//     series += 1;
// }

let xx = 1225.51234;
console.log(xx.toPrecision(3)); //why three?
console.log(xx.toFixed(2));

//comparision of toP and toF
let num1 = 123.456;
console.log(num1.toPrecision(4)); // "123.5" (4 significant digits)
console.log(num1.toFixed(4));     // "123.4560" (4 digits after the decimal point)

let num2 = 0.00123456;
console.log(num2.toPrecision(4)); // "0.001235" (4 significant digits)
console.log(num2.toFixed(4));     // "0.0012" (4 digits after the decimal point)
*/



/*
practice --
const nums = [1, 4, 3, 2, 1, 6, 7];
//console.log(nums);
const nums2 = [2, 4, 5, [2, 1]];
const comb = [...nums, ...nums2];
//console.log(comb);
const comb2 = nums.concat(...nums2);
console.log(comb2);
console.log(Math.min(...comb2), Math.max(...comb2));

let i = 0, six = 0;;
while(i<100){
    let num = Math.random() * 6;
    num = Math.ceil(num);
    if(num===6){
        six++;
    }
    i++;
}
console.log(six);

*/