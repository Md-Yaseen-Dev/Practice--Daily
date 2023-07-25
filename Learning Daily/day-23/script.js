// function DigitNumber(number) {
//     let sum = 0;
//     while (number > 0) {
//         sum = sum + number % 10;  // rem : 9
//         number = number / 10 | 0;  // 1919 /10  = 
//     }
//     return sum;
// }


// console.log(DigitNumber(1919));
// console.log(DigitNumber(2519));


// function digitnum(num) {

//     let arr = String(num).split("")

//     return arr.reduce((a, b) => Number(a) + Number(b))

// }
// console.log(digitnum(2010));

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []



// function first(arr, elem) {
//     let newarr = []
//     if (elem == null) {
//         newarr.push(arr[0]);
//     }
//     for (let i = 0; i < arr.length; i++) {


//         if (i < elem) {

//             newarr.push(arr[i])
//         }

//     }
//     return newarr
// }
// console.log(first([7, 9, 0, 2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], -3));
// console.log(first([7, 9, 0, -2], 6));



// function leapyear() {

//     let leaps = []
//     for (let i = 1900; i <= 2000; i++) {

//         if (i % 4 == 0 || i % 100 == 0 || i % 400 == 0) {

//             leaps.push(i)
//         }
//     }
//     return leaps
// }

// console.log(leapyear())


// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// function twoarrays(arr1, arr2) {

//     let newarr = [];

//     let a = arr1.length;

//     let b = arr2.length;

//     (a > b) ? arr2.push(0) : arr1.push(0);

//     for (let i = 0; i < arr2.length; i++) {

//         newarr.push(arr1[i] + arr2[i])
//     }


//     return newarr
// }

// console.log(twoarrays([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

function pairofelement(arr, target) {

    let newarr = []
    for (let i = 0; i < arr.length; i++) {

        for (let j = 1; j <= i; j++) {

            if ((arr[i] + arr[j]) == target) {

                newarr.push(j,i)
            }
        }
    }
    return newarr
}

console.log(pairofelement([10, 20, 10, 40, 50, 60, 70], 50))