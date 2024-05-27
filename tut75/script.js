console.log("Rakib is becomming programmer");
console.log("Rifat is a accountant");


setTimeout(()=>{
    console.log("I am inside settimeout");
}, 2000);

setTimeout(()=>{
    console.log("I am inside settimeout 2");
},1000);

console.log("The END");
console.log("The END");

const callback = (arg)=>{
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc);
}