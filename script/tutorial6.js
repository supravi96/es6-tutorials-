"use strict";
function greetPerson(name) {
    var greet;
    if (name === "Shenoy") {
        greet = "Hello Shenoy";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Sheno");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); //10
    console.log(b_1); //20
}
console.log(a); // 10
console.log(b); // 2
//# sourceMappingURL=tutorial6.js.map