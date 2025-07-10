// Understanding for loop in JavaScript
// for (initialization; condition; increment/decrement) {
//     // code block to be executed
// }


// Example 1: Basic for loop
// for(let i=0; i<=1; i++){
//     console.log("AJJ");
// }

// Printing count 1 to 9
// for(let i =0; i<=8; i++){
//     console.log(i);
// }


// Reversing Count 10 to 1
// for(let i =10; i>1; i--){
//     console.log(i)
// }

// Printing even numbers from 0 to 20
// for(let i =0; i<=20; i+=2){
//     console.log(i)
// }

// Printing odd numbers from 0 to 20
// for(let i =1; i<=20; i+=2){
//     console.log(i)
// }


// break
// for(let i=1; i<10; i++){
//     if(i==5){
//         console.log('found i');
//         break;
//     } else {
//         console.log(i);
//     }
// }



// Continue
for(let i=1; i<=5; i++){
    if(i==3)
        continue;
    else
     console.log(i)
}

// Output 
// 1
// 2
// 4
// 5
// Continue skip the Current Iteration so Skip the 3rd iteration 3 continue the another iteration 



