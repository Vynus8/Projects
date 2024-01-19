// Challenge 1: Define a callback function before using it in an iterator
function callbackFunction(element) {
    console.log(element * 2);
}

const numbers = [1, 2, 3, 4, 5];

// Using forEach with the callback function
numbers.forEach(callbackFunction);

// Challenge 2: Chain two iteration methods on the same array
const words = ["apple", "banana", "cherry", "date"];

// Using map to capitalize each word and then filter to get words starting with 'a'
const result = words
    .map((word) => word.toUpperCase())
    .filter((word) => word.startsWith("A"));

console.log(result);
// Challenge 3: Use optional arguments in an iterator
const numberss = [1, 2, 3, 4, 5];

// Using forEach with optional arguments (index and array)
numberss.forEach((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
});
// Challenge 4: Use .reduce() to flatten a multi-layered array
const multiLayeredArray = [
    [1, 2, 3],
    [4, 5],
    [6, [7, 8], 9],
];

// Using reduce to flatten the array
const flattenedArray = multiLayeredArray.reduce((accumulator, current) => {
    return accumulator.concat(current);
}, []);

console.log(flattenedArray);
