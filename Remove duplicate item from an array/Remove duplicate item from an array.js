
var n = [];
for (let i = 0; i < 5; i++) {

    n[i] = prompt("Enter Array Element " + (n));

}
let uniqueChars = [...new Set(n)];

console.log(uniqueChars);
document.write("Your Array is " + n);
document.write("<br/> <br/>");
document.write("New Array after removing duplicate item:- " + uniqueChars);
