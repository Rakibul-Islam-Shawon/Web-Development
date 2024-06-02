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


// console.log(person.fullName()); //THis will print undefined

console.log(person.fullName.call(person2, "DHaka", "Bangladesh"));