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


function loginUserMessage(username = "Admin level"){
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage())

//shopping cart

function calculateCartPrice(val1 , val2 , ...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,400));

 const user = {
    username: "ankita" ,
    price: 1000
 }

 function handleUserobject(anyobject){
   console.log(`this is a username ${anyobject.username} and  this is a price ${anyobject.price}`)
 }
 //handleUserobject(user);

 handleUserobject({
    username: "sam" ,
    price: 5000
 })
 
 //const myNewArray = [1100 ,2200 , 3300, 4400];
 function returnSecondValue(getArray){
    return getArray[1]
 }
// console.log(myNewArray);
 console.log(returnSecondValue([1100 ,2200 , 3300, 4400]))