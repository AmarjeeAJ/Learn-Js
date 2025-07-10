// Basic functions in JavaScript
// Function is the Block of the code that performs a specific task.
// Function is a reusable piece of code.



// function fun1  (){
//     console.log("Amarjeet kumar")
//     for(let i =0; i<5; i++){  
//         console.log(i)
//     }
    
// }
// fun1(); // function call
// function declaration




// example 2
// function PrintNumber (num){ // num is the parameter 
//     console.log("Printing the number ", num)
// }
// PrintNumber(10); // Printnumber "10" value is called argument 


// Add two values 
// function add(num1,num2){
//     console.log("Add the two values " ,num1+num2)
// }
// add(10,30)


// Multiply of three values 
// function Trimulti(num1, num2, num3){
//     console.log("Multiply both num1 values ", num1*num2*num3)
// }
// Trimulti(10,20,30)



// also do like this multifications 
// function getMultiplication(a,b) {
//      return a*b;
// }
// console.log(getMultiplication(8,7))


// Find square of numbers 
// let squareNumber =  function(num){
//      let ans =  num**2;
//      return ans;
// }

// let ans = squareNumber(6);
// console.log(ans)





// Subtract the two values 
// function subtrac(val1, val2){
//     console.log("two value subtract", val2-val1)
// }
// subtrac(60,40)


// Find the average of the two value 
// function avg(num1, num2){
//     console.log("avg value of the both value", (num1+num2)/2)

// }
// avg(200,500)



// return functions
// function add(num1,num2){
//      let sum =  num1+num2;
//      return sum;
// }
// let ans = add(10,30)
// console.log("Print ans", ans)




// get my name 
// function getMyname(firstName, lastName){
//      let fullName =  firstName + " " + lastName;
//      return fullName;
// }
// let fullName =  getMyname("Amarjeet", "Kumar");
// console.log("Full Name is ", fullName)




// use space " " , to treat the integer like string 
// function getintegerasstring( firstName, lastName){
//      let fullName1 =  firstName + " " + lastName;
//      return fullName1;
// }

// let fullName1 =  getintegerasstring(7, 8)
// console.log("Print the String as Integer ", fullName1);






// without space "", integer  get integer treat
// function getintegerasint( firstName, lastName){
//      let fullName2 =  firstName+lastName;
//      return fullName2;
// }

// let fullName2 =  getintegerasint(7, 8)
// console.log("Print the String as Integer ", fullName2);


// Arrow function 
let  getExp = (x, y) => {
     let ans = x**y;
     return ans;
}
console.log(getExp(4,8));


