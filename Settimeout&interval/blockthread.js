// how to block the thread in js 
console.log("Start")

setTimeout(function cb() {
    console.log(" Callback ")
}, 5000)

console.log("End")

// This code will not block the thread because setTimeout is asynchronous.
// The "End" will be logged immediately after "Start", and then after 5 seconds






// how to block the Main thread using millions of line of code 

let startDate  =  new Date().getTime(); 
let endDate = startDate;
while( endDate < startDate + 10000) { 
    endDate = new Date().getTime

}
console.log("While is expiray ")

// This code will block the main thread for 10 seconds.
// During this time, no other code will execute, including the setTimeout callback.
// After 10 seconds, "While is expiray" will be logged.// This is not a recommended practice as it freezes the UI and makes the application unresponsive.