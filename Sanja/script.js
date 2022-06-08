var text = "Hello world!";
console.log(text);
//Basic Types
var done = true;
var decimal = 15;
var color = "Hello World";
//Arrays
var myArray = ["Fido", "Fluffy", "Fiona"];
var myOtherArray = [42, 410, 2021];
//Any
var weUseTheFallback = 1;
weUseTheFallback = "We learn TypeScript"; // This will work as a fallback type
//Type Assertion
var value = "Mario Nelson";
value = "John Due"; // it will work
// value = 123 ; // it will not work
//Global Scope - works exactly the same as in JavaScript. The variables declared as global can be accessed anywhere in the code, including functions
// var num1 = 10;
// function printNum() {
//    console.log(num1)
// }
// printNum();
//Block/Local Scope
for (var i_1 = 0; i_1 < 5; i_1++) {
    var h = 0;
    console.log("i: " + i_1);
    console.log("h: " + i_1);
}
//console.log(i) //won't work, i exists only inside the loop
//console.log(h) //won't work, h exists only inside the loop
var i = 49;
if (i < 50) {
    var k = 10;
    console.log("k: " + k);
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
if (1 > 0) {
    console.log(greeting);
}
for (var i_2 = 0; i_2 < 3; i_2++) {
    greeting = "changing value";
    console.log(greeting);
}
function testVar() {
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
