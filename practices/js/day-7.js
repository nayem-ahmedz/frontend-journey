//Function completed ; till 3:11:34


let numbers = [2, 3, 4, 5];
let sqrt = numbers.map(function(number){
    return number * number;
});
console.log(sqrt);

// Regular JS Function
let add = function(x, y){
    return x + y;
}
console.log(add(5, 6));

//Arrow Function
let ADD = (x, y) => x + y; 
console.log(ADD(2, 5));

//Nested Function
function greet(firstName2){
    function sayHello(){
        console.log('Hello ' + firstName2);
    }
    //sayHello(); this will also work, however
    return sayHello(); //will be automatically called
}
greet('Nayem');


