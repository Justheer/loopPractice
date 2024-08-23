//Print a Sequence
//Write a for loop that prints the numbers from 1 to 10.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10;) {
    i = i + 2;
    const numbers = [i];
    console.log(numbers);
}

//Calculate the Factorial
//Write a function called factorial that takes a positive integer n and returns the factorial of n (the product of all positive integers less than or equal to n).

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
// console.log(factorial(5));

//Sum of Array Elements
//Write a function that takes an array of numbers and returns the sum of all elements using a for loop.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// console.log(sumArray([1,2,3,4,5]));

// Reverse a String
//Write a function that takes a string as input and returns the string in reverse order using a for loop.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

//Count Vowels
//Write a function that takes a string as input and counts the number of vowels (a, e, i, o, u) using a for loop.

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript"));



//Multiplication Table
//Write a function that prints the multiplication table for numbers from 1 to 10.
// Challenge: Modify the function to accept a parameter that specifies the range (e.g., 1 to 5).

for (let i = 1; i < 6; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + ' = ' + i * j);
    }
}




