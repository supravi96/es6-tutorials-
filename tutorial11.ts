var employee = {
    id: 1,
    greet: function () {

        setTimeout(function () {
            console.log(this.id)
        }, 1000)

    },
    meet: function () {
        setTimeout(() => {
            console.log(this.id)
        }, 1000)
    }
}

employee.greet();
employee.meet();

// Every function has its own this keyword

//Arro function does not have its own this , it refers to its parent function this
