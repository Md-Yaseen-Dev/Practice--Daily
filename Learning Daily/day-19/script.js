function factorial(n) {


    let result = 1;

    for (let i = 2; i <= n; i++) {

        result *= i;
    }
    return result;


    // if (n == 0 || n == 1) {
    //     return 1
    // }
    // return n * factorial(n - 1)


}
// console.log(factorial(5))

// function number(num) {
//     let arr = String(num).split("");
//     let sum = 0;
//     arr = arr.map(Number)
//     for (let i = 0; i < arr.length; i++) {
//         let digit = arr[i]
//         sum += factorial(digit);
//     }
//     return sum
// }

// let num = 145;
// console.log(number(num))

function captailze(str) {

    let arr = str.split(" ");

    for (i = 0; i < arr.length; i++) {

        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
    }

    return arr.join(" ")
}
console.log(captailze("my name is yaseen"))


function captalizewithreplace(str) {
    let uppercase = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())

    return uppercase
}
console.log(captalizewithreplace("my friend name is roshan"))



function captailzefirstletter(str) {

    let str1 = "";

    let arr = [];

    for (let i = 0; i < str.length; i++) {


        if (str[i] !== " ") {
            str1 += str[i]

        }
        else {

            let firstLetterCaptial = str1.substring(0, 1).toUpperCase() + str1.substring(1)
            arr.push(firstLetterCaptial);
            str1 = ""
        }
    }
    if (str1 !== "") {
        let firstLetterCaptial = str1.charAt(0).toUpperCase() + str1.slice(1);
        arr.push(firstLetterCaptial);

    }
    return arr.join(" ")
}

console.log(captailzefirstletter("I am 21 years old"));


function captailzeFirstletter1(str) {
    let str1 = "";
    let arr = [];


    for (let i = 0; i < str.length; i++) {


        if (str[i] !== " ") {
            str1 += str[i]


        }
        else {
            let firstLetterCaptial = str1.charAt(0).toUpperCase() + str1.slice(1);
            // console.log(firstLetterCaptial)
            arr.push(firstLetterCaptial);
            str1 = ""
        }
    }

    if (str1 !== "") {
        let firstLetterCaptial = str1.charAt(0).toUpperCase() + str1.slice(1);
        arr.push(firstLetterCaptial);

    }
    return arr.join(" ")

}
console.log(captailzeFirstletter1("who are you"))