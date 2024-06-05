const person = {
    fullName: function(city , country){
        return this.firstName + " " + this.lastName + " from " + city + " and " + country;
    }
};


const person1 = {
    firstName: "Rakib",
    lastName: "Islam"
};

const person2 = {
    firstName: "Hasib",
    lastName: "Hasan"
};

const person3 = {
    firstName: "Hasin",
    lastName: "Haider"
};


// console.log(person.fullName()); //THis will print undefined

console.log(person.fullName.call(person3, "DHaka", "Bangladesh"));

// console.log(person.fullName.apply(person2, ["DHaka", "Bangladesh"]));

// console.log("ENter the value of a, b, c: ");

console.log(Math.max(10,20,300));

console.log(Math.max.apply(null, [4,3,6]));