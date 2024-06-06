let a = prompt("Enter first number: ");
let b = prompt("Enter second Number: ");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry you made a mistake.");
}

let sum = parseInt(a) + parseInt(b);


try {
    console.log("The sum is : ", sum*x);
} catch (error) {
    console.log("Error detected");
}
