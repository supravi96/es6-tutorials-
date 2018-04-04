
let perBonus = () => 5;
let getValue = function (value = 10,bonus = value+ perBonus()) {
    console.log(value,bonus)

    console.log(arguments.length)
}

getValue();

getValue(20);

getValue(30,40);

// getValue(undefined,30);