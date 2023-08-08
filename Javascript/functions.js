//console.log("A");
//console.log("B");



function sayMyName(){

 // function chya scope chya atmadhe defination lihitat
    console.log("A"); 
    console.log("B");
}

sayMyName //this is a function referce
//sayMyName(); // this is a function execution

// function addTwoNumbers(number1 , number2){
//    console.log(number1 + number2);
   
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2;
    // return result    
     
    return number1 + number2;
 }
 
const result = addTwoNumbers(6, 5);
//console.log("Result: " ,result);
 
// function loginUserMessage(username = "admin"){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//      }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());


function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("ankita"))

