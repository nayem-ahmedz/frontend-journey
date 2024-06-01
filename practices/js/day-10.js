// from 3:39 to 
// Modern approach to combine objects (using Spread Operator : ...)
const obj1 = {
    x: 1,
    y: 2,
    z: 3
};
const obj2 = {
    p: 1,
    q: 2,
    r: 3
};
const objFinal = {...obj1, ...obj2}; //this will broke those object and make a combined one using all object property //modern approach and also memory efficient

console.log(obj1, obj2, objFinal);
const mobile = {
    name: 'Samsung',
    price: 22000,
    getDetails: function(){
        return `The name of the mobile is ${this.name} and price is ${this.price}`;
    },
    battery: {
        type: 'Lithium Ion',
        capacity: 5000        
    }
};
console.log(mobile.battery.type, mobile.battery.capacity); //use dot to select object inside object
console.log(mobile['battery']['type'], mobile['battery']['capacity']); //using [] not

//Another way to take object is by Constructor
function Person(){
    this.firstName = 'Nayem',
    this.lastName = 'Ahmed'
};
const person1 = new Person();
const person2 = new Person();
console.log(person1);
console.log(person2);


