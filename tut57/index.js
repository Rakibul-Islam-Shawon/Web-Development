console.log("I am a loop tutorial");


let a = 1;

// for( let i = 0 ; i< 100; i++){
//     console.log(a + i);
// }

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithRakib"
}

for( const key in obj){
    console.log(key, obj[key]);
}

for(const i of "Rakib"){
    console.log(i);
}