
// understanding the var variable
// 1. Hoisting: A var variable is hoisted to the top of its function scope, meaning it can be accessed before its declaration, but it will be undefined until the line where it is declared is reached.
// 2. Function Scope: A var variable is only accessible within the function in which it is declared, or globally if declared outside of any function.
// 3. Redeclaration: A var variable can be redeclared in the same scope without any error.
// 4. Global Scope: If a var variable is declared outside of any function, it becomes a global variable and can be accessed from anywhere in the code.

function var1(){
    var a = 20;
    console.log(a)
 }
 var1();
// output: 20
// 1. The variable 'a' is declared and initialized with the value 20 inside the function var1.
// 2. The variable 'a' is scoped to the function var1, so it cannot be accessed outside of this function.


var b = 77;
function var2(){
    var b = 88;
    console.log(b)
}
var2();
// output: 88
// 2. The variable 'b' inside the function var2 shadows the global variable 'b', so it prints 88 instead of 77.
// 3. The global variable 'b' remains unchanged and can be accessed outside the function var2.


//exp3
var c = 90;
if(true){
   
    console.log(c)
}
// output: 90
// 3. The variable 'c' is declared in the global scope, so it can be accessed inside the if block and prints 90.
// 4. The variable 'c' is not limited to the block scope of the if statement, so it can be accessed outside of it as well.



// exp4
var fruit = 'apple';
function fruit1(){
    var fruit = 'greps';
    console.log(fruit)
}
fruit1();
console.log(fruit)
// output: greps apple
// 1. The variable 'fruit' is declared and initialized with the value 'apple' in the global scope.
// 2. Inside the function fruit1, a new variable 'fruit' is declared and initialized with the value 'greps', which shadows the global variable 'fruit'.
// 3. The function fruit1 prints the value of the local variable 'fruit', which is 'greps'.



// exp5
var veg = 'potato';
function veg1(){
    console.log(veg)
    var veg = 'onion';
}
console.log(veg)
veg1();
 
// output: potato onion
// 1. The variable 'veg' is declared and initialized with the value 'potato' in the global scope.
// 2. Inside the function veg1, a new variable 'veg' is declared and initialized with the value 'onion', which shadows the global variable 'veg'.
// 3. The function veg1 prints the value of the local variable 'veg', which is 'onion'.
// 4. The global variable 'veg' remains unchanged and can be accessed outside the function veg1, printing 'potato'.











//  node Variable1.js