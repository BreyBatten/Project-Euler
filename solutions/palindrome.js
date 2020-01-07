/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
    // Good luck!
    let max = 1000;
    if(n === 2) {
      for(let i=99; i>9; i--) {
        for(let j=99; j>9; j--) {
          let number = i * j;
          let str = number.toString();
          if(str === str.split("").reverse().join("") && number > max) {
            return number;
          }
        }
      }
    }
    let newMax = 900000
    if(n === 3) {
      for(let i=999; i>99; i--) {
        for(let j=999; j>99; j--) {
          let number = i * j;
          let str = number.toString();
          if(str === str.split("").reverse().join("") && number > newMax) {
            return number;
          }
        }
      }
    }
    return max;
  }
  console.log(largestPalindromeProduct(3));
  largestPalindromeProduct(3);