
// document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }


// var x = document.getElementById("myBtn");
// x.addEventListener("click", myFunction);
// x.addEventListener("click", someOtherFunction);

// function myFunction() {
//   alert ("Hello World!");
// }

// function someOtherFunction() {
//   alert ("This function was also executed!");
// }



// var x = document.getElementById("myBtn");
// x.addEventListener("mouseover", myFunction);
// x.addEventListener("click", mySecondFunction);
// x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "You Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "you Clicked! the button<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out! from button <br>";
}