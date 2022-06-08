// let multiplicationTable: Array<number> = [1,2,3,4,5,6,7,8,9,10];
// for(i=1; i<=10; i++){
//     const multiplicRasult = i * i;
//     console.log(`${i} * ${i} = ${multiplicRasult}`);
// }
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
// 6 * 6 = 36
// 7 * 7 = 49
// 8 * 8 = 64
// 9 * 9 = 81
// 10 * 10 = 100
//FOR LOOP
// var table = 9;
// var length = 10;
// var s = 1;
// document.write("Multiplication table: "+ table);
// for(s = 1; s <= length; s++)
//  document.write("<br>"+s+" * "+table+" = " +(s * table));
//  Multiplication table: 9
// 1 * 9 = 9
// 2 * 9 = 18
// 3 * 9 = 27
// 4 * 9 = 36
// 5 * 9 = 45
// 6 * 9 = 54
// 7 * 9 = 63
// 8 * 9 = 72
// 9 * 9 = 81
// 10 * 9 = 90
//WHILE LOOP
// var table = 8;
// var length = 10;
// var n = 1;
// document.write("<br><br>" + "Multiplication table: "+ table);
// while(n <= length)
// { 
//  document.write("<br>"+n+" * "+table+" = " +(n * table));
//  n++;
// }
// //DO WHILE LOOP
// var table = 7;
// var length = 10;
// var k = 1;
// document.write("<br><br>" +"Multiplication table: "+ table);
// do {
//  document.write("<br>"+k+" * "+table+" = " +(k * table));
//  k++;
// }while(k <= length);
//SOLUTION
// for (let i = 0; i <= 10; i++){    
//     document.write(i + " x " + 1 + " = " + i*1 +"<br>");
//     document.write(i + " x " + 2 + " = " + i*2 +"<br>");
//     document.write(i + " x " + 3 + " = " + i*3 +"<br>");
//     document.write(i + " x " + 4 + " = " + i*4 +"<br>");
//     document.write(i + " x " + 5 + " = " + i*5 +"<br>");
//     document.write(i + " x " + 6 + " = " + i*6 +"<br>");
//     document.write(i + " x " + 7 + " = " + i*7 +"<br>");
//     document.write(i + " x " + 8 + " = " + i*8 +"<br>");
//     document.write(i + " x " + 9 + " = " + i*9 +"<br>");
//     document.write(i + " x " + 10 + " = " + i*10 +"<br>");
// }
// with ARRAY
// var array: number[] = [];
// // Push numbers from 1 to 10 into array
// for (let i=1; i<=10; i++){
//     array.push(i);
// }
// //Other loop
// for (let j: number = 0; j < array.length; j++) {
//     for (let i: number = 0; i < array.length; i++) {
//         var result: number = array[i]*array[j];
//         var displ: string = `${array[i]}x${array[j]} = ${result}`
//         console.log(displ);
//     }
// }
//another way
function multiply(num1) {
    for (var i = 1; i <= 10; i++) {
        return i * num1;
    }
    ;
}
;
console.log(multiply(1));
// Ex 2
// 1. Print your full name in the browser (you will have an object that has 2 properties fName and lName).
// 2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
// 3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.
// let me = {
//     fName: "Sanja",
//     lName: "Kostantinovic"
// }
// var displayMyName = (document.getElementById("result") as HTMLElement);
// function output (){
//     const arr = [];
//     for (let i = 0; i < 10; i++) {
//     arr.push(me.fName);
//     }
//     var fullname = "";
//     arr.forEach(function outputText() {
//     fullname += ` ${me.fName} ${me.lName} <br>`;
//     });
//     // console.log(fullname);
//     displayMyName.innerHTML = fullname;
// }
// setTimeout(output, 5000);
// // document.write(`${me.fName} ${me.lName}`);
//FOR
var person = { fName: "Sanja", lName: "Pavic" };
var person1 = [];
for (var i = 0; i < 10; i++) {
    person1.push(person);
    document.write("".concat(person.fName, " ").concat(person.lName, " <br>"));
}
person1.forEach(function (val) {
    console.log(val.fName);
    setTimeout(function () {
        console.log(val.lName); //5 seconds after opening the page that prints your last name in the console 10 times.
    }, 5000);
});
