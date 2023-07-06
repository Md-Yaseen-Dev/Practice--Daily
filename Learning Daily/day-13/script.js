// // function arrayTarget(arr, target) {

// //     let newArr = []
// //     for (i = 1; i < arr.length; i++) {


// //         for (j = 0; j < i; j++) {

// //             if ((arr[i] + arr[j]) == target) {

// //                 newArr.push(arr[j]);
// //                 newArr.push(arr[i]);

// //             }

// //         }
// //     }
// //     if (newArr.length == 0) {
// //         return -1
// //     }
// //     else {
// //         return newArr
// //     }
// // }
// // console.log(arrayTarget([7, 11, 15, 2, 5, 4], 9));


// function pattern() {

//     let str = ""
//     for (i = 1; i <= 5; i++) {

//         for (j = 0; j < i; j++) {

//             str += "* "

//         }

//         str += "\n"

//     }
//     return str
// }
// console.log(pattern());

// function kite() {

//     let str = ""

//     // upper section
//     for (i = 1; i <= 6; i++) {

//         for (j = 6; j > i; j--) {

//             str += " "

//         }
//         for (k = 1; k < i; k++) {

//             str += "* "

//         }
//         str += "\n"
//     }
//     // lower section
//     for (i = 5; i >= 1; i--) {

//         for (j = 5; j > i; j--) {

//             str += " "

//         }


//         for (k = 1; k < i; k++) {

//             str += " *"
// //
//       }

//         str += "\n"
//     }

//     return str
// }
// console.log(kite());


// let string = "";

// for (let i = 0; i < 5; i++) {

//     for (j = 0; j < 5; j++) {

//         if (i == 0 || i == 4) {

//             string+="*"
//         }
//         else{
//             if(j == 0 || j == 4){
//                 string+="*"

//             }

//             else{
//                 string+=" "

//             }

//         }
        
//     }
//     string+="\n"
// }

// console.log(string)


// // let string = "";

// // for (let i = 0; i <= 5; i++) {

// //     for (let k = 0; k < i; k++) {

// //         if (i == 5) {
// //             string += "*"
// //         }

// //         else {

// //             if (k == 0 || k == i-1){
// //                 string += "*"
// //             }
// //             else{
// //                 string+= " ";
// //             }
// //         }
// //     }
// //     string += "\n"
// // }
// // console.log(string)


let string = '';

for (let i = 0; i < 5; i++) {

    for (let k = 0; k < i; k++) {

        string += " "
    }
    // for (let j = 2 * (5 - i) - 1; j >= 1; j--) {

    for (let j = 2 * 5 - i - 1; j > i; j--) {
        string += "*"
    }
    string += "\n"

}

for (i = 2; i <= 5; i++) {

    for (j = 5; j > i; j--) {

        string += " "
    }

    for (k = 0; k < i * 2 - 1; k++) {

        string += "*"
    }
    string += "\n"
}
console.log(string)
