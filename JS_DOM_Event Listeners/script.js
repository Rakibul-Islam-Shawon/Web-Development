
// document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }


var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
  alert ("Hello World!");
}

function someOtherFunction() {
  alert ("This function was also executed!");
}