// for loop
var sum=0;
for(let i=1;i<=10;i++){
    console.log("2 x ",i," =",2*i)
    sum+=i;
 }
 console.log("Sum: ",sum);

//  while
 let i=0
 while(i<=10){
    console.log(i)
    i++;
 }

//  do while
 let j=1
 do{
    console.log("3 x ",j," =",3*j)
    j++
 }while(j<=10);

//  for of (String, Array iterate)
let str="Udbhav Ojha"
for(let i of str){
    console.log(i)
}

// for in (object)

const studentDetails={
    studentName:"Udbhav Ojha",
    age:24,
    gender:'M',
    phNum:8709796488
}
for(let key in studentDetails){
    console.log("key:",key," value:",studentDetails[key])
}