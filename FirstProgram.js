console.log("Hello, World..!!")
console.log("Hello, World..!!")

const name="Udbhav Ojha"
var age=24;
console.log("Name: ",name,"age: ",age)
 for(let i=1;i<=10;i++){
    console.log("2 x ",i," =",2*i)
 }
// let:block scope based, can't re-declared but can be updated
// var:global scope based, can be re-declared and can be updated
// const:block scope based, can't re-declared but can't be updated

// data type
let fullName="Udbhav Ojha";
let myAge=102.34
let result=true;
let num=null
let x;
console.log(fullName, typeof fullName);
console.log(myAge, typeof myAge);
console.log(result, typeof result);
console.log(num, typeof num);
console.log(x, typeof x);

// non-premitive (collections of different ariables in key value papir)
let studentData = {
    firstName: "Udbhav",
    secondName: "Ojha",
    cgpa: 8.3,
    passOut: true
};
console.log(studentData, typeof studentData);

// product object
const penProduct={
    nameOfProduct:"Pen from Peter Parker",
    description:"Parker Jotter standard ball pen",
    rating:4.3,
    customerNumber:7002,
    price:220,
    isOnGoingDeal:true
}
console.log(penProduct);