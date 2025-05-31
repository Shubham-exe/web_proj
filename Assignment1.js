//! 1.Create an array of numbers. Add one element to the end using push() and one to the 
//! beginning using unshift(). Print the final array. 
const arr = [10, 20, 30, 40, 50];
arr.push = (60);
console.log(arr);

arr.unshift(30);
console.log(arr);

//! 2. Create an array of 5 fruits. Remove the last element using pop() and the first element 
//! using shift(). Print the modified array. 
let fruits = ["apple", "banana", "grapes", "peaches", "mango"];
console.log(fruits);

fruits.pop();
console.log(fruits)

//! 3. Create an array [10, 20, 30, 40]. Use splice() to remove 20 and insert 25 at 
//! the same index. Print the result. 
let num = [10, 20, 30, 40];
console.log(num);

num.splice(1, 1, 25);
console.log(num)

//! 4. Create an array of 4 colors. Use join('-') to convert the array into a single string and 
//! print it.
let colors = ["Pink", "BabyPink", "Magenta", "Fuchsia"];
console.log(colors);

let result = colors.join("-");
console.log(result);

//! 5. Use toString() on an array [100, 200, 300] and print the result. 
let arrs = [100, 200, 300];
console.log(arrs);

const value = arrs.toString();
console.log(value);

//! 6. Create an array [5, 10, 15, 20]. Use .at(-1) to access the last element and print 
//! it. 
let arr1 = [5, 10, 15, 20];
console.log(arr1);

console.log(arr1.at(-1));

//! 7. Use copyWithin() to copy the first 2 elements of [1, 2, 3, 4, 5] into the last 2 
//! positions. Print the result. 
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

arr2.copyWithin(3, 0, 2);
console.log(arr2);

//! 8. Create a nested array [1, [2, 3], [4, [5]]]. Use flat(2) to flatten it 
//! completely. Print the result.
const nestedArr = [1, [2, 3], [4, [5]]];
const flattened = nestedArr.flat(2);
console.log(flattened);

//! 9. Use slice() to copy the middle two elements of [10, 20, 30, 40, 50]. Print the 
//! result. 
const middleTwo = arr.slice(1, 3);  
console.log(middleTwo);

//! 10. Use concat() to merge two arrays [1, 2] and [3, 4]. Print the final array.
const FirstArr = [1, 2];
const SecondArr = [3, 4];

const merged = FirstArr.concat(SecondArr);
console.log(merged);

//! 11. Create an array of 5 numbers. Use the delete operator to delete the 2nd index value. 
//! Print the array and its length.
const FiveArray = [30, 56, 79, 42, 69];
console.log(FiveArray);

delete FiveArray[2];
console.log(FiveArray);
console.log(FiveArray.length);

//! 12. Use toSpliced() to remove the second element of an array [9, 8, 7, 6] and 
//! insert 10, 11 at that position. Print original and new array.
const unsplicedArr = [9, 8, 7, 6];

const splicedArr = arr.toSpliced(1, 1, 10, 11);

console.log("Original array:", unsplicedArr);   // Output: [9, 8, 7, 6]
console.log("New array:", splicedArr);     // Output: [9, 10, 11, 7, 6]

//! 13. Create an array [1, 2, 3, 4, 5]. Use splice() to remove last 2 elements and print the resulting array.
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(-2);  // Removes last two elements
console.log("Q13 Result:", arr13);  // Output: [1, 2, 3]

//! 14. Make a copy of [7, 8, 9] and insert 6 at the beginning using unshift() without modifying the original array.
const arr14 = [7, 8, 9];
const copy14 = [...arr14];  // Create a shallow copy
copy14.unshift(6);
console.log("Q14 Original:", arr14);  // Output: [7, 8, 9]
console.log("Q14 Modified Copy:", copy14);  // Output: [6, 7, 8, 9]

//! 15. Write a function that accepts an array and returns a string of all elements joined with ' | '.
function joinWithPipe(arr) {
  return arr.join(' | ');
}
console.log("Q15 Result:", joinWithPipe([1, 2, 3]));  // Output: "1 | 2 | 3"

//! 16. Create a function that returns the last item of an array using only .length.
function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log("Q16 Result:", getLastElement([10, 20, 30]));  // Output: 30

//! 17. Write a function to return the 2nd last element using .at() method.
function getSecondLastElement(arr) {
  return arr.at(-2);
}
console.log("Q17 Result:", getSecondLastElement([100, 200, 300, 400]));  // Output: 300

//! 18. Create a function to reverse an array without using reverse() method (use unshift() inside a loop).
function customReverse(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
  }
  return reversed;
}
console.log("Q18 Result:", customReverse([1, 2, 3]));  // Output: [3, 2, 1]

//! 19. Flatten a 2D array like [[1,2],[3,4]] using .flat() and return it.
function flatten2D(arr) {
  return arr.flat();
}
console.log("Q19 Result:", flatten2D([[1, 2], [3, 4]]));  // Output: [1, 2, 3, 4]

//! 20. Given two arrays, one of names and one of marks, return a combined array of string format like ["Ram: 80", "Shyam: 90"] using join() and loop.
function combineNamesAndMarks(names, marks) {
  let combined = [];
  for (let i = 0; i < names.length; i++) {
    combined.push(`${names[i]}: ${marks[i]}`);
  }
  return combined;
}
console.log("Q20 Result:", combineNamesAndMarks(["Ram", "Shyam"], [80, 90]));  // Output: ["Ram: 80", "Shyam: 90"]



