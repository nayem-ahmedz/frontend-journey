//Js Maths till 5:49 minutes

//round, ceil, floor
let num = 30.5423456, num2 = 30.4534567;
console.log(Math.round(num), Math.round(num2));

let num3 = 20.4678901; //tho .4 is less than 5 but ceil will round to immedite large
console.log(Math.ceil(num3), Math.floor(num3));

//Square and Root values
console.log(Math.pow(3, 2));
console.log(Math.sqrt(64));

//absolute value, only positive, it will make negative value into pos
console.log(Math.abs(-5));

//min / max
console.log('Minimum : ', Math.min(2, 4, 1, 0, 5, 3));
console.log('Maximum : ', Math.max(2, 1, 6, 8, 3, 4, 0, 5));

console.log('PI = ', Math.PI);

//find value of sin/cos with deg for ex sin180
console.log('sin 180 =', Math.sin((180 * Math.PI) / 180));
console.log('cos 0 =', Math.cos((0 * Math.PI) / 180));

//random number
console.log('Random value :', Math.random());
console.log('Random value (.2):', Math.random().toFixed(2)); //use to .toFixed(number of ..?)
console.log('Random value (among 10)', Math.random().toFixed(2) * 10);

console.log('Random value (<= 10)', Math.random().toFixed(2) * 10+1); //now we can 10 as well
//now if you just want the integer part
console.log('Random value (integer only)', Math.round(Math.random().toFixed(2) * 10));
// console.log('loop start:');
// let t = 100;
// while(t--){
//     console.log('Random value (integer only)', Math.round(Math.random().toFixed(2) * 10));
// }

console.log(Math.round(Math.random().toFixed(1) * 10)); //from 0 to 10

//then => builindg a project : simple ludo game

