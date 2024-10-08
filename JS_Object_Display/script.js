// const person = {
//     name: "Rakib",
//     age : 27,
//     city : "Dhaka",
//     today: new Date()
// }

// // document.getElementById("demo").innerHTML = person.name + " is "
// //  + person.age + " and lives in "+person.city;

// // let text = "";

// // for(let x in person){
// //     text = text + person[x] + " ";
// // }
// // // console.log(text);

// // document.getElementById("demo").innerHTML = text;

// let myString = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myString;

// console.log(myString);



//Getter and Setter

// const person = {
//     firstName: "Rakib",
//     lastName: "Hasan",
//     language: "bn",

//     get fullName(){
//         return this.firstName+" "+ this.lastName;
//     },

//     get lang(){
//         return this.language;
//     }
// };

// console.log(person.fullName);
// console.log(person.lang);




//Setter

// const person = {
//     firstName : "Rakib",
//     lastName : "Hasan",
//     language: "",

//     set lang (key){
//         this.language = key;
//     }
// };


// person.lang = "Bn";

// console.log(person.language);




//Object constructor function 

function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}


const rakib = new Person("Rakib", "Hasan", 29);
const rifat = new Person("Rifat", "Kazi", 26);

rakib.country = "Bangladesh";

// console.log(rakib);
// console.log(rifat);


//It is not possible to add property in constructor for example

//Person.nationality = "Bengali"; // This will not work


//Prototype

// Person.prototype.nationality = "Bengali";


// console.log(rakib.nationality);


const letters = new Set(['a','b','c']);

// const letterIterator = letters.values();

const letterIterator = letters.keys();

for(let a of letterIterator){
    console.log(a);
}