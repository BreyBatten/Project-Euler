/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

function sumSquareDifference(n) {
    function sumSquare(n) {
      var i, s = 1,
              e = Math.log(n) / Math.LN10;
          if (e - (e << 0) === 0) {
              s = n * (n >> 1) + (n >> 1);
          }
          else {
              for (i = 2; i <= n; i += 1) {
                  s += i;
              }
          }
          return s * s;
    }
  
    function squareSum(n) {
      var i, s = 1;
      for(i = 2; i <= n; i += 1) {
        s += i * i;
      }
      return s;
    }
    return sumSquare(n) - squareSum(n);
  }
  sumSquareDifference(100);