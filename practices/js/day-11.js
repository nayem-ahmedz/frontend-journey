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


