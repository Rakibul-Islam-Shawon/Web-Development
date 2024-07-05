// const myCollection = document.getElementsByTagName("p");

// document.getElementById("demo").innerHTML = 
// "The innerHTML of the second paragraph is: " + myCollection[1].innerHTML;


function myFunction() {
    const myCollection = document.getElementsByTagName("p");
    for (let i = 0; i < myCollection.length; i++) {
      myCollection[i].style.color = "red";
    }
  }