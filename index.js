// Index.js
// print in python is console.log in javascript

/////////////////////// Variables ///////////////////////

// const name = "Vedha";

// console.log(name);

// name = "Vishal";

// console.log("Changed name is ", name);

// name = 123;

// console.log("Changed name is ", name);

// Address Asignment
// let arr = [1,2,3,4,5];

// console.log(arr);

// arr.push(6);

// console.log(arr);

// arr.pop();

// console.log(arr);

// const arr1 = [10,20,30,40,50];

// arr = arr1;

// arr1 = arr

// console.log(arr);


///////// JSON //////////

// You can have anything as value in json
// const jsonObject = {
//     "name": "Vedha",
//     "age": 21,
//     "address": "Chennai",
//     "country": "India",
//     "hobbies": ["Reading", "Coding", "Gaming"],
//     "anotherObject": {
//         "name": "Vishal",
//     },
//     "booleanValues": true,
    
// };

// console.log(jsonObject);

// // Only name

// // Two ways
// console.log(jsonObject['name']);


// console.log(jsonObject.name);

// // Check if key exists

// console.log(jsonObject['city']);

// if(jsonObject['city'] == undefined) {
//     console.log("City is not present");
// }

// // Add new key value pair

// jsonObject['city'] = "Chennai";

// console.log(jsonObject['city']);

// const jsonstring = JSON.stringify(jsonObject);

// // Send it somewhere
// console.log(jsonstring);

// // Convert string to json

// const jsonobject = JSON.parse(jsonstring);
// console.log(jsonobject);

// const jsonObject = {
//     "name": "Vedha",
//     "age": 21,
//     "address": "Chennai",
//     "country": "India",
//     "hobbies": ["Reading", "Coding", "Gaming"],
//     "anotherObject": {
//         "name": "Vishal",
//     },
//     "booleanValues": true,
    
// };

// const keys = Object.keys(jsonObject);

// // console.log(keys);

// // For Each very important

// // Adding string together

// keys.forEach((key) => {
//     // console.log("Key: "+ key + " Value: " + jsonObject[key]);
//     // Variable with strings is called string interpolation
//     console.log(`Key: ${key} Value: ${jsonObject[key]}`);
// });

// const testArray = [1,2,3,4,5];
// Basic For Loop
// for(let i = 0; i < testArray.length; i++) {
//     // traversing by index
//     console.log(testArray[i]);
// };

// For Each Loop

// testArray.forEach((value,index) => {
//     // traversing by value
//     console.log(`Value: ${value} Index: ${index}`);
// });

// const newArray = [10,20,30,40,50];

// const newArray = []
// testArray.forEach((value,index) => {
//     // traversing by value
//     // testArray[index] = testArray[index]*10;
//     newArray.push(value*10);
// });


// newArray.forEach((value,index) => {
//     // traversing by value
//     console.log(`Value: ${value} Index: ${index}`);
// });


// Map

// const newArray = testArray.map((value)=>{

//     // Transforming the value

//     return value*10;
// });


// const newArray = testArray.map((value)=> value*10);

// console.log(newArray);

// newArray.forEach((value,index) => {
//     // traversing by value
//     console.log(`Value: ${value} Index: ${index}`);
// });

// Filter

const testArray = [1,2,3,4,5];

// Values more than 3

// const newFilteredArray = [];

// for (let index = 0; index < testArray.length; index++) {
//     const element = testArray[index];

//     if(element > 3) {
//         newFilteredArray.push(element);
//     }
    
// };

// const newFilteredArray = testArray.filter((value)=> {
//     // run conditions here

//     return false;
// });

// Array with JSON with name and age

const jsonArray = [{
    "name": "Vedha",
    "age": 21,
},{
    "name": "Vishal",
    "age": 22,
}];


// console.log(newFilteredArray);

const newFilteredArray = jsonArray.filter((value)=> value.age >21)
                                .map((value)=> value.name)
                                .filter((value)=> value.startsWith('V'))

console.log(newFilteredArray);
