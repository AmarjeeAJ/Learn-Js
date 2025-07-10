// Js QA

// 1 what is output 
// {
//     let a = 5;
//     let b = 8;

//     console.log(a)
//     console.log(b)
// }
// console.log(a)
// console.log(b)

// Output: 5, 8 and ReferenceError for a and b outside the block scope because they are defined with let inside a block.



// 2 what is the output 
// console.log(a)
// var a = 7;
// Output: undefined
// Explanation: The variable `a` is hoisted to the top of the scope, but its assignment happens after the console.log call. Therefore, it logs `undefined` instead of `7`.

// 3 what is the output 
const arr  = [123]
arr[4] = 5;
console.log(arr.length)
console.log(arr[3])
// Output: 5
// Explanation: The array `arr` has a length of 5 because JavaScript allows you to create "sparse" arrays. When you assign a value to an index that is greater than the current length of the array, it expands the array and fills the missing indices with `undefined`. Thus, the array becomes `[123, undefined, undefined, undefined, 5]`, and its length is 5.
// The value at index 3 is `undefined` because it was never assigned a value, so `console.log(arr[3])` outputs `undefined`.

// 4 what is the output

