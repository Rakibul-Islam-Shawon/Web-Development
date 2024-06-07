const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

// Display Data from Object
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";