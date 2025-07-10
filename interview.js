//Q1; what is the outrput 
// var array =  [1,2,3,4,5]
// console.log(typeof array)
// array is an object in JavaScript

//Q2; what is the output
// console.log(typeof null)
// null is an object in JavaScript



// example of hoisted 
// Q3; what is the output
// var x = 20;
// function foo(){
//     console.log(x)
//     var x =  10;
// }
// foo()
// output: undefined
// 1. The variable 'x' is declared inside the function foo using var, which means it is function-scoped.
// 2. The variable 'x' is hoisted to the top of the function scope, but it is not initialized until the line var x = 10; is executed.


// Q4; what is the output
// var z = 20;
// function foo(){
//     var z =  10;
//     console.log(z)
// }
// foo()
// output: 10
// 1. The variable 'z' is declared inside the function foo using var, which means it is function-scoped.
// 2. The variable 'z' inside the function shadows the global variable 'z', so it prints 10 instead of 20.

// Q5 output 
// console.log("Start")
// setTimeout(() => {
//     console.log("Timeout")
// }, 5000)
// console.log("End")

// output: Start End Timeout
// 1. The first console.log("Start") prints "Start" immediately.
// 2. The setTimeout function is called, which schedules the callback function to be executed after 5000 milliseconds (5 seconds).
// 3. The second console.log("End") prints "End" immediately after the setTimeout function is called.


// Q6 what is the output
// for(var i=1; i<=3; i++){
//     setTimeout(() =>{
//         console.log(i)
//     }, 1000)
// }
// output: 4 4 4
// 1. The for loop iterates from 1 to 3, but the setTimeout function is asynchronous and does not block the loop.
// 2. By the time the setTimeout function executes, the loop has already completed, and the value of 'i' is 4 (the loop condition i<=3 is no longer true).
// 3. Therefore, the output is 4 printed three times.
// 4. To fix this, you can use let instead of var in the for loop, which will create a new block scope for each iteration of the loop.



//Q7 Find the output 
// {
//     let a = 4;
//     let b = 8;

//     console.log(a)
//     console.log(b)
// }

// console.log(a)
// console.log(b)

// Output : 4,8 and refernce error bcoz of only give the output in inside block scope and gives error outside block scope call 


// what is the output 
// function anyName(){
//     let a = 4;
//     let b = 8;
//         c = 18;
     
// console.log(a)
// console.log(b)
// }
// anyName();


// console.log(c)

//  a = 4, b = 8, c= 18  where c is the global scope so c access anywhere in the code 








// what is the output  of this code 
// console.log(012345)


//  Numbers starting with 0 and followed by digits (0–7) are interpreted as octal (base-8) numbers.

// So, 012345 is not decimal — it’s interpreted as an octal number.

//  Step-by-step:
// Let's break 012345 down as an octal number:

// yaml
// Copy
// Edit
// 012345 (octal) = 1×8^4 + 2×8^3 + 3×8^2 + 4×8^1 + 5×8^0
//                = 1×4096 + 2×512 + 3×64 + 4×8 + 5×1
//                = 4096 + 1024 + 192 + 32 + 5
//                = 5349 (decimal)
//  Modern JS (strict mode):
// In strict mode, JavaScript will throw a syntax error if you use legacy octal literals (like 012345), because it's ambiguous and outdated.


// var x = 30;
// function foo(){
//     console.log(x)
//     var x = 10
// }
// foo()
// output: undefined
// 1. The variable 'x' is declared inside the function foo using var, which means it is function-scoped.
// 2. The variable 'x' is hoisted to the top of the function scope, but it is not initialized until the line var x = 10; is executed.



// Q8; what is the output
// foo();
// var foo  = 60;
// function foo(){
//     console.log("calling fool")
// }
// foo();
// Output is TypeError: foo is not a function
// 1. The variable 'foo' is declared using var, which means it is hoisted to the top of the scope.
// 2. However, the function declaration is also hoisted, and it takes precedence over the variable declaration.


// Q9; what is the output
// console.log("start")
// setTimeout(() => {
//     console.log("timeout")
// }, 0)
// console.log("end")
// output: start end timeout
// 1. The first console.log("start") prints "start" immediately.
// 2. The setTimeout function is called, which schedules the callback function to be executed after 0 milliseconds.


// what is the output 
// for(var i=1; i<=3; i++){
//     setTimeout(() =>{
//         console.log(i)
//     }, 1000)
// }
// output: 4 4 4
// 1. The for loop iterates from 1 to 3, but the setTimeout function is asynchronous and does not block the loop.
// 2. By the time the setTimeout function executes, the loop has already completed, and the value of 'i' is 4 (the loop condition i<=3 is no longer true).


// Q10; what is the output
// setTimeout(() => {
//     console.log('Timeout')
// }, 0)
// Promise.resolve().then(() => console.log('Promise '))
// console.log('End')
// output: End Promise Timeout
// 1. The first console.log('End') prints "End" immediately.
// 2. The Promise.resolve().then() schedules the callback function to be executed after the current call stack is cleared.
// 3. The setTimeout function is called, which schedules the callback function to be executed after 0 milliseconds.



// Q11; what is the output
// async function foo(){
//     return 'hello wrld'
// }
// const result  =  foo()
// console.log(result)
// output: Promise { 'hello world' }
// 1. The async function foo() returns a promise.
// 2. The result variable holds the promise returned by the async function.


// Q12 what  is the output 
function abc(){
    console.log("hii")
}

const value = new abc()
// output: hii
// 1. The function abc() is called when the new keyword is used.
// 2. The new keyword creates a new object and sets the this context inside the function to that new object.


// Q13  create an object with two properties  User and details and destructure  and also use spread to make a new object with additional properties


// Creating an object with two properties User and details
const Userinf = {
    User : "Amarjeet",
    details: {
        age:23,
        weight: 70
    }
}

// Destructuring the Userinf object
const { User, details: { age, weight } } = Userinf;

// Creating a new object with additional properties using spread operator
const newUser = {
    ...Userinf,
    location: "India",
    occupation: "Developer"
};

// Output the destructured values and the new object
console.log(`User: ${User}, Age: ${age}, Weight: ${weight}`);




