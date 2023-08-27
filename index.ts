// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

function calculateEvenNumerSum(result:number):number{

    let sum:number =0

    for(let i =0;i <= result; i++){
        
        let evenNumber:number = i * 2

        sum +=evenNumber
    }

    return sum
    

}

// console.log(calculateEvenNumerSum(5));


// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

let arry:number[] = [1,2,3,4,5,6,7,8,9,10,12]
let finalArray:number[] = []
function findEvenNumbersFromArray(list:Array<number>){
    for (let i = 0; i <= list.length; i++) {
        let num:number = list[i]        
        if(num % 2 == 0) {
            finalArray.push(num)
        }
        
    }
    return finalArray
}
// console.log(findEvenNumbersFromArray(array));

// Implement a program that uses a loop to iterate through an array of numbers and remove all 
// the even numbers from them and just leave the odd ones

function removeAllTheEvenNumbers(list:number[]){
    let oddNumbers:number[] = []
    for (let i = 0; i < list.length; i++) {
        const element = array[i];
        if(element % 2 != 0){
            oddNumbers.push(element)
        }

    }
    return oddNumbers

}

// console.log(removeAllTheEvenNumbers(array));


// Write a program that defines a function to calculate the area of a circle. 
// The function should take the radius as input and return the calculated area.

function calculateTheAreaOfCircle(radius:number){
    const pi = Math.PI
    let area:number = pi * radius * radius
     return area 
}
// console.log((calculateTheAreaOfCircle(3)));


// Develop a program that reads a list of grades and 
// uses the splice method to remove failing grades (below 50) from the array.

let example:number[] =[65, 48, 72, 35, 90, 42, 60, 55, 80];

function removeBelow50Marks(list:number[]){
    for(let i = list.length -1 ; i >=0;i--){
        const marks = list[i]
        console.log(marks);
        if(marks<50){
            list.splice(i,1)
        }
    }

    return list

}

// console.log(removeBelow50Marks(example));

// Write a program that uses a function to find the largest element in an array of numbers


function findTheLargestElement(array:number[]){
    let largest:number = array[0]

    for (let i = 0; i < array.length; i++) {

        if(array[i] > largest){
            largest = array[i]
        }
        
    }
    return largest
}
// console.log(findTheLargestElement(example));