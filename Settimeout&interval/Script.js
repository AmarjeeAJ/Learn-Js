// usse let 
// function x(){
//     for(let i =0; i<=5; i++){
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
//     console.log("hello js ")
// }
// x();


// if i used the var then getting same value but if i used the let getting new value bcoz let is the block scope variable and var is the function scope variable
//  if i used let - so the output will be 0,1,2,3,4,5 and
// if i used var - so the output will be 6,6,6,6,6,6



// use the var to create the count application so use the closure concept

function createCounter() {
    for(var i =0; i<=6; i++){
        function close(createCounter) {
            setTimeout(function() {
                 console.log(createCounter);
            }, createCounter * 1000);
           
        }
        close(i);
       
    }
    console.log("Hello count ")
}
createCounter();

// close(i) function created a new copy of i for each iteration of the loop, so when the setTimeout executes, and call the createcounter every time 
