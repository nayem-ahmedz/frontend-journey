//practice of day-18

//js memory
//call stack
let fullName = 'Nayem Ahmed';
let dev = fullName;
dev = 'Ahmed Nayem';

console.log(fullName);
console.log(dev);

//heap
const student = {
    name: 'Nayem Ahmed',
    age: 23
};
const people = student;
people.name = 'Hajifa Jui';
console.log(student);
console.log(people);

const cars = ['Toyota', 'BMW', 'Audi'];
const myCars = cars;
myCars[0] = 'Marcedes';
myCars.pop();

console.log(cars);
console.log(myCars);

//js conditional statement
let age = 18;
if(age>=18){
    console.log('You are ready to vote!');
} else if(age<18 && age>6){
    console.log('You are not ready to vote!');
} else{
    console.log('You are a child!');
}

//switch (more efficient than if-else)
age = 17;
switch(age){
    case 18:
        console.log('You are Ready to vote!');
        break;
    case 17:
        console.log('Not ready to vote');
        break;
    default:
        console.log('You are a child');
}
/* adopted by the knowledge of chatGPT
let age = 5;
switch(true){
    case (age >= 18):
        console.log('Avove 18');
        break;
    case (age < 18 && age > 6):
        console.log('Under 18');
        break;
    default:
        console.log('You are a child' , age);
} */


//for loop
let i;
for(i=0; i<cars.length; i++){
    console.log(cars[i]);
}

//for in loop
for(let i in student){
    console.log(i, ':', student[i]);
}
const Ppl = function(name, age){
    this.name = name;
    this.age = age;
}
const p1 = new Ppl('Hajifa', 23);
console.log(p1);
for(let i in p1){
    let capitalize = i.charAt(0).toUpperCase() + i.slice(1);
    console.log(capitalize, ':', p1[i]);
}

console.log('-----------For of loop----------------');

const seniors = ['Nayem', 'Hajifa', 'Jui'];
for(let i of seniors){
    console.log(i);
}

//using for in here
for(let i in seniors){
    console.log('index:', i, 'value', seniors[i]);
}

//for each method
console.log('----------------foreach method()------------')
seniors.forEach(function(element){
    console.log(element);
})


//while loop
let j = 0;
while(j<5){
    console.log(j);
    j++;
}

//do while loop
let test = 0;
do{
    console.log('test value :', test);
    test++;
}while(test<3);

console.log('----------------Alhamdulillah------------------');