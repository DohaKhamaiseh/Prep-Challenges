'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let  strArr = str.split(" ");
    let middleStr = "";
     console.log(strArr);
    
      if (strArr.length %2==0)
      {middleStr = strArr[strArr.length/2] ;} 
    
     else 
    { 
      middleStr = strArr[parseInt(strArr.length/2)] ;}
    
       //   console.log(middleStr) ;
    //  console.log(middleStr.length) ;
     return middleStr.length ;
   
  }

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let strLetter1 = str1.split("");
    let strLetter2 = str2.split("");
    
    for (let i = 0; i < strLetter1.length; i++) {
      if (strLetter1.length ==strLetter2.length )
      { if (strLetter2.includes(strLetter1[i])) {
        return true;
      }
      else {return false;}
    }
      else {return false;}
    }
  }

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };