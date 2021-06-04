// Given the below array, create a function which loops through each name, comparing
// the length of each to determine the longest name, save that name to the variable
// longest_name. Return longest_name to the another variable called answer and log the
// answer variable to the screen.

var array = ["Retta", "Vern", "Marica", "Cyrus", "Linette", "Curt", "Nichole", "Jessica", "Wynell", "Michaele"];


function findLowest(){
    var longest_length = 0;
    var longest_name;
    for(var i =0; i< array.length; i++){
        if(array[i].length > longest_length){
            longest_length = array[i].length;
            longest_name = array[i];
            // console.log(longest_length);
            // console.log(longest_name);
        }
    }

    return longest_name;
}

var answer = findLowest();
console.log(answer);