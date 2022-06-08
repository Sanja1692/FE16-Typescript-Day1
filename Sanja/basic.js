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
for (var i = 0; i <= 10; i++) {
    document.write(i + " x " + 1 + " = " + i * 1 + "<br>");
    document.write(i + " x " + 2 + " = " + i * 2 + "<br>");
    document.write(i + " x " + 3 + " = " + i * 3 + "<br>");
    document.write(i + " x " + 4 + " = " + i * 4 + "<br>");
    document.write(i + " x " + 5 + " = " + i * 5 + "<br>");
    document.write(i + " x " + 6 + " = " + i * 6 + "<br>");
    document.write(i + " x " + 7 + " = " + i * 7 + "<br>");
    document.write(i + " x " + 8 + " = " + i * 8 + "<br>");
    document.write(i + " x " + 9 + " = " + i * 9 + "<br>");
    document.write(i + " x " + 10 + " = " + i * 10 + "<br>");
}
