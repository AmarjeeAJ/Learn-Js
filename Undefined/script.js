// this is print undefined bcoz variable is declare after the access
           
console.log(a) 
var a;
a =10;


// console.log(x)   // this is print not-defined bcoz variable is not declare in this scope 

 
if(a === undefined) {
    console.log("a is undefined ")
} else {
    console.log("a is not undefined ")
}



// js is loosely type language which onec you define the variable is number and same variable you define string and character it is possible in js 

var b;
console.log(b)
b = 20;
console.log(b)
b = "hello world "
console.log(b)

