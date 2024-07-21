//Task 1
let num = [5,4,3,2];
console.log(num);

//Task 2
let f = num[0];
let l = num[num.length-1];

console.log(f, l);

//Task 3-6
let add = num.push(14);
console.log(num);

num.pop(num[num.length-1]);
console.log(num);

num.shift();
console.log(num);
num.unshift(21);
console.log(num);

//Task 7
function add1(x){
    return x+ 2;
}
let complete = num.map(add1);
console.log(complete);

//Task 8
function iseven(x){
    return x % 2 === 0;
}
let even = num.filter(iseven);
console.log(even);

//Task 9

console.log(num);

let output = num.reduce(function(sum, curr){
    
    sum = sum + curr;
    return sum; 
}, 0)
console.log(output);

//Task 10
for(let i = 0 ; i<num.length;i++){
    console.log(num[i]);
}

//Task 11
num.forEach(element => {
    console.log(element);
});

//Task 11
let matrix = [[1,2,3], [4,5,6],[7,8,9]];
console.log(matrix);

//Task 12
matrix.forEach(element => {
    console.log(element);
});