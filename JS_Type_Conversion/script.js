// let y = "John";
// let x = + y;
// document.getElementById("demo").innerHTML = typeof y + "<br>" + typeof x;



// let x = 123;
// document.getElementById("demo").innerHTML =
//   x.toString() + "<br>" +
//    (123).toString() + "<br>" +
//    (100 + 23).toString();


// document.getElementById("demo").innerHTML =
// (5 + null) + "<br>"  +
// ("5" + null) + "<br>" +
// ("5" + 2) + "<br>" +
// ("5" - 2) + "<br>" +
// ("5" * "2") + "<br>" +
// ("5" / "2") + "<br>"


let x = undefined;
document.getElementById("demo").innerHTML =
"Number : " + Number(x) + "<br>" +
"String : " + String(x) + "<br>" +
"Boolean: " + Boolean(x);