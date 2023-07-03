// // function sum(num) {

// //     return String(num).split("").reduce((a, b) => Number(a) + Number(b))

// // }

// // console.log(sum(250));

// // function sum1(num1) {
// //     let sum = 0;

// //     while (num1 > 0) {
// //         sum += num1 % 10;
// //         num1 = Math.floor(num1 / 10);
// //     }
// //     return sum;
// // }
// // console.log(sum1(780));

// // write an array and find even and calculate the sum?

// function evenSum(arr) {
//     let newArr = [];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             newArr.push(arr[i]);
//         }
//     }

//     let add = newArr[0];

//     for (j = 1; j < newArr.length; j++) {

//         add += newArr[j]
//     }
//     return add
// }
// console.log(evenSum([1, 2, 3, 4, 5, 6, 10]));


// function evennum(arr) {

//     let sum = 0;
//     let even = 0;
//     let odd = 0;
//     for (i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {

//             sum += arr[i];
//             even++;
//         }
//         else {
//             odd++
//         }
//     }
//     return [`even: ${even}, odd: ${odd} `];
// }
// console.log(evennum([2, 3, 4, 5, 6, 7, 9]));

// str reverse with the help of loops

function charcount(str, char) {

    // let str1 = ""
    let count = 0;

    for (i = str.length - 1; i >= 0; i--) {

        if (char == str[i]) {
            count++
        }

    }

    return count;

}
console.log(charcount("yaseen", "e"))