// callback function in js 

// setTimeout(() => {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x is argument ");
//   y();
// }
// x(function y() {
//   console.log("y is the function ");
// });

function addEventListener(){
    let count =  0;

document.getElementById("clickme").addEventListener("click", function xyz(){
    console.log(" Button clicked ", count++ )

})
}
addEventListener();


// Garbage collection (GC) and removeEventListener()




