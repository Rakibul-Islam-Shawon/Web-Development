class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    run(){
        console.log(this.name + " is running");
    }
}

const bmw = new Car("BMW", 1990);
const audi = new Car("Audi", 2001);
const marcedez = new Car("Marcedez", 1980);


// bmw.run();
// audi.run();
marcedez.run();