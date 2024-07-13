// const myObject = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   document.getElementById("demo").innerHTML = myObject.fullName();



const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.getElementById("demo").innerHTML = person.fullName.call(person1); 