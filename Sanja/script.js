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
// Let  - As in JavaScript, using the “let” keyword, variables will be global if we write them on the global scope. 
var newGreeting = "Hello There";
{
    console.log(newGreeting);
}
if (1 > 0) {
    console.log(newGreeting);
}
for (var i_3 = 0; i_3 < 3; i_3++) {
    greeting = "changing value";
    console.log(newGreeting);
}
function testLet() {
    document.write(newGreeting);
}
testLet();
//a variable with block level scope - to avoid overwriting the content inside of the blocks
{
    var greeting_1 = "Hello There";
    console.log(greeting_1);
}
console.log(greeting); //greeting can't be accessed here
greeting = "changing value"; //or here
for (var i_4 = 0; i_4 < 3; i_4++) {
    console.log(greeting); //or here
}
console.log("i also exists here: value is " + i);
function testingLet() {
    greeting = "I can change it here"; //or here
    document.write(greeting); //or here
    var newGreeting = "I only exist here!";
    document.write(newGreeting);
}
testingLet();
console.log(greeting); //or here
console.log(newGreeting); //newGreeting only exists within the function
// Const
//it must be initialised immediately.
var letVar;
var varVar;
// const constVar; //It won't work
var pi = 3.14159; //Will work
// pi = 3.14; //Won't work
var grades = [3, 2, 5, 4, 2];
// grades = [1,1,1,1,1]; // TypeError: Assignment to constant variable.
//we can mutate, make changes to the array “grades”:
var arrayOfGrades = [3, 2, 5, 4, 2];
arrayOfGrades.push(1);
console.table(arrayOfGrades);
// If we want to protect the array completely to make it immutable we can use the “as const” statement at the end of the declaration.
// const grades = [3,2,5,4,2] as const;
// grades.push(1);
// console.table(grades);
//Template Strings
//Multi-Line Strings
var singleLineStrings = 'hello ' +
    'there ' +
    'general ' +
    'kenobi ';
var multiLineStrings = "\n   hello\n   world\n   my\n   name\n   is\n   Sanja";
document.write(multiLineStrings);
//Variable Substitution
var fName = "Kenobi";
var multiLineString = "\n   hello\n   there\n   general\n   ".concat(fName, "\n");
document.write(multiLineString);
//Loops
var yArray = ["Yoda", "Mace Windu", "Obi-Wan"];
for (var i_5 = 0; i_5 < yArray.length; i_5++) {
    console.log("Array element ".concat(yArray[i_5], " with index ").concat(i_5));
}
var mArray = ["Yoda", "Mace Windu", "Obi-Wan"];
mArray.forEach(function (value, index) {
    console.log("Array element ".concat(value, " with index ").concat(index));
});
//For In
var myObject = { a: 1, b: 2 };
for (var prop in myObject) {
    console.log(prop);
}
// a
// b
var array1 = [1, 2, 3, 4, 5];
for (var key in array1) {
    console.log(key + " " + typeof (key));
}
//For-of loop
var array1 = [1, 2, 3, 4, 5];
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var value_1 = array1_1[_i];
    console.log(value_1);
}
var array1 = [1, 2, 3, 4, 5];
for (var _a = 0, _b = Object.entries(array1); _a < _b.length; _a++) {
    var _c = _b[_a], index = _c[0], value_2 = _c[1];
    console.log(value_2, index);
}
;
//Using LET in FOR LOOPS
var yourArray = [];
for (var i_6 = 0; i_6 < 10; i_6++) {
    yourArray.push(i_6);
}
yourArray.forEach(function (value) {
    console.log(value);
});
//FUNCTIONS...
