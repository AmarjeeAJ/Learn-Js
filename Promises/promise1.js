// const cart =  ["shoes", "shirt", "pants"];



// createOrder(cart, function() {
//     proceedToPayment(orderId)
// })
// {data: undefined, status: "pending"} gives the promise object this is not optimized 

// is this code is much better than the previous one
// const promise =  createOrder(cart)


// promise.then(function(orderId) {
//     proceedToPayment(orderId)
// })

// How its work ? explain
// The code above uses a promise to handle the asynchronous operation of creating an order.// When `createOrder(cart)` is called, it returns a promise that is initially in a "pending" state.

//--------------------------------------------------->





// Real World Example 

const GITHUB_API =  "https://api.github.com/users/AmarjeeAJ";
const user = fetch(GITHUB_API);
console.log(user);

// The `fetch` function returns a promise that resolves to the response of the request.
// The promise is in a "pending" state until the request completes after complete the promise gives the "fulfilled"  state   .

user.then(function(data) {
    console.log(data)
})


// The `.then()` method is called on the promise returned by `fetch`. It takes a callback function that will be executed when the promise is fulfilled, meaning when the data is successfully retrieved from the API.
// To handle the response, we can use the `.then()` method on the promise.





// ------------------------------------------->
// ----------> Promise Chaining <----------
// Promise chaining allows you to perform a series of asynchronous operations in a sequence, where each operation
// can depend on the result of the previous one. This is done by returning a new promise from the `.then()` method, which allows you to chain multiple `.then()` calls together.

// Example of Promise Chaining
const  cart  = ["shoes", "shirt", "pants"];

createOrder(cart)
.then(function(orderId) {
    return proceedToPayment(orderId); 
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
})
.then(function(paymentInfo) {
    return updateWalletBalance(paymentInfo)
})

// if we use the arrow function is much more readable and better 
createOrder(cart)
.then(orderId => proceedToPayment(orderId))
.then(paymentInfo => showOrderSummary(paymentInfo))
.then(paymentInfo => updateWalletBalance(paymentInfo))