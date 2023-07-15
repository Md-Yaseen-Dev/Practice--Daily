// // function stringwithoutspace(str) {
// //     let str1 = ""
// //     for (let i = 0; i < str.length; i++) {

// //         if (str[i] != " "){
// //             str1 += str[i]
// //         }
// //     }
// //     return str1
// // }
// // console.log(stringwithoutspace("My name is yaseen"));


// function uppercase() {
//     let str = "My name is yaseen"

//     for (i = 0; i < str.length; i++) {

//         if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97) {

//             str = str.replace(str[i], String.fromCharCode(str.charCodeAt(i) - 32));
//         }
//     }
//     return str;
// }
// console.log(uppercase());

//--------factorial-----------

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}

// function factorial1(n1) {
//     if (n1 == 0 || n1 == 1) {
//         return 1
//     }
//     let result = 1;

//     for (i = 2; i <= n1; i++) {

//         result *= i;
//     }
//     return result
// }
// console.log(factorial(5));

function number(num) {
    let arr = String(num).split("");
    let sum = 0;

    for (i = 0; i < arr.length; i++) {

        let digit = Number(arr[i]);

        sum += factorial(digit);

    }
    return sum
}

console.log(number(13));





// function num(num) {

//     let str = num + ""

//     return typeof str
// }
// console.log(num(123))




