//day -1 js

let a = 5;
{
    let a = 10;
    let b = 2; //Block scope, cannot be used from outside this block
    const b2 = 2; //also block scope
    var c = 3; //Global scope
    console.log(a);
}
console.log(a);
//console.log(b);
console.log(c);

var z = 5;
//let z = 6; //not allowed

const PI = 5;
{
    console.log(PI);
    const SI = 7;
}
// console.log(SI); //block variable, cannot be used outside block, where it was declared/initialized
console.log("Const Arrays now ");
const cars = ["BMW", "Audi"];
console.log(cars);
cars[1] = "Body";
cars.push("Ducati");
console.log(cars);
// cars = ["A", "B"] //Error, cant reassign an const array

//Const object
const car = {
    type : "Four Wheeler",
    model : 2005,
    color : "red"
};
console.log(car);
car.model = 2011; //chnage a property
car.owner = "Nayem"; //add a property
console.log(car);
/*car ={
    type : "Five Wheeler",
    model : 2001
}; */ //Error, cannot reassign const object

