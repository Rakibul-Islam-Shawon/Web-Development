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

const person = {
    firstName: "Rakib",
    lastName: "Hasan",
    language: "bn",

    get fullName(){
        return this.firstName+" "+ this.lastName;
    },

    get lang(){
        return this.language;
    }
};

console.log(person.fullName);
console.log(person.lang);