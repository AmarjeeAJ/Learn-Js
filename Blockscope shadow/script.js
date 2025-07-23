//  block?
// Block is a section of code that is enclosed in curly braces { }.
// It can be used to group statements together.

// if(true){
//     console.log(" this is compound statement ");
//     var  x = 30;
//     console.log(x);
// }


// what  is Block scope?
// Block scope is the scope of variables defined within a block.
// Variables defined within a block are not accessible outside of that block.
// variable  only access inside the block scope 


// {
//     var a =  67;
//     let b = 90;
//     const c  = 20

//     console.log(a); // 67
//     console.log(b); //
//     console.log(c);  // 20
// }
// console.log(a); 
//     console.log(b); 
//     console.log(c);
    
// console.log(a); // 67
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

// Reason ?
// reason is that let and const are block scoped variables.
// var is function scoped, so it can be accessed outside of the block.
// let and const are block scoped, so they can only be accessed within the block they are defined in.



// Shadowing in JavaScript?
// Shadowing is when a variable is defined in a block with the same name as a variable defined outside of that block.

// example of shadowing:


var x  = 30;
const z = 20;
let y = 40;
{
    var x  = 50;
    let y = 70;
    const z = 80;
    console.log(z); // 80 (block scoped variable)
    console.log(x); // 50 (shadowed variable)
    console.log(y); // 70 (block scoped variable)
}
console.log(x); 
console.log(y);
console.log(z); // 20 (outer scoped variable)
// Output:
// 80
// 50
// 70
// 30
// 40
// Explanation:
// In the block, we redefine `x` with `var`, which shadows the outer `x`.
// The `y` and `z` variables are block scoped, so they are not accessible
// outside the block.
// The outer `z` remains unchanged, while the outer `y` is still accessible.
// The outer `x` is shadowed by the inner `x`, so it refers to the inner value.


// inllegal  shadowing in js 
// In JavaScript, shadowing is legal, but it can lead to confusion.
// It is generally not recommended to shadow variables, as it can make code harder to read and