// Arithmatic operator +,-,*,/,++,--,%

let a=40
let b=30
console.log("a:",a," b:",b)
console.log("+:",a+b)
console.log("-:",a-b)
console.log("*:",a*b)
console.log("/:",a/b)
console.log("%:",a%b)
console.log("--:",(--a) + (--b)) //--a =39 , --b=29 pre-increment/decrement first update then store 
console.log("++:",(a++) + (b++)) //a++=39 , b++=29 (after storing current value it increases the value by 1) post-increment/decrement first store then update
console.log("a:",a,"b:",b)

// ** used find out power
console.log(5**4)

// comparision operators ==, ===, >=,<=,<,>,!==,!= it return boolean value

let num1=10
let num2=20

console.log(num1==num2) //false
console.log(num1===num2) //false
console.log(num1>=num2) //false
console.log(num1<=num2) //true
console.log(num1!=num2) //true
console.log(num1!==num2) //true
console.log(num1>num2) //false
console.log(num1<num2) //true

// logical operator ||, &&, ! returns boolean and conditional statement
//&& - both conditions must be true
if(a%2==0 && b%2==0){
    console.log("even")
}else{
    console.log("odd")
}

// || - either of the condotion must be true

if(a>=10 || b<=20){
    console.log("good number")
}else{
    console.log("bad number")
}

// if(10=='10'){
//     console.log("matched")
// }else{
//     console.log("Not Matched")
// }


