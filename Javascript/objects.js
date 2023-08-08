console.log("hello object");
//there are two types of object decleration

//1 . Literal 
// 2. Constructor
//singleton : koi bhi constucture se banate hai to wo ek singletonobject bnta hai


// object literal
//decleartion of object

const mySym = Symbol("key1");
const jsUser = {
    name: "Ankita" ,
    "full Name" : "Ankita Devatale" , 
   [mySym]: "key",
    age: 25 ,
    location: "Pune" ,
    email: "ankitadevatale@gmail.com" ,
    isLoggedIn:false,
    lastLoginDays:["Monday" , "Saturday"]
    
}
console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(typeof jsUser[mySym]);

jsUser.email = "ankita@chatggpt.com"
//Object.freeze(jsUser);
jsUser.email = "ankitadevatalemicrosoft.com";
console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello js user");
}
console.log(jsUser.greeting);

