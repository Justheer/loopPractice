
//Write a while loop that counts down from 10 to 1 and prints each number.


let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

//-----

let num = 20;
while (num >= 1) {
    console.log(num);
    num--;
}

//Write a do-while loop that prints the numbers from 1 to 5.

let counter = 1;

do {
    console.log(counter);
    counter++;

} while (counter <= 5);



//Write a function that takes an object and uses a for-in loop to iterate over its properties. Print each key and value.



function properties(obj) {
    for (const key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

properties(person);


//Write a function that takes a string and uses a for-of loop to iterate over each character. Print each character on a new line.

const greetings = "Hello world!";

for (const greet of greetings) {
    console.log(greet);
}


//Write a function that takes an array of numbers to filter out the even numbers into a new array. Return the new array.


const numbers = [32, 33, 24, 86, 8, 66];

console.log(numbers.filter(num));
function num(numbers) {
    return numbers >= 66;
}

//Write a function that takes an array and uses forEach to print each element of the array.

const language = ["js", "nodejs", "html", "css", "react"];

language.forEach(function (item) {
    console.log(item);
});

//map

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

for (const key in map) {
    console.log(key);

}

