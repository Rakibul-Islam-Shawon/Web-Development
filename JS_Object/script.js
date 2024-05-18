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

person.fullname = function(){
    return (this.fname + " " + this.lname).toUpperCase();
}

console.log(person.fullname());

// let txt = '';
// for(let x in person){

//     txt += person[x];
    
// }

// console.log (txt);

// person.country = "Germany";  //Adding new property

// console.log(person);

// delete person.age;      //deleting property
// console.log(person);


//Nested Object

// const myObj = {
//     name : "Rakib",
//     age : 29,

//     cars : {
//         car1: "BMW",
//         car2: "Porsche",
//         car3: "Audi"
//     }
// };


// console.log ( myObj.cars.car2);


// const myObj = {
//     name : "Rakib",
//     age : 29,

//     cars : [
//         {cname: "BMW", models:["12", "Focus"]},
//         {cname: "Porsche", models:["320", "x3", "x5"]},
        
//     ]
// };

// for(let i in myObj.cars){
//     console.log(myObj.cars[i].cname);
//     for(let j in myObj.cars[i].models){
//         console.log(myObj.cars[i].models[j]);
//     }
// }