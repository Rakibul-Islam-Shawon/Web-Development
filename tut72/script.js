console.log("Script initializing");

let boxes = document.getElementsByClassName("box");



function getRandomColor(){
    let val1 = Math.random();
    let val2 = Math.random();
    let val3 = Math.random();


    return `rgb(${val1}, ${val2}, ${val3})`;
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})