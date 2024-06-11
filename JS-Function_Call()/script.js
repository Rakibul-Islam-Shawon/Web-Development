const person = {
    fullName: function(city , country, code){
        return this.firstName + " " + this.lastName + " from " + city + " and " + country +" postal code "+code;
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

console.log(person.fullName.call(person3, "DHaka", "Bangladesh", 2100));

// console.log(person.fullName.apply(person2, ["DHaka", "Bangladesh", ]));

// console.log("ENter the value of a, b, c: ");

// console.log(Math.max(10,20,300));

// console.log(Math.max.apply(null, [4,3,6]));


// function mulitple(a,b){
//     return a*b;
// }

// console.log(mulitple(300,400));


// function division(a,b){
//     return a/b;
// }

// console.log(division(300,400));

function sum(a,b){
    let sum = a+b
    return sum;
}

console.log(sum(300,400));