//till 3:39:00 learnt JS Objects
//practice sesion

const newSymbol = Symbol('obbash');
const student = {
    name: 'Hajifa',
    age: 23,
    active: true,
    'love whom': 'Nayem',
    [newSymbol]: 'chikani',
    greet: function(){
        console.log('Hey!');
        return `I am ${this.name} and I am ${this.age} years old`;
    }
};
console.log(student.name);
//console.log(student['love whom']);
//console.log(student[newSymbol]);
//console.log(student);

student.name = 'Nayem';
console.log(student.name);
Object.freeze(student);
student.name = 'Ahmed';
console.log(student.hasOwnProperty('age'));
console.log(Object.keys(student));
console.log(Object.values(student));

console.log(student.greet());
const obj1 = {
    a: 1,
    b: 2,
    c: 'value 3'
};
const obj2 = {
    e: 4,
    f: 5,
    g: 'value 6'
};
//const objFinal = {obj1, obj2};
//console.log(objFinal, obj1);
const objFinal = Object.assign({}, obj1, obj2);
console.log(objFinal);
console.log(obj1);
console.log(Object.keys(objFinal));
console.log(Object.values(objFinal));
