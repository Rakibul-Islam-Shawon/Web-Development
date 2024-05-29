// const fruits = new Map();


// fruits.set(30, 400);
// fruits.set("bananas", 300);
// fruits.set("oranges", 100);

// console.log(fruits);

// console.log(fruits.get("bananas"));


// Create Objects
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// // Create a Map
// const fruits = new Map();

// // Add new Elements to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// console.log(fruits.get(apples));


//Function hoisting


let a = sum(2,3);

function sum(a,b){
    return a+b;
}


console.log(a);
