let car = {
    name: "BMW",
    year: "2004",
    color: "Black",

    start: function(){
        console.log("Car has started.");
    },

    drive: function(){
        console.log("Car has drived.");
    }
}

console.log(car.name);
console.log(car.color);
car.drive();
car.start();