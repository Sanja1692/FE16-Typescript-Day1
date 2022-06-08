let text : string = "Hello world!";
console.log(text);
//Basic Types
let done: boolean = true;
let decimal: number = 15;
let color: string = "Hello World";

//Arrays

let myArray: string[] = ["Fido", "Fluffy", "Fiona"];
let myOtherArray: Array<number> = [42, 410, 2021];

//Any
let weUseTheFallback: any = 1;
weUseTheFallback= "We learn TypeScript"; // This will work as a fallback type

//Type Assertion
let value : string = "Mario Nelson";
value = "John Due"; // it will work
// value = 123 ; // it will not work

//Global Scope - works exactly the same as in JavaScript. The variables declared as global can be accessed anywhere in the code, including functions
// var num1 = 10;
// function printNum() {
//    console.log(num1)
// }
// printNum();

//Block/Local Scope
for (let i = 0; i < 5; i++) {
   let h: number = 0;
   console.log("i: " + i)
   console.log("h: " + i)
}
//console.log(i) //won't work, i exists only inside the loop
//console.log(h) //won't work, h exists only inside the loop
let i: number = 49;
if (i < 50) {
   let k: number = 10;
   console.log("k: " + k)
}
// console.log(k); //won't work, k exists only inside the local/block scope of the condition

//Function scope - work in JavaScript but not in TypeScript

// function addNumbers() {
//    num1 = 2;
//    num2 = 3;
//    return num1 + num2
// }
// addNumbers()
// console.log(num1);

// Var -  If we declare it outside of a block it will be accessible everywhere

var greeting = "Hello There";
{
  console.log(greeting);
}

if(1>0){
  console.log(greeting);
}

for (let i = 0; i<3;i++){
  greeting = "changing value";
  console.log(greeting);
}

function testVar(){
  document.write(greeting);
}
testVar();

//If we declare var inside of a block it will be accessible everywhere, unless it is declared inside of a function:



{
   var greeting = "Hello There";
   console.log(greeting);
 
 }
 console.log(greeting);
 
 greeting = "changing value";
 
//  for (var i = 0; i<3;i++){
//    console.log(greeting);
//  }
//  console.log("i also exists here: value is " + i);
 
//  function testVar(){
//    greeting = "I can change it here";
//    document.write(greeting);
//    var newGreeting = "I only exist here!";
//    document.write(newGreeting);
//  }
//  testVar();
//  console.log(greeting);
 
//  console.log(newGreeting); //won't work

