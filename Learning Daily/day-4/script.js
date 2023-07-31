// function isprime(num) {

//     for (i = 2; i < num / 2; i++) {

//         if (num % i == 0) {

//             return "it is composite number"
//         }
//     }
//     return "it is a prime number"
// }

// console.log(isprime(31));

// //------------------- print from 1- 100---------------------------

function prime100() {

    let newArr = [];
    for (i = 1; i <= 100; i++) {

        for (j = 2; j < i; j++) {

            if (i % j == 0) {

                break;
            }
        }
        console.log(j)
        if (i == j) {
            newArr.push(i)
        }
    }
    return newArr
}
console.log(prime100());

// // ----minimum----------------

// function min(arr) {

//     let smallNum = arr[0];

//     for (i = 1; i < arr.length; i++) {

//         if (smallNum > arr[i]) {

//             smallNum = arr[i]
//         }
//     }
//     return smallNum
// }

// console.log(min([2, 5, 1, 3, 4]));

// // //--------max---------------------

// function max(arr1) {

//     let bigNum = arr1[0];

//     for (i = 1; i < arr1.length; i++) {

//         if (bigNum < arr1[i]) {

//             bigNum = arr1[i]
//         }
//     }
//     return bigNum;
// }
// console.log(max([-2, -3, -5, -10, -1, -3]))

// // // ---- sum---------------------------

// function sum(arr) {

//     let add = 0;

//     for (i = 0; i < arr.length; i++) {

//         add += arr[i]
//     }
//     return add;
// }
// console.log(sum([1, 2, 3, 4, 5, 10]))

// //  multiplication
// function multiply(arr) {

//     let multiply = 1;

//     for (i = 0; i < arr.length; i++) {

//         multiply = multiply * arr[i]
//     }
//     return multiply;
// }
// console.log(multiply([1, 10, 3, 1, 2]))

// array sort

// function sort(arr) {
//     for (i = 1; i < arr.length; i++) {
//         for (j = 0; j < i; j++) {
//             if (arr[i] < arr[j]) {
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     return arr;
// }

// console.log(sort([3, 1, 2, 5, 4]));
