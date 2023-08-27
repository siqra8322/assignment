// ------------------------ Question 1-----------------

// Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified index in the array.
// Return the modified array.

let array = [2, 3, 4, 5, 6, 7];
let indexValue = 2;
let valueToBeInserted = 10;
function ArrayWithIndexAndValue(array: number[], index: number, value: number) {
  array.splice(index, 0, value);

  return array;
}

// console.log(ArrayWithIndexAndValue(array,indexValue,valueToBeInserted))

// ------------------------ Question 2-----------------

// Implement a simple shopping cart program using an array.
// Create functions to add items, remove items, and update quantities using the splice method.
// Print the cart's contents after each operation

// ------------------------ Question 3-----------------

// Write a program that uses a while loop to print the first 25 integers.

function first25Integers() {
  let count = 1;

  while (count <= 25) {
    // console.log(count);
    count++;
  }
}

// console.log(first25Integers());


// ------------------------ Question 4-----------------

// Write a program that uses a while loop to print the first 10 Even Numbers.

console.log(first25Integers())
function first10EvenNumbers () {

    let count = 1;
    let evenCount = 0;

    while (evenCount <10) {
        if(count % 2 === 0){
            console.log(count)
            evenCount++

        }
        count++
    }

}

// console.log(first10EvenNumbers());



// ------------------------ Question 5-----------------

// Create a function that takes a positive integer as parameter 
// and uses a while loop to calculate and return the factorial of that number.

function factoralNumber(num:number) {

    if(num < 0) {
        console.log('Negative numbers are not allowed')
    }

    let count:number = 1
    let currentNumber:number = 1

    while (currentNumber <= num) {
        count *= currentNumber
        currentNumber++
    }
    return count

}

// console.log(factoralNumber(5))


// ------------------------ Question 6-----------------

// Write a program having an array of numbers if 
// the number is negative it should remove the negative number from the array.

const negativeArray = [5, -2, 10, -8, 15, -3, 0, 7];

function removeNegativeNumbers(array:number[]) {
    return array.filter((num) => num >= 0)
}

// console.log(removeNegativeNumbers(negativeArray));


// ------------------------ Question 7-----------------

// Create a function that takes an array of numbers as parameter. 
// Use a while loop to calculate and return the sum of all the numbers in the array.

const numberArray = [5, 10, 15, 20];

function multiplyArrayNumbers (array:number[]) {

    let sum = 0
    let index = 0

    while(index< array.length){
        sum += array[index]
        index++
    }
    return sum

}


// console.log(multiplyArrayNumbers(numberArray));


// ------------------------ Question 8-----------------


// Implement a program that takes a list of temperatures in Celsius as input from the user. 
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and 
// store the converted temperatures in an array.
//  Use a while loop to perform the conversion for each temperature.


let celsiusArray:number[] = [0, 10, 20, 30, 40]
let farenhitArray:number[] = []

function convertToFarenhit (celcius:number) {
    return (celcius * 9 / 5) + 32
}

let index =0

while(index < celsiusArray.length){
    let celcius = celsiusArray[index]
    let farenhit = convertToFarenhit(celcius)
    farenhitArray.push(farenhit)
    index++
}

console.log("Celsius Array:", celsiusArray);
console.log("Converted Fahrenheit Array:", farenhitArray);