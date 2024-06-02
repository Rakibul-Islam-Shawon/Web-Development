const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
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


console.log(person.fullName.call(person1));