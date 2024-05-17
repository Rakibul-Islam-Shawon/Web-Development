// const car = {
//     name: "BMW",
//     year: "2004",
//     color: "Black",

//     start: function(){
//         console.log("Car has started.");
//     },

//     drive: function(){
//         console.log("Car has drived.");
//     }
// }

// console.log(car.name);
// console.log(car.color);
// car.drive();
// car.start();


const person = {
    firstName : "Rakibul",
    lastName  : "Islam",
    id        : 55455,
    fullName  : function(){
        return this.firstName + " " + this.lastName;
    }

}

console.log(person.fullName());