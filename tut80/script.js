// const person = {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue"; 

// // Display Data from Object
// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + "."; 