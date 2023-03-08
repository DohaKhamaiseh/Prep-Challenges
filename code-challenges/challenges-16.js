'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
   let arrStr = string.split('');
  //console.log(arrStr);
  let rev = [];
  for(let j=arrStr.length-1; j>=0 ; j--){
    rev.push(arrStr[j]) ;
  }
  //console.log(rev);
  return rev.join("") ;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    const str = /\^_\^/;
    let arrSmile = [];
     for (let i=0; i<arr.length; i++){ 
       // if (arr[i].includes("^_^") )
       // {arrSmile.push(arr[i]) ;}
  
       if (str.test(arr[i]))
          {arrSmile.push(arr[i]) ;}
     }
    //console.log(arrSmile) ;
    return arrSmile ;
  }
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    let arrStr = str.split("") ;
    let arrEven = [];
     for (let i=0; i<arrStr.length; i++)
       {
         if (i%2==0)
          arrEven.push(arrStr[i]) ;
       }
   // console.log(arrEven.join(''));
    return arrEven.join('') ;
  }
  
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
  let arrChicken = [];
    for (let i=0; i<arr.length; i++){
      for (let j=0; j<arr[i].length; j++)
        {
          
          if(arr[i][j].includes("chicken")) {
            arrChicken.push(arr[i][j]) ;
          }
        }
    }
  let Arr =[];
   for (let n=0 ;n<arrChicken.length; n++){
    //Arr = arrChicken.splice(1, 0, arrChicken[n]);
     Arr.push([arrChicken[n]]) ;
  }
  //console.log(Arr);
  return Arr ;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
