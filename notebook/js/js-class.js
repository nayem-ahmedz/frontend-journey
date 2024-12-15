class Car{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getDesc(date){
        return `Name is ${this.name}, price is ${this.price}$, dated on ${date}`;
    }
}

let c1 = new Car('Toyota', 1200);
console.log(c1.getDesc('15 Dec'));
c1 = new Car('Audi', 1500);
console.log(c1.getDesc('16 Dec'));

class Model extends Car{
    constructor(name, price, model){
        super(name, price);
        this.model = model;
    }
    getFullDesc(date){
        return this.getDesc(date) + ' and Model is ' + this.model + ' ...';
    }
}

let myCar = new Model('BMW', 2500, 'B-001');
console.log(myCar.getFullDesc('20 Dec'));