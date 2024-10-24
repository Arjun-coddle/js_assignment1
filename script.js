
//Create variables with different data types available in JS and print their data types along with each variable name in the console.

//String
let sampleString = "Sample String";
console.log(sampleString, typeof sampleString);

//Number
let sampleNumber = 24;
console.log(sampleNumber, typeof sampleNumber);

//Object 
let sampleObject = {
    name:"Ajrun",
    age:23,
    place:"Palakkad"
}
console.log(sampleObject, typeof sampleObject);

//Array
let sampleArray = [1,2,3,4,5,6];
console.log(sampleArray, typeof sampleArray);

//Function
let sampleFunction = function() {
    return "My Name Is Arjun"
}
console.log(sampleFunction(), typeof sampleObject);

//undifined
let undifined;
console.log(undifined, typeof undifined);


console.log('-------------------');
// 2.Write a JS program to show an alert message on the loading of the website.
// alert("wellcome");


console.log('-------------------');
//3.["1", "2", "3", "4", "5", "6", "7"] 
//a. Remove number "6" from the array and console the length of the array.
let a = ["1", "2", "3", "4", "5", "6", "7"];

a.splice(a.indexOf("6"), 1);
console.log(a);

console.log('-------------------');
//b. Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.
for (let i = 0; i < a.length; i++) {
    a[i] = Number(a[i]);
    console.log(a[i], typeof a[i]);
}

console.log('-------------------');
//c. Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array. 
a.splice(-3, 3);
a.unshift("one", "two");
console.log(a);


console.log('-------------------');
//d. Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)
let d = [0, 2, 3, 7, 5, 6, 8];
let concatenatedString = '';
let sum = 0;

for (let i = 0; i < d.length; i++) {
    concatenatedString += d[i].toString();
    sum += Number(d[i]);
}

console.log('Concatenated String:', concatenatedString);
console.log('Sum of Items:', sum);


console.log('-------------------');
//e. Filter out item "3" from the array and console the array (use array method)
a = a.filter(item => item != "3");
console.log(a);


console.log('-------------------');
//f. Iterate the array and console the item, when item is either "3", "6" or "7"
for (let i = 0; i < a.length; i++) {
    if (a[i] === "3" || a[i] === "6" || a[i] === "7") {
        console.log(a[i]);
    }
    else{
        console.log("there is no items");
    }
}


console.log('-------------------');
//g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)
let g1 = ["1", "2", "3", "4", "5", "6", "7"];
let g2 = [1, 2, "3", 4, 5, 6, "7"];

for (let i = 0; i < g1.length; i++) {
    for (let j = 0; j < g2.length; j++) {
        if (typeof g1[i] === typeof g2[j]) {
            console.log(` ${g1[i]} and ${g2[j]}`);
        }
    }
}


console.log('-------------------');
//h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.
let h = [0, 2, 3, 7, 5, 6, 8];

for (let i = 0; i < h.length; i++) {
    let result = h[i] * i;
    if (result > 40) {
        console.log(`Result: ${result} (Item: ${h[i]}, Index: ${i})`);
    }
}


console.log('-------------------');
//i. Create two arrays with five items each and merge the array into a single array and then console it.
let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];

let mergedArray = [...array1, ...array2];
console.log(mergedArray);
