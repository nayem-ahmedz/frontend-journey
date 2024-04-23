//till 3:39:00 learnt JS Objects

//use const to declare object; consider best practice
const mobile = {
    name: 'Samsumg',
    model: 'F22',
    hasFinger: true,
    price: 20050,
    'selfie camera': '14MP'
};
//console.log(mobile);
//Access object keys in two notation . and bracket['']
console.log(mobile.name);
console.log(mobile['model']); //you have to use '' to let js engine understand that it's a string, object's// 'model' = 'F22' ; here '' is not requred, automatically == key = string
console.log(mobile['selfie camera']); //why [''] ?
const newSymbol = Symbol('key1');
const student = {
    name: 'Hajifa',
    age: 23,
    [newSymbol]: 'chikani'
};
//console.log(student.newSymbol);   will not work X
console.log(student[newSymbol]);
console.log(student);
//js object can be taken in two ways 1. object material (see up) 2. constructor (in another vid)
student.name = 'Nayem';
console.log(student.name);
Object.freeze(student); //object student will be freeze; cannot be chnaged after this line
student.name = 'Jui'; //it will not work
console.log(student.name);
console.log(student.hasOwnProperty('age')); //to verify if it has following property in it
console.log(student.hasOwnProperty('grade')); // false because it does not have grade
//console.log(student.hasOwnValues('23'));      !find it

console.log(Object.keys(student)); // to check array of all keys in a obj
console.log(Object.values(student)); // to check array of all values in a obj
const car = {
    name: 'Toyota',
    model: 'Toy 112',
    price: 1200,
    printPrice: function(){ //object can hold function as well
        return `The price of ${this.name} is ${this.price}`;
    }
};
console.log(car.printPrice()); //calling a function/method() of a object

const obj1 = {
    a: 0,
    b: 1,
    c: 2
};
const obj2 = {
    p: 3,
    q: 4,
    r: 5
};
const obj3 = {
    x: 6,
    y: 7,
    z: 8
};
//const objFinal = {obj1, obj2};
//console.log(objFinal); //we want one object holding both property from given objects
//so we will approch diffrent method
/*const objFinal = Object.assign(obj1, obj2); //Object.assign(target, source)
console.log(objFinal);
console.log(obj1); */ //it has changed obj1, actually source is copied to obj1, then objfinal, so will will use {} as target, this will be memory efficeient
const objFinal = Object.assign({}, obj1, obj2); //memory efficent approach
console.log(objFinal);
console.log(obj1);
