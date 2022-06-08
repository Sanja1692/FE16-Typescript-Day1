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

// Let  - As in JavaScript, using the “let” keyword, variables will be global if we write them on the global scope. 
let newGreeting = "Hello There";
{
 console.log(newGreeting);
}

if(1>0){
 console.log(newGreeting);
}

for (let i = 0; i<3;i++){
 greeting = "changing value";
 console.log(newGreeting);
}


function testLet(){
 document.write(newGreeting);
}
testLet();


//a variable with block level scope - to avoid overwriting the content inside of the blocks
{
  let greeting = "Hello There";
  console.log(greeting);
}
console.log(greeting); //greeting can't be accessed here
greeting = "changing value"; //or here
for (let i = 0; i<3;i++){
  console.log(greeting); //or here
}
console.log("i also exists here: value is " + i);
function testingLet(){
  greeting = "I can change it here"; //or here
  document.write(greeting);    //or here
  let newGreeting = "I only exist here!";
  document.write(newGreeting);
}
testingLet();
console.log(greeting);    //or here
console.log(newGreeting); //newGreeting only exists within the function

// Const
//it must be initialised immediately.
let letVar;
var varVar
// const constVar; //It won't work
const pi = 3.14159; //Will work
// pi = 3.14; //Won't work


const grades: number[] = [3,2,5,4,2];
// grades = [1,1,1,1,1]; // TypeError: Assignment to constant variable.

//we can mutate, make changes to the array “grades”:

const arrayOfGrades = [3,2,5,4,2];
arrayOfGrades.push(1);
console.table(arrayOfGrades);

// If we want to protect the array completely to make it immutable we can use the “as const” statement at the end of the declaration.

// const grades = [3,2,5,4,2] as const;
// grades.push(1);
// console.table(grades);

//Template Strings
//Multi-Line Strings

let singleLineStrings = 'hello ' +
   'there ' +
   'general ' +
   'kenobi ';


   let multiLineStrings = `
   hello
   world
   my
   name
   is
   Sanja`;
document.write(multiLineStrings);

//Variable Substitution

let fName = "Kenobi";
let multiLineString = `
   hello
   there
   general
   ${fName}
`;
document.write(multiLineString);

//Loops
let yArray = ["Yoda", "Mace Windu", "Obi-Wan"];
for (let i = 0; i < yArray.length; i++) {
  console.log(`Array element ${yArray[i]} with index ${i}`);
}

let mArray = ["Yoda","Mace Windu", "Obi-Wan"];
mArray.forEach(function(value, index) {
  console.log(`Array element ${value} with index ${index}`);
});

//For In

var myObject = { a: 1, b: 2 };
for (let prop in myObject) {
   console.log(prop);
}
// a
// b

var array1 = [1, 2, 3, 4, 5];

for (let key in array1){
 console.log(key + " " +typeof(key));
}

//For-of loop

var array1 = [1, 2, 3, 4, 5];

for (let value of array1){
console.log(value);
}

var array1 = [1, 2, 3, 4, 5];

for (let [index, value] of Object.entries(array1)){
  console.log(value, index);
};

//Using LET in FOR LOOPS
var yourArray = [];
for (let i = 0; i < 10; i++) {
  yourArray.push(i);
}
yourArray.forEach(function(value){
  console.log(value)
})

//FUNCTIONS...