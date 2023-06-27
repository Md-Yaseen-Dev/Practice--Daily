// // find leap year
// function LeapYear(year) {

//     if (year % 4 == 0) {
//         console.log("it is leap year")
//     }
//     else {
//         console.log("it is not a leap year")
//     }
// }

// LeapYear(2004);
// LeapYear(2006);


// // 1900 - 2023 return leap years

// function Totalleaps() {

//     let newArr = [];

//     for (let i = 1900; i <= 2023; i++) {

//         if (i % 4 == 0) {
//             newArr.push(i)
//         }
//     }
//     return newArr
// }

// console.log(Totalleaps());

// 1-100 return every number 3 and 5  not multiples

// function number() {

//     let newArr = [];
//     for (i = 1; i <= 100; i++) {

//         if (i % 3 != 0 && i % 5 != 0) {
//             newArr.push(i)
//         }

//     }
//     return newArr;
// }
// console.log(number());


// 1-100 prime numbers

// function primeNumbers() {

//     let newArr = [];
//     for (i = 2; i <= 100; i++) {

//         for (j = 2; j < i; j++) {

//             if (i % j == 0) {
//                 break;
//             }
//         }

//         if (i == j) {
//             newArr.push(i)
//         }
//     }
//     return newArr
// }

// console.log(primeNumbers());

// find the largest word in the string

function largestWord(str) {

    let newstr = ""
    let str1 = str.split(" ");
    let largestStr = str1[0].length;


    for (i = 1; i < str1.length; i++) {


        if (largestStr < str1[i].length) {

            largestStr = str1[i].length;
            newstr = str1[i]
        }


    }

    return newstr;



}
console.log(largestWord("This is the biggest highlander"));


//  sort an array

function sortArray(arr) {

    for (i = 0; i < arr.length; i++) {

        for (j = 0; j < i; j++) {

            if (arr[j] > arr[i]) {
                let temp = arr[i];

                arr[i] = arr[j];

                arr[j] = temp;
            }
        }


    }
    return arr;
}

// console.log(sortArray([2, 3, 6, 4, 1, 5]))  


function sortString(str) {

    let str1 = str.split(" ")

    for (i = 0; i < str1.length; i++) {


        for (j = 0; j < i; j++) {

            if (str1[j].length > str1[i].length) {

                let temp = str1[i];
                str1[i] = str1[j];
                str1[j] = temp;
            }
        }
    }


    return str1;

}
console.log(sortString("im shaik mohammad yaseen age 21"));

// 
//  c = f-32 * 5/9;

// f = 9/5c + 32




function convertfarenhit(c) {

    let formula_farenhit = 9 / 5 * c + 32 ;

    return `${formula_farenhit} °F`

}
console.log(convertfarenhit(35));



function convertCelsuis(f) {

    let formula_celsuis =  (f- 32) * 5/9 ;

    return `${formula_celsuis.toFixed(1)} °C`

}
console.log(convertCelsuis(212))