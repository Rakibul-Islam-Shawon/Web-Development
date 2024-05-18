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


// const person = {
//     firstName : "Rakibul",
//     lastName  : "Islam",
//     id        : 55455,
//     fullName  : function(){
//         return this.firstName + " " + this.lastName;
//     }

// }

// console.log(person.fullName());


// let x = 5;
// let y = new Number(2);

// console.log(x);
// console.log(y);


//For in loop in JS OBject

const person = {
    fname : " John",
    lname : " Doe ",
    age : 23
};

let txt = '';
for(let x in person){

    txt += person[x];
    
}

console.log (txt);