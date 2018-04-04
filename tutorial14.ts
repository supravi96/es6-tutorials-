let displayColors = function(message,...colors){

    console.log(message)
    console.log(colors);
    console.log(arguments.length)
    for(let i in colors){
        console.log(colors[i])
    }
}

let message = "List of all colors ";

let colorArray = ['Orange','Yellow','Indigo'];

displayColors(message,...colorArray);
// displayColors(message,'Red'); 
// displayColors(message,'Red','Blue'); 
// displayColors(message,'Red','Blue','Green'); 


//Rest is to combine and spread is to split
//rest ops remains in function definition and spread in func call
