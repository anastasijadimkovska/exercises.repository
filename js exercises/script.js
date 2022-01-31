// Task 1
//Declare a variable a.
//Assign the variable with the value of 7.
//Declare and asign a variable b with the value of 8.
//Declare a variable c and asign it the value of a + b.
//Print the value in the console.
let a = 7;
let b = 8;
let c = a + b;
console.log(c);

// Task 2
//Declare and asign an integer variable.
//Declare and asign a boolean variable.
//Declare and asign a string variable.
//Use the typeof operator to check the types of all assigned variables.
let integer = 7;
let boolean = true;
let str = "bitch";
console.log(typeof (integer));
console.log(typeof (boolean));
console.log(typeof (str));
// Task 3
//Declare 2 variables x and y and set them to 10 and 3.
//Declare and asign a variable that would be the result of division of 10 and 3.
//Declare and asign a variable that would be the whole part of the division of 10 and 3.
//Declare and asign a variable that would be the remainder of the division of 10 and 3.
let x = 10;
let y = 3;
let result = x / y;
let whole = ~~(x / y);
let remainder = x % y;
console.log(result);
console.log(remainder);
console.log(whole);
// Task 4
//Declare a variable name.
//Assign the variable to your name.
//Declare and assign a variable lastName with the value of your last name.
//Print Hello, and your name and last name in the console from the previous variables.
let name = 'Anastasija';;
let lastName = 'Dimkovska';
console.log(`Hello ${name} ${lastName}`);
// Task 5
//Declare two number variables and assign them any number
//Write an if statement that prints the larger one in console
let number1 = 5;
let number2 = 7;
if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
}

// Task 6
//Declare a variable and assign any number to it
//Write an if statement that finds out if a number is even OR larger than 100
//If it is print in the console: The number is cool!
let someNumber = 650;
if (someNumber >= 100) {
    console.log('The number is cool !')
}
// Task 7
//Write a JavaScript program that will convert denars to euros.
//One euro is 61.5 denars.
let denars = parseInt(prompt('Enter denars'));
let euro = denars / 61.5;
console.log(`${denars} denars is equal to ${euro} euros`);

// Task 8
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days
let day = 'Thursday';
switch (day) {
    case 'Tuesday':
    case 'Thursday':
        console.log('I am in SEDC');
        break;
    default:
        console.log('I am free');
}


// Task 9
//Declare and assign an array of 6 integers. Ex 5,6,15,42.
//Declare and assign an array of strings. Ex Dragan Trajan Martin
//Print the first value of each array.
//Print the arrays.
//Change the values of the first element in both arrays.
//Assign a value to the 100 th member of the first array.
//Print how many elements the array has? 
//What is the value of the 99th element in the array.
//Write an example of push.
//Write an example of pop.
//What is the value of the 1000th element in both arrays?

let integers = [5, 6, 15, 32, 22, 98];
let strings = ['mila', 'ana', 'lea', 'marija', 'sandra', 'afrika'];
integers[0] = 3;
integers[100] = 'flafi';
strings[0] = 'meme';
integers.push('hello');
strings.pop('afrika');
console.log(`the lenght of the first array is ${integers.length}`);
console.log(integers[0], strings[0]);
console.log(integers, strings);
console.log(integers[99]);
console.log(integers[1000], strings[1000]);
// 9.Write an if statement that prints "It's a cool number" if
// a number is even or larger than 100
let numbr = 100;
if (numbr >= 100) {
    console.log("It's a cool number")
}

// Task 10
//Write a while loop that counts from 0 to 10.
//The numbers should be printed in the console.
i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

// Task 11
//Write a for loop that counts from 1 to 20 but skips every second number.
//The numbers should be printed in the console.
for (i = 1; i <= 20; i += 2) {
    console.log(i)
}
// Task 12
//Write a JavaScript program that will find the sum of all items in the given array,  
//make it dynamic, so the result will change if the array is changed. 
function sumArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}
arr = [1, 2, 3];
console.log(sumArr(arr));

// Task 13
//Write a JavaScript program that will find the sum of all positive numbers in the array.
function sumPositive(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum += array[i]
        }
    }
    return sum;
}
arrey = [-2, 10, 15, 0, -1];
console.log(sumPositive(arrey));

// Task 14
//Write javascript program that will take the items from a given array
//and make new aray with the same items in revers order.
function reverseArray(arr) {
    let newArr = [];
    newArr = arr.reverse();
    return newArr;
}
arrayNumbers = [1, 2, 3, 4, 5];
console.log(reverseArray(arrayNumbers));
// Task 15
//Write javascript program that will find the average value
//from the all the item values in the given array.
function avgValue(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            sum += array[i]
        }
    }
    return sum / array.length;
}
let someArray = [1, 2, 3, 4, 5];
console.log(avgValue(someArray));

