"use strict";
var perBonus = function () { return 5; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value + perBonus(); }
    console.log(value, bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(30, 40);
// getValue(undefined,30);
//# sourceMappingURL=tutorial12.js.map