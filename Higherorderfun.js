// Normal example 
function a(){
    console.log("Aj")
}

function b(a){
    a();
}



// Real world example 

//  Step 1: Define the higher-order function
function withLoggingAndAuth(actionFn) {
  return function(user) {
    if (!user || !user.isLoggedIn) {
      console.log(" Access denied. User not authenticated.");
      return;
    }

    console.log(` User ${user.name} is authenticated. Proceeding with action...`);
    actionFn(user);  // Call the actual function (login/logout)
    console.log(` Action '${actionFn.name}' completed for user: ${user.name}`);
  };
}

//  Step 2: Original business logic functions
function login(user) {
  console.log(`${user.name} has logged in.`);
}

function logout(user) {
  console.log(`${user.name} has logged out.`);
}

//  Step 3: Wrap original functions using the higher-order function
const secureLogin = withLoggingAndAuth(login);
const secureLogout = withLoggingAndAuth(logout);

//  Step 4: Create user objects (real use-case simulation)
const user1 = { name: "Amarjeet", isLoggedIn: true };
const guest = { name: "Guest", isLoggedIn: false };

//  Step 5: Call the secure (wrapped) functions
console.log("---- Trying to login as Amarjeet ----");
secureLogin(user1);     //  Will be allowed

console.log("\n---- Trying to logout as Guest ----");
secureLogout(guest);    //  Will be denied
