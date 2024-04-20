//js function //till 3:07:00 //till 3:07:00 //till 3:07:00
function myFun(){
    console.log('hello function');
}
myFun();
myFun();
//function, type-1, code-driven invocation
function myFun2(name, age, birthYear = 1999){ //name is function's Parameter, birthYear has default value
    console.log('hello ' + name + ' I am ' + age + ' years old' + ' and my birth year is ' + birthYear);
}
myFun2('Nayem', 24); //here 'Nayem' is Argument
myFun2('Hajifa', 23, 2001);

//function type 2 : Event-driven invocation
//check document day-5

//Automatic (self-invoked) invocation function
(function (){
    console.log('Automatically invoked function');
})();
(function (message){
    console.log('Am I run automatically?', message)
})('Yes');
//write function insdie parenthesis (), another () and ; function name is not required
// Structure : ( function (){ code... })();


//Function Expression ; we can strore a function into a variable
let maths = function (x,y){
    return x * y;
    //if you exclude return, js will return by itself, which will be undefined
    console.log('this statement will be ignored'); //after return no statement will work
}
console.log(maths(2,3));
console.log(maths(3,4));
console.log(maths, typeof maths);

function fun(){
    let f1 = 'Nayem';
    var f2 = 'Ahmed';
    //variable declared in function cannot be accessed outside of function (even var)
    console.log(f1, f2);
}
//console.log(f1, f2); error? why? see up ^
fun();
function fun2(){
    let f1 = 'Nayem'; //same variable name as fun()
    var f2 = 'Ahmed'; //no issue? because of block var (works inside function only)
    //variable declared in function cannot be accessed outside of function (even var)
    console.log(f1, f2);
}
fun2();

//till 3:07:00

