/*Prime Sifting
The goal in solving this problem is to use recursion!

Given a number, write a method that returns all of the prime numbers less than that number.

This is a tricky problem and you should use the Sieve of Eratosthenes to solve it. Here's how the Sieve of Eratosthenes works to find a number up to a given number:

1. Create a list of numbers from 2 through n: 2, 3, 4, ..., number.
2. Initially, let prime equal 2, the first prime number.
3. Starting from prime, remove all multiples of prime from the list.
4. Increment prime by 1.
5. When you reach number, all the remaining numbers in the list are primes.

// sample
//[2,3,4,5,6,7,8,9]
//[2,3,5,7,9]
//[2,3,5,7] */
function getNumArray(maxNumber) {
  // create an array with numbers from 2 to maxNumber - 1
  if (maxNumber < 2) {
    return [];
  }
  return Array(maxNumber - 2)
    .fill()
    .map((e, i) => i + 2);
}

function getPrimeNumsRecursive(numArray, prime, maxNumber) {
  // base case: prime is greater or equal to max Number
  if (prime >= maxNumber) {
    return numArray;
  }
  if (numArray.includes(prime)) {
    let index = numArray.indexOf(prime);
    let i = index + 1;
    while (i < numArray.length) {
      //   console.log("index ", i, " for ", numArray, "dividing by ", prime);
      //   if current value is a multiple of prime, remove it from the list
      if (numArray[i] % prime == 0) {
        numArray.splice(i, 1);
        i = i;
      } else {
        i = i + 1;
      }
    }
    return getPrimeNumsRecursive(numArray, prime + 1, maxNumber);
  } else {
    return getPrimeNumsRecursive(numArray, prime + 1, maxNumber);
  }
}

const maxNumber = 100;
const prime = 2; // prime will always begin from 2
console.log(getPrimeNumsRecursive(getNumArray(maxNumber), prime, maxNumber));
