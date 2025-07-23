// example of closures in js interview 
// function outest(){
//     var c  = 60;
// function outer(b){
//     function inner(){
//         console.log(a, b,c);
//     }
//     let a = 10 ;   // if i comment this line then getting refernce type error
//     return inner;
// }
// return outer;
// }
// // let a  = 200; // global variable so does not effect on the closure
// var close =  (outest()("hello world "));
// close() // it is call the inner function





//  what is Data hiding and encapsulation in js ?
//Data hiding hides an object's internal state, allowing access only through methods.
// Encapsulation bundles data and methods in one unit, restricting direct access to internal parts.



function counter(){
    var count = 0;
     return function increment(){
        count++;
        console.log(count);
    }
}
// console.log(count) // it is not accessible here due to closure
var counter1 = counter();
counter1();
counter1() 

