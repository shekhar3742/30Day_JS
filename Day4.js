//Task 1
for (let index = 1; index <= 10 ; index++) {
    console.log(index);
    
}
//Task 2
console.log("-----TASK 2-----");

for (let index = 1; index <= 10 ; index++) {
    console.log(index*5);
    
}

//Task 3
console.log("-----TASK 3-----");
let sum = 0;
for (let index = 1; index <= 10; index++) {
   
    sum =  index+sum;
   sum++;
    
    
}
console.log(sum);

//Task 4
console.log("-----TASK 4-----");

let num=10 ;
while (num >= 1) {
    console.log(num);
     num--;
    
}

//Task 5
console.log("-----TASK 5-----");
let n=0;
do {
    n++;
     console.log(n);
} while (n <5 );

//Task 6
console.log("-----TASK 6-----");
let number = 5;
let fact = 1;
let j = number;
do {
    fact = fact *j;
    j--
} while (j > 0);
console.log(fact)

//Task 7
console.log("-----TASK 7-----");
let n1 = 5;
for (let i= 0 ;i <=n1 ; i++){;
    let star = "";
    for(let j = 0; j< i;j++){
         star+= "*";
    }
    console.log(star);
}

//Task 8
console.log("-----TASK 8-----");
for(let i=1; i<=10; i++){
    if(i==5){ continue;}
    console.log(i);
}
//Task 9
console.log("-----TASK 9-----");
for(let i=1; i<=10; i++){
    if(i==7){ break;}
    console.log(i);
}