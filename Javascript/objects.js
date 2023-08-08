//console.log("hello object");
//there are two types of object decleration

//1 . Object Literal 
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
// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(typeof jsUser[mySym]);

jsUser.email = "ankita@chatggpt.com"
//Object.freeze(jsUser);
//jsUser.email = "ankitadevatalemicrosoft.com";
//console.log(jsUser);

jsUser.greeting = function(){
  console.log("Hello js user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo  = function(){
  console.log(`hello js user two ${this["full Name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

//object singleton

const tinderUser = new Object(); // this is singleton object
const tinderUser1 = {}; // this is non singleton object
//console.log(tinderUser);
//console.log(tinderUser1);

tinderUser.id = "132abc";
tinderUser.name = "sammy";
tinderUser.location = "pune" ;
tinderUser.isLoggedIn = "false" ;
//console.log(tinderUser);

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname :{
      firstName:"ankita",
      lastName:"devatale"
    }
  }
}

console.log(regularUser.fullname.userfullname.lastName);
 

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "a" , 4: "b"};
//const obj3 = {...obj1 , ...obj2};
//const obj3 = Object.assign({},obj1 ,obj2);
//console.log(obj3);

// const users = [
//   {
//     id:1,
//     email: "ankita@gmail.com"
//   }
// ]
//users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 //console.log(tinderUser);
 //console.log(Object.keys(tinderUser));


//destructuring 

const course = {
  coursename: "js in hindi",
  price:"999",
  courseInstructor: "ankita"
}
//console.log(course.courseInstructor);
//console.log(course.price);

const {courseInstructor: instructor} = course;
const {price: p} = course;
console.log(instructor);
console.log(p);
//console.log(price);