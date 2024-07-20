//Task 1
let num = 0;
if (num == 0) {
    console.log("Zero");
}
else if (num > 0) {
    console.log("Positive");
} else {
    console.log("negative");
}

//Task 2
let age = 17;
if (age>=18) {
    console.log("vote");
} else {
    console.log("can't vote");
} 

//Task 3
let num1 = 10; 
let num2 = 11; 
let num3 = 12; 

if (num1 > num2 && num1 > num3) {
    console.log("num1");
}
else if (num2 > num1 && num2 > num3) {
    console.log("num2");
} 
else if(num3 > num1 && num3 > num2) {
    console.log("num3");
}

//Task 4
let day =5;
switch (day) {
    case 1:
        console.log("Sun");
        break;
    case 2:
        console.log("Mon");
        break;
    case 3:
        console.log("Tue");
        break;
    case 4:
        console.log("Wed");
        break;
    case 5:
        console.log("Thrus");
        break;
    case 6:
        console.log("Fri");
        break;
    case 7:
        console.log("Sat");
        

        
        break;

    default:
        console.log("Enter Valid Date");
        break;
}

//Task 5
let score = 95;
let grade;
switch (true) {
    case score > 90:
        grade = 'A';
        break;
    case score > 80:
        grade = 'B';
        break;
    case score > 70:
        grade = 'C';
        break;
    case score > 60:
        grade = 'D';
        break;


    default:
        grade = 'F';
        break;
}
console.log(grade)

// Task 6
let num4 = 20;
const check = num4 % 2 == 0 ? "Even" : "Odd";
console.log(check);

//Task 7
let year = 2000 ;
if ((year % 4 == 0 && year % 100 != 0) ||(year % 400 == 0) ) {
    console.log("leap year");
}
else{
    console.log("Not a leap year");
}