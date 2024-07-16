// Task 1-5
let num1 = 20;
let num2 = 5;

let sum = num1 + num2;
let diff = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let remainder = num1 % num2;

console.table([sum, diff, mul, remainder, div] );

// Task 6-7
 let x = 5;
 x+=5;
 let y = 10;
 y+=5;

 console.table([x,y]);

// Task 8-10
let numm1 = 20;
let numm2 = 25;
if(numm1 > numm2){
    console.log("numm1 is greater");
}
else{
    console.log("numm2 is greater");
}

// Task 11
let age = 200;
if (age>18 && age<40) {
    console.log("you can drive")
}
else{
    console.log("you cant drive")
}

// Task 12
let age1 = 41;
if (age1>18 || age1<40) {
    console.log("you can drive")
}
else{
    console.log("you cant drive")
}

//Task 13
let fruit = "apple";
if (fruit != "Mango") {
    console.log("true");
    
}
else{
    console.log("false");
}

//Task 14
let age2 = 41;
const check = age2 > 18 ? "drive" : "not drive";
console.log(check);

