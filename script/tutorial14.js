"use strict";
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of all colors ";
var colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors.apply(void 0, [message].concat(colorArray));
// displayColors(message,'Red'); 
// displayColors(message,'Red','Blue'); 
// displayColors(message,'Red','Blue','Green'); 
//Rest is to combine and spread is to split
//rest ops remains in function definition and spread in func call
//# sourceMappingURL=tutorial14.js.map