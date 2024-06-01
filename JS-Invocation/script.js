// function a(){
//     console.log("I am a function");
// }

// window.a();

function myFunction(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}

const myObj = new myFunction("Rakib", "Khan");

console.log(myObj.firstName);