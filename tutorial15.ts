let firstName = "Shenoy";
let lastName = "Dsouza";

let person = {
    firstName,
    lastName
}

function createPerson(firstName, lastName, age) {
    let fullName = firstName + " " + lastName;
    return {
        firstName, lastName, fullName, isSenior() {
            return age > 60;
        }
    };
}

let p = createPerson("Ross", "taylor", 62);
console.log(p.firstName)
console.log(p.lastName)
console.log(p.fullName);
console.log(p.isSenior());



// console.log(person.firstName)
// console.log(person.lastName)