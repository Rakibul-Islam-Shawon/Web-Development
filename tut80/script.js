// const person = {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue"; 

// // Display Data from Object
// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
  
//   // Create a Person object
//   const myFather = new Person("John", "Doe", 50, "blue");
  
//   // Display age
//   document.getElementById("demo").innerHTML =
//   "My father is " + myFather.age + "."; 

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
  }
  
  // Create 2 Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Display nationality
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.nationality + ". My mother is " + myMother.nationality;