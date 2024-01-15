function sum(param1,param2){
    return (param1+param2);
}

console.log(sum(45,88))

const sumAns=(a,b)=>{
    return (a+b);
}

console.log(sumAns(77,87))
stringAns("udbhav ojha")
function stringAns(str){
    let count=0;
    for(const char of str){
        if(char==='a'
         || char==='e'
         || char==='i'
         || char==='o' 
         || char==='u')
         {
            count++;
        }
    }
    console.log(count)
}

// forEach
var val=[11,22,33,44,55];
function clalcSquare(val){
    console.log("square of: ",val," is ",val*val)
}
val.forEach(clalcSquare)