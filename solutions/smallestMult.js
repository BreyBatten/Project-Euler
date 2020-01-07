/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/

function smallestMult(n) {
    let denominator = (a, b) => b === 0 ? a : denominator(b, a % b);
    let result = 1;
  
    for (let i = 2; i <= n; i++) {
      result *= i / denominator(i, result);
    }
    return result;
  }
  
  smallestMult(20);
  