//till 4:30:00 on 3 June //could not undestand array.slice method at between 4:25:00 to 4:30:00
/*
// Practice from previous day
const obj1 = {
    x: 0,
    y: 1,
    z: 2
};
const obj2 = {
    p: 1,
    q: 2,
    r: 3
};
const objFinal = Object.assign({}, obj1, obj2);
console.log(objFinal);
const objFinal2 = {...obj1, ...obj2}; //spread operator
console.log(objFinal2);
const mobile = {
    name: 'Samsung',
    price: 22000,
    getDetails: function(){
        return `The name is ${this.name} and price is ${this.price}`;
    },
    battery: {
        type: 'Lithium',
        capacity: 5000
    }
};
console.log(mobile);
console.log(mobile.name);
console.log(mobile.battery.type);
console.log(mobile['battery']['capacity']);
console.log(mobile.getDetails());

//constructor
function Person(){
    this.firstName = 'Nayem',
    this.lastName = 'Ahmed'
};
const p1 = new Person();
const p2 = new Person();
console.log(p1, p2);

function Student(name, age){
    this.name = name;
    this.age = age;
};
const s1 = new Student('Nayem', 24);
console.log(s1);
const s2 = new Student('Hajifa', 23);
console.log(s2);
s1.address = 'Bhadeshwar';
console.log(s1);


//----------------js Array----------------
const names = ['Nayem', 'Ahmed', 'Hajifa'];
const names2 = new Array('Nayem', 'Jui', 'Mister');
console.log(names, names2);
//names = 'one'; will casue !!! error
//console.log(typeof names);

names[1] = 'Begum';
console.log(names);
console.log(names.toString());
console.log(names.length);
console.log(names[names.length - 1]);
*/

function Person(name, age){
    this.name = name;
    this.age = age;
}
const p1 = new Person('Nayem', 24);
const p2 = new Person('Hajifa', 23);
console.log(p1, p2);

const names = ['Nayem', 'Hajifa', 'Jui'];
console.log(names);
console.log('Length is', names.length);
console.log(names.toString());
console.log('the last element is', names[names.length - 1]);

// new Array() !!not recommneded!!
const ar = new Array(10); //if we use only one items in the array
console.log(ar, ar[0], ar.length); //it created array with 10 index(s) 
//but we can use it to declare empty array with fixed size/length

const ar2 = new Array(10, 20);
console.log(ar2, ar2.length);

//some array method
console.log(names.at(0)); //latest introduced approach, same as names[0], use comfort one

console.log(names.join(' > '));
console.log(names.join(2));
console.log(names.join(', '));
//Add or Delete last array element
names.push('Begum');
console.log(names);
names.pop();
console.log(names);

//Add or Delete first array element
names.unshift('Ahmed'); //add a element at first
console.log(names);
names.shift(); //dlt first array element
console.log(names);


//make combined array
const arP = [1, 2, 3, 4];
const arQ = [2, 3, 4, 5];
const arR = [3, 4, 5];
const arComb = arP.concat(arQ, arR);
console.log(arComb);
console.log(arComb.length);
console.log(arP, arP.length);

console.log('------------------------------------------------------');

//using flat to broke array, works one first/only one step
const arAr = [
    [1, 2, 3],
    [2, 3],
    [5, 2],
    [2, 3, [1, 2, 3]] //here we have another array in [3], this will not be flat()
];
console.log('Main array', arAr);
console.log('flat array', arAr.flat(), 'length :', arAr.flat().length);
console.log('Now we will make it flat using another approach');
const flatArray = arAr.flat();
console.log('done', flatArray.flat());
console.log(flatArray.flat().length);