// Task 16
//Write a function that prints your name in the console
function myName(name) {
    return name;
}
let ime = 'Anastasija';
console.log(myName(ime));
// Task 17
//Write a function that accepts your name as an argument and returns "Hello NAME"
function helloName(name) {
    return `Hello ${name}`
}
let myname = 'Anastasija';
console.log(helloName(myname));
// Task 18
//Write a function that accepts 2 numbers as arguments and returns the sum of the two
function sumOfTwo(n1, n2) {
    let sum = n1 + n2;
    return sum;
}
console.log(sumOfTwo(3, 4));
// Task 19
//Write a function that takes a number and returns a message that tells you
//if the number is odd or even
function oddOrEven(number) {
    let message = '';
    if (number % 2 === 0) {
        message = 'The number is even';
    } else if (number % 2 !== 0) {
        message = 'The number is odd';
    }
    return message;
}
console.log(oddOrEven(10));
console.log(oddOrEven(11));

// Task 20
//Write a function that takes an array of numbers and returns the number
//of numbers in the array that are even
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNumbers(array) {
    let evenArray = [];
    for (let number of array) {
        if (number % 2 === 0) {
            evenArray.push(array[number]);
        }
    }
    return evenArray.length;
}
console.log(`the number of even numbers in the array is ${evenNumbers(arrayOfNumbers)}`);

// Task 21
//Write an HTML h1 element and select it in javascript by id
let heading = document.getElementById('heading');
console.log(heading);

// Task 22
//Write two p elements and select them by class
let paragraph = document.getElementsByClassName('paragraph');
console.log(paragraph);

// Task 23
//Write two h3 elements and select the first one by tag name
let smallHeading = document.getElementsByTagName('h3');
console.log(smallHeading[0]);
// Task 24
//Write a div and inside it write one h1 and 2 p elements
//Select the second p element through the div element
//Hint: You must select the div element and try to find p from there
let someDiv = document.getElementById('someDiv');
let divP = someDiv.lastElementChild;
console.log(divP);

// Task 25
//Write a h1 element with some text inside of it
//Change the text inside the h1 with Javascript
let changedHeading = document.getElementById('headingTwo');
changedHeading.innerText = 'This heading is changed'
    ;
console.log(changedHeading.innerText);
// Task 26
//Write an ul element in HTML
//In the ul element add 5 new li elements with Javascript
let list = document.querySelector('#list');
list.innerHTML += '<li> item 1 </li> <li> item 2 </li> <li> item 3 </li> <li> item 4 </li> <li> item 5 </li>';
console.log(list);

// Task 27
// Create an input, h1 element and a button
// as long as the number in the input is larger than 100 show the h1 element that reads: more than 100
// If the button is clicked but the number is lower hide the h1 element and write ERROR in the console
let someInput = document.querySelector('#someInput');
let someHeading = document.querySelector('.heading');
let aButton = document.querySelector('#btn');
function checkNumber(input, h1) {
    if (input.value > 100) {
        h1.innerText = 'more than 100';
    } else if (input.value < 100) {
        h1.innerText = '';
        console.log('ERROR')
    }
}
aButton.addEventListener('click', function () {
    checkNumber(someInput, someHeading);
})



// Task 28
// Create two inpust: Size and Color
// Create a button called order
// When the button is clicked add a new li element in an ul list wiht the title T-Shirt Orders
// In the new element write T-Shirt: Size ( Ex: T-Shirt: Medium )
// Get the size from the input. Also change the color of the text to the color entered.
// Clear the inputs after the button is clicked and a new li element is added
let inputSize = document.querySelector('#size');
let inputColor = document.querySelector('#color');
let buttonOrder = document.querySelector('#order');

function addListElement() {
    let list = document.querySelector("#uList");
    list.innerHTML += `<li style="color:${inputColor.value} ;"> T-Shirt: ${inputSize.value} </li>`;
    inputColor.value = '';    
    inputSize.value = '';
};

buttonOrder.onclick = addListElement;


// Task 29
// Create a simple calculator
// Have 3 inputs: num1, num2 and operation
// Have a button that says calculate
// After the button is clicked have the numbers execute with the operation given
// Show the result in an h1
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let operation = document.querySelector('#operation');
let total = document.querySelector('#result');
let calcBtn = document.querySelector('#calculate');

calcBtn.addEventListener('click', function () {
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
      let result;
    switch (operation.value) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;

        default:
            result = 'invalid operator';
            break;
    }
    
    total.innerText = result;

});



// Task 30
// Create a textarea element
// While typing live count how many words are in the textarea
// Show the result in an h1
// ( while typing means, the number of words is updated every time the user hits any button )
let textArea = document.querySelector('#textarea');
let wordCount = document.querySelector('#wordCount');
textArea.addEventListener('input', () =>{
let words = textArea.value.trim();
wordCount.innerText = ` Word Count:${words.split(/\s+/).filter((item) => item).length}`
} );
