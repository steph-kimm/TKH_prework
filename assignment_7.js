// Create a function that takes the below array of names, and separates them into two
// arrays one of the names with an even number of letters and one with an odd number of
// letters.
// Then take the first letter of each of the names in the even array and make it the
// letter "b", take the last letter in each of the names in the odd array and make them
// a “c”
// Print both arrays and then return the even one to a variable named even_array and
// print it again.

var names_array = ["bob" , "jimmy", "max b", "bernie" , "jordan", "future hendrix"] ;
var odd_names = [] ;
var even_names = [] ;
function sort(){
    //sorting the arrays
    for(var i =0 ; i< names_array.length; i++){
        if(names_array[i].length%2 == 0){
            odd_names.push(names_array[i]);
        }else{
            even_names.push(names_array[i])
        }
    }

    //changing first letter of even 
    for(var i =0; i< even_names.length ; i++){
        even_names[i]= "b" + even_names[i].slice(1);
    }
    //changing last letter of odd
    for(var i =0; i< odd_names.length ; i++){
        var size = odd_names[i].length;
        odd_names[i] = odd_names[i].slice(0,size-1) +"c";
    }

    console.log(even_names);
    console.log(odd_names);



    return even_names;
}

console.log(sort());


