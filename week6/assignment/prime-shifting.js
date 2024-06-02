function getNumArray(maxNumber) {
  // create an array with numbers from 2 to maxNumber - 1
  const numArray = Array(maxNumber - 2)
    .fill()
    .map((e, i) => i + 2);
  return numArray;
}

// sample
//[2,3,4,5,6,7,8,9]
//[2,3,5,7,9]
//[2,3,5,7]

function getPrimes(numArray, num) {
  let index = numArray.indexOf(num);

  //   confirm number exists in the current array
  if (index >= 0) {
    let i = numArray.indexOf(num) + 1;
    while (i < numArray.length) {
      //   console.log("index ", i, " for ", numArray, "dividing by ", num);
      //   if current value is a multiple of num\, remove it from the list
      if (numArray[i] % num == 0) {
        numArray.splice(i, 1);
        i = i;
      } else {
        i = i + 1;
      }
    }
  }
  return numArray;
}

const getPrimeNumbersLessThanNumber = (maxNumber) => {
  const numArray = getNumArray(maxNumber);
  let newArray = numArray;
  for (let i = 2; i < maxNumber; i++) {
    newArray[0] > i ? (currentValue = newArray[0]) : (currentValue = i);
    newArray = getPrimes(newArray, currentValue);
  }
  return newArray;
};
console.log(getPrimeNumbersLessThanNumber(10));
