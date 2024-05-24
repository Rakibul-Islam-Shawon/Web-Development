
let button = document.getElementById("btn");

button.addEventListener("click", ()=>{

    document.querySelector(".box").innerHTML = "Your clicked working.";
})

button.addEventListener("dblclick", ()=>{

    document.querySelector(".box").innerHTML = "Your double clicked working.";
    
})