// Understanding the Let Keyword( Variable ) 
// 1. Block Scope {}
// 2. Cannot Redeclare in the Same Scope
// 4. Cannot be Accessed Before Declaration
// Hoisting: Variables declared with 'let' are hoisted to the top of their block scope, but they cannot be accessed until they are declared. This is known as the "temporal dead zone" (TDZ).
// 5. Reassignment: Variables declared with 'let' can be reassigned new values, but they cannot be redeclared in the same scope.


// Exp1

// console.log(x)
// {
//     let x = 90;
//     console.log(x)
// }
// console.log(x)
// Output: ReferenceError: Cannot access 'x' before initialization
// Explanation: The variable 'x' is declared inside a block scope using 'let', so it is not accessible outside that block.
// The first console.log(x) throws a ReferenceError because 'x' is not defined in that scope.
// The second console.log(x) inside the block prints 90, which is the value of 'x' in that block scope.
// The last console.log(x) throws a ReferenceError because 'x' is not defined in that scope.


// Exp2
let  c = 80;
function text(){
  console.log(c)
  let c = 70;
}
text()
console.log(c)
// Output: 70 80
// Explanation: The variable 'c' is declared inside the function 'text' using 'let', so it is only accessible within that function's scope.
// The first console.log(c) inside the function prints 70, which is the value of 'c' in that function scope.
// The second console.log(c) outside the function prints 80, which is the value of 'c' in the global scope.



// exp 3
let fruit = 'apple'

{
  let fruit = 'orange'
  console.log(fruit) 
}

console.log(fruit) 
// Output: orange apple
// Explanation: The variable 'fruit' is declared in the global scope and assigned the value 'apple'.
// Inside the block, a new variable 'fruit' is declared using 'let' and assigned the value 'orange', which shadows the global variable 'fruit'.


//exp4 
let fruit1 = 'apple';
// let fruit1 = 'banana';
console.log(fruit1)
// Output: SyntaxError: Identifier 'fruit1' has already been declared
// Explanation: The variable 'fruit1' is declared using 'let' and assigned the value 'apple'.
// The second declaration of 'fruit1' using 'let' throws a SyntaxError because 'fruit1' has already been declared in the same scope.


// Reasignment using let 
let a = 9;
console.log(a);
a = 'AJax';
console.log(a)
// Output: 9 Ajax
// Explanation: The variable 'a' is declared using 'let' and assigned the value 9.
// The first console.log(a) prints 9, which is the initial value of 'a'.
// The second console.log(a) prints 'AJax', which is the new value assigned to 'a' after reassignment.


// Re definition using let
// let b = 88;
// let b = 'GJR';
// console.log(b)
// Output: SyntaxError: Identifier 'b' has already been declared
// Explanation: The variable 'b' is declared using 'let' and assigned the value 88.
// The second declaration of 'b' using 'let' throws a SyntaxError because 'b' has already been declared in the same scope.



