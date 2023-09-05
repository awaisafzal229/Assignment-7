// Write a program that uses filter to remove all negative numbers from an array of numbers

let arr:number[]=[2,34,56,-3,54,-5,-6,33,-8,99];

let arr2:number[]=arr.filter((element,index)=>{
    if (arr[index]<0) {
        return false;
    }
    else return true;
})
console.log(arr2);

// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

let arrayNumbers:number[]=[1, 2, 3, 4, 5];

let newArrayNumber:number[]=[];
newArrayNumber= arrayNumbers.map((element)=>{
    return element*2;
})
console.log(newArrayNumber);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.


let arrayOfFruits:string[]=["apple", "banana", "cherry", "date", "grape"];
let newArrayOfFruits:string[]=arrayOfFruits.filter((element)=>{
   return  element.length > 5;
})
console.log(newArrayOfFruits);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.


let arrOfNumbers:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterEvenNumers:number[]=arrOfNumbers.filter((element)=> element%2===0)
let squareOfEvens:number[]=filterEvenNumers.map((element)=>element*element);
console.log(squareOfEvens);


// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

const tempInC:number[]= [0, 10, 20, 30, 40];
const tempInF:number[]=tempInC.map((element,index)=>{
    return element*(9/5)+32;
})
console.log(tempInF);

// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.


let arrayOfNumbers:number[]=[3, 6, 9, 12, 15, 18];
let newArray:number[]=arrayOfNumbers.filter((element)=>element %2!==0).map((element)=>element+element)
console.log(newArray);

// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".


let names:string[]=["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name)=>{
    console.log(name + "!");
    
})

