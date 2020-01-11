/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

function isPrime(num) {
  if (num === 0 && num === 1) return false;
  else if (num === 3) return true;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function nthPrime(n) {
  var nums = [];
  var count = 0;
  for (var i = 1; count <= n; i++) {
    if (isPrime(i)) {
      nums.push(i);
      count++;
    }
  }
  return nums[nums.length - 1];
}
