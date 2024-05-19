const person = {
    name: "Rakib",
    age : 27,
    city : "Dhaka"
}

// document.getElementById("demo").innerHTML = person.name + " is "
//  + person.age + " and lives in "+person.city;

let text = "";

for(let x in person){
    text = text + person[x] + " ";
}
// console.log(text);

document.getElementById("demo").innerHTML = text;


