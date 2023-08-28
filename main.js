// Counting Sum Pairs
// Write a function which takes 2 parameters: an array of whole numbers and an integer X.

// The function should look for pairs of numbers in the array which sum to X. Each array element can only be used in one pair. The function should return the count of how many such pairs it finds.

// You may assume that the array passed to the function has already been sorted in ascending order.

// State any assumptions or design choices you have made.

// Examples:
// X: 1
// Array: [3, 4, 5, 6]
// Output: 0

// X: 15
// Array: [0, 15, 32, 2000, 15000]
// Output: 1

// X: 42
// Array: [1, 1, 10, 32, 41]
// Output: 2

 const myArray = [1, 1, 10, 32, 41]
const number = 42;

function findSumOfPairs(arr, target) {
  count = 0;
  const numbers = [];

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const value = target - currentNumber;

    if (numbers.includes(value)) {
      const index = numbers.indexOf(value);
      numbers.splice(index, 1);
      count++;
    } else {
      numbers.push(currentNumber);
    }
  }
  return count;
}

console.log(findSumOfPairs(myArray, number));

// taking the assumption that an actual array and number is being passed into the function. 
// I did not have time to write any actual tests but I did use a lot of logging to the console to see how I was manipulating the arrays
//The function iterates over the array passed in and finds the value needed to add up to the target value passed in. If that value is not in the array "numbers", the "currentNumber" is then added to that array.
//If the value is in the numbers array, then the count of pairs goes up and that value is removed from the numbers array. this insures the values can only be used in one pairing.


