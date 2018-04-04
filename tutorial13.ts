let displayColors = function(message,...colors){

    console.log(message)
    console.log(colors);
    console.log(arguments.length)
    for(let i in colors){
        console.log(colors[i])
    }
}

let message = "List of all colors ";

displayColors(message,'Red'); 
displayColors(message,'Red','Blue'); 
displayColors(message,'Red','Blue','Green'); 