console.log("Rakib is becomming programmer");
console.log("Rifat is a accountant");


setTimeout(()=>{
    console.log("I am inside settimeout");
}, 2000);

setTimeout(()=>{
    console.log("I am inside settimeout 2");
},1000);

console.log("The END, of the program");


const callback = (arg)=>{
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Rakib");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);