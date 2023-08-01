// // function numberPattern() {

// //     let str = ""
// //     for (i = 1; i <= 5; i++) {


// //         for (j = 1; j <= i; j++) {

// //             str += j;
// //         }
// //         str+="\n"
// //     }
// //     return str
// // }

// // console.log(numberPattern())


// // function numberpattern2() {

// //     let str = "";
// //     let num = 1;
// //     for (i = 1; i <= 5; i++) {

// //         for (j = 1; j <= i; j++) {

// //             str += num++ + " ";

// //         }
// //         str += "\n"
// //     }
// //     return str;
// // }

// // console.log(numberpattern2())


// // function numberPattern3() {

// //     let str = "";

// //     for (i = 1; i <= 10; i++) {

// //         for (j = 1; j <= 10; j++) {

// //             str += i * j + "  "
// //         }
// //         str += "\n"
// //     }
// //     return str;
// // }

// // console.log(numberPattern3());



// function repeated(arr) {

//     let newArr = [];


//     for (i = 1; i < arr.length; i++) {
//         let flag = true;

//         for (j = 0; j < i; j++) {

//             if (arr[i] == arr[j]) {


//                 if (newArr.length == 0) {
//                     newArr.push(arr[i])
//                 }

//                 for (k = 0; k < newArr.length; k++) {

//                     if (newArr[k] !== arr[j]) {
//                         flag = false;
//                     }
//                 }
//                 if (!flag) {
//                     newArr.push(arr[i])
//                 }
//             }
//         }
//     }

//     return newArr
// }
// console.log(repeated([1, 2, 3, 4, 3, 4, 2, 3, 5]));


// function union(arr1, arr2) {

//     let newArr = []

//     for (i = 0; i < arr1.length; i++) {

//         if (!newArr.includes(arr1[i])) {

//             newArr.push(arr1[i])
//         }
//     }

//     for (i = 0; i < arr2.length; i++) {

//         if (!newArr.includes(arr2[i])) {

//             newArr.push(arr2[i])
//         }

//     }
//     return newArr;
// }

// console.log(union([1, 2, 3, 4], [3, 4, 5]));






//     let store =[]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] !== arr[j] && toFindElement(arr[i])) {
//                 store.push(arr[i]);
//                 break;
//             }
//         }
//     }
//     function toFindElement(element) {
//         for (let index = 0; index < store.length; index++) {
//             if (element === store[index]) {
//                 return false;
//             }
//         }
//         return true;
//     }

// console.log(store);

