// Understanding the const Keyword( Variable )
// Block Scope: A const variable is only accessible within the block in which it is declared.
// Cannot Redeclare in the Same Scope: A const variable cannot be redeclared in the same scope.
// Hoisting: A const variable is hoisted to the top of its block scope, but it cannot be accessed before its declaration.
// Cannot be Reassigned: A const variable cannot be reassigned a new value after it has been declared. However, if the const variable is an object or array, its properties or elements can be modified.



// Exp1
// const b = 67;
// console.log(b);

// const b = 79;
// console.log(b)

// output: SyntaxError: Identifier 'b' has already been declared
// 1. The variable 'b' is declared and initialized with the value 67.
// 2. The variable 'b' is block-scoped, so it cannot be accessed outside of the block in which it is declared.
// 3. The variable 'b' cannot be redeclared in the same scope, so the second declaration results in a SyntaxError.


// exp2
const a =  55;
function const1(){
    const a =78;
    console.log(a)
}
const1();
console.log(a)
// output: 78 55
// 1. The variable 'a' is declared and initialized with the value 55 in the global scope.
// 2. Inside the function const1, a new variable 'a' is declared and initialized with the value 78, which shadows the global variable 'a'.
// 3. The function const1 prints the value of the local variable 'a', which is 78.
// 4. After the function call, the global variable 'a' is printed, which is 55.



// exp3
// {
//     const fruit = 'apple'
//     fruit = 'orange'
//     console.log(fruit)
//   }
// output: TypeError: Assignment to constant variable.
// 1. The variable 'fruit' is declared and initialized with the value 'apple' in the block scope.
// 2. The variable 'fruit' cannot be reassigned a new value after it has been declared, so the assignment to 'orange' results in a TypeError.


//Exp4
const fruit = {}
fruit.color = 'red'
console.log(fruit)
// output: { color: 'red' }
// 1. The variable 'fruit' is declared and initialized with an empty object.
// 2. The property 'color' of the object 'fruit' is modified to 'red', which is allowed because the object itself is not reassigned, only its properties are modified.