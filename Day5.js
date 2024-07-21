//Task 1
let n = 4;
function evenodd(){
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }

}
evenodd();

//Task 2
let n1 ;
let square
function squarerooot(n1) {
    square = n1*n1;
    return square;
};

console.log(squarerooot(5));

//Task 3
let num1;
let num2;
function maxtwo(num1, num2){
    if (num1>num2) {
        return 'num1';
    }
    else{
        return 'num2';
    }
};
console.log(maxtwo(6,5));

//Task 4
function twostring() {
    return 'heelo' + 'rahul';
}
console.log(twostring());

//Task 5
let num4, num5;

numbersum = (num4,num5) =>{
     return num4+num5;
};
console.log(numbersum(4,5));

//Task 6

checkString = (str1, char)=>{
  if(str1.includes(char)){
    return true;
  }
  else{
    return false;
  }
}
console.log(checkString("Rahul",'m'));

//Task 7
product = (num1,num2=5) => {
  return num1 * num2 ;
}
console.log(product(6));

//Task 8
let age = 18;
person = (name) =>{
  return `person name ${name} person age  ${age}`;
}
console.log(person("Rahul"));

