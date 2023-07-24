// // Write a JavaScript program to find the most frequent item in an array.
// // Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


// function mostfrequent(arr) {

//     let elem;
//     let maxcount = 0;
//     for (let i = 0; i < arr.length; i++) {

//         let count = 1;

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] == arr[j]) {

//                 count++

//             }
//             if (count > maxcount) {

//                 maxcount = count

//                 elem = arr[j]
//             }


//         }
//     }
//     return [elem, maxcount]
// }

// // console.log(mostfrequent([3, 'a', 'a', 'a', 2, 'a', 3, 'a', 2, 4, 9, 3]))

// // ``Sum of Missing Numbers
// // Create a function that returns the sum of missing numbers from the given list.

// // Examples
// // sum_missing_numbers([4, 3, 8, 1, 2]) ➞ 18
// // # 5 + 6 + 7 = 18

// // sum_missing_numbers([17, 16, 15, 10, 11, 12]) ➞ 27
// // # 13 + 14 = 27

// // sum_missing_numbers([1, 2, 3, 4, 5]) ➞ 0
// // # No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
// // Notes
// // The numerical range to consider when searching for the missing numbers in the list is the sequence of consecutive numbers between the mini



// function sum_missingletter(arr) {

//     // let missingletter = []
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);


//     // for (let i = min; i < max; i++) {

//     //     if (!arr.includes(arr[i])) {

//     //         missingletter.push(i)
//     //     }
//     // }

//     // return (missingletter == 0) ? arr : missingletter
// }

// console.log(sum_missingletter([4, 3, 8, 2]));
// console.log(sum_missingletter([1, 2, 3, 4, 5]));



// function sum_missingletter2(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     const sumofrange = ((max - min + 1) * (max + min)) / 2
//     const sumarr = arr.reduce((a, b) => a + b)
//     return sumofrange - sumarr

// }

// console.log(sum_missingletter2([4, 3, 8, 2]));
// console.log(sum_missingletter2([1, 2, 3, 4, 5]));

//  write a javascript program to shuffle an array


function shuffle(arr) {

    let newarr = []
    while (newarr.length < 5) {
        let randomNum = Math.floor(Math.random() * 5);


        if(!newarr.includes(arr[randomNum])){

            newarr.push(arr[randomNum])

        }

    }

    return newarr
}

console.log(shuffle([1, 2, 3, 4, 5]))