// from 6:56 to end 

// Js Memory

/*
    Call Stack
    Primitive Data Types
    Number, String, Boolean, null, undefined, BigInt, Symbol

*/
let fullName = 'Nayem Ahmed';
let developer = fullName;

developer = 'Ahmed Nayem'; //will not chnage it's origin

console.log(fullName);
console.log(developer);

/*
    Heap
    Non-Primitive Data Types
    Object, Array
    
*/

let student = {
    name: 'Nayme',
    age: 23
};
let people = student;

people.name = 'Hajifa'; //will chnage it's origin as well
people.age = 22;

console.log(student);
console.log(people);

let cars = ['BMW', 'Audi'];
let cars2 = cars;

cars2[0] = 'Toyota';

console.log(cars);
console.log(cars2);

//end of js memory

//js conditional statements

//if else
let age = 4;
if(age > 40){
    console.log('Your\'e Adult and over 40 Years Old');
} else if(age > 18){
    console.log('You\'re Adult');
} else{
    console.log('You\'re Not a Adult');
}

//switch (alternative to if-else which is not efficient (?google it))
let category = 'bus';
let carType;

switch(category){
    case 'car':
        carType = 'This is a car';
        break;
    case 'bus':
        carType = 'This is a bus';
        break;
    default:
        carType = 'Unknown vehicle type';
}
console.log(carType);

//check run time of if-else and switch
/*
fewer codntions : if-else otherways Switch
complex conditions : if-else otherways switch

** Modern JavaScript engines like V8 (used in Chrome and Node.js) are highly optimized, and they often optimize both if-else and switch statements efficiently. Therefore, in most real-world scenarios, the performance difference is minor, and the primary consideration should be code clarity and maintainability. **
*/

//Js Loops

//for loop
let myCars = ['Toyota', 'BMW', 'Audi', 'Ferari'];
myCars.push('Berari');
myCars[0] = 'Boyota';

for(let i=0; i<myCars.length; i++){
    console.log(myCars[i]);
}


console.log('For In Loop');
//for In loop :: used in objects
const studentX = {
    name: 'Nayem',
    age: 23,
    year: 'Third'
};
//console.log(studentX);
for(let i in studentX){
    //console.log(studentX[i]);
    //console.log(i + ': ' + student[i]);
    //console.log(i.toUpperCase() + ': ' + studentX[i]);
    let capitalize = i.charAt(0).toUpperCase() + i.slice(1);
    console.log(capitalize + ': ' + studentX[i]);
}

//notes on slice() function
const names = ['Nayem', 'Hajifa', 'Jui', 'Ahmed'];
let firstLetter = names[0].charAt(0);
let afterFirstLetter = names[0].slice(1);
console.log(firstLetter);
console.log(afterFirstLetter);
const middleNames = names.slice(1, 3);
console.log(middleNames);

console.log('----------------clear------------------');

//for each loop
const seniors = ['Nayem', 'Hajifa', 'Jui'];
seniors.forEach(function(element){
    console.log(element);
})

//for off loop
for(let i of seniors){
    console.log('For of : ' + i);
}

//using in loop in array
for(let i in seniors){
    console.log('index ' + i + ' : ' + seniors[i]);
}
//what I have learnt from here? for in is used in Object, and for, for each, for of can be used for array and so on ;
//for in i = key, for of i = value



//while loop
let test = 0;
while(test < 10){
    console.log(test);
    test++;
}
console.log('------------Ahlahmdulillah--------done---------------');


//do while (from me)
test = 0;
do{
    console.log(test);
    test++;
}while(test < 10);






/*
//practice form previous day : js Date()

const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);
console.log(myDate.toLocaleString('default', {
    weekday: 'long'
}));

const upDate = new Date(2024, 5, 12, 4, 49, 20);
console.log(upDate.toString());

const upDate2 = new Date('6-13-2024');
console.log(upDate2.toString());
let myTime = Date.now();
console.log(myTime);


let startTime = Date.now();
let i = 0;
while(i<100){
    //console.log(i);
    i++;
}
let endTime = Date.now();
console.log('It takes', (endTime - startTime), 'm seconds');

const today = new Date();
console.log(today.getFullYear());
console.log(today.toLocaleString('default', {
    month: 'long'
}));

//best practice :: use correct local instead of default
const today2 = new Date();
const fullYear = today2.getFullYear();
const month = today2.toLocaleString('en-US', {
    month: 'long'
});
console.log(`Month is : ${month}, and year is : ${fullYear}.`);

*/