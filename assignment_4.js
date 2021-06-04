// Now create a loop that compares the array of numbers provided for the number 25,
// console log over if it is over and under if it is under
// over_under_array = [1,45,32,21,5,17,43,93]

var over_under_array = [1,45,32,21,5,17,43,93]
for(var i =0; i < over_under_array.length; i++){
    if(over_under_array[i]< 25){
        console.log("under")
    }
    else{
        console.log("over")
    }

}