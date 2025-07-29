// use the hoc functions to transform the values like  
// Double, Triple, Binary forms use the map()

// const arr = [5,1,3,2,6];


// Higher Order Function to double the values
// function double(num){
//     return num *2;
// }

// Higher Order Function to triple the values
//  function triple(num){
//     return num * 3;
//  }

 // Higher Order Function to convert to binary
//  function binary(num){
//     return num.toString(2);
//  }

// you can also write like this use the arrow function 
// const output3 =  arr.map((num) => num.toString(2))


// const output  =  arr.map(double);
// const output1  =  arr.map(triple);
// const output2 =  arr.map(binary)
// console.log(output); 
// console.log(output1)
//  console.log(output2)
// console.log(output3)





// Filter()  function use for the filter the items and value 

const arr =  [5,1,3,2,6]

// check odd 
function isOdd(num){
    return num % 2;
}
const output  =  arr.filter(isOdd);
console.log(output)


// use the arrow fun write also (short and efficint )
const out1 =  arr.filter((num) => num % 2)
console.log(out1)



// check even 
function isEven(num) {
   return num % 2 == 0;
}
const output1 =  arr.filter(isEven)
console.log(output1)

// use the arrow fun write also (short and efficient )

const out2 =  arr.filter((num) => num % 2 == 0)
console.log(out2)



// reduce() function use for the reduce the items and value 