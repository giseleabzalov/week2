//          ***** objects and arrays *****

const people = [
    {
        first_name: "Jiho",
        last_name: "Sohn",
        age: "old",
        gender: "male"
    }, // 0

    {
        first_name: "Idan",
        last_name: "Fischer",
        age: 18,
        gender: "male"
    } // 1
];

// const result = people[0];
const result = people[1]["last_name"]; // [1] access to array 1, then "last_name"
                                        // is the key to the value we want to access
                                        // dot notation can be used people[1].last_name
console.log(result)

const cart = {
    fruit: [
        "banana",
        "apple",
        "blueberry"
    ],

    drink: [
        "kambucha",
        "coffee",
        "tea"
    ]
};

const result1 = cart.fruit[0];     // dot notation
const result2 = cart["drink"][1];   // bracket notation
const fruit = "drink";

console.log(result1);
console.log(result2);
console.log(fruit)

//  ***** functions *****

// functions

const addNumber = (x,y) => {      // function () => {  
    const totalSum = x + y;
    return totalSum;
};

// process

const result3 = addNumber(2,6)  //addNumber - envoking the function
const finalMessage = `the result of the sum is ${result3}`

// console.log(result3) //the same as console.log(addNumber(2,6))

console.log(finalMessage)