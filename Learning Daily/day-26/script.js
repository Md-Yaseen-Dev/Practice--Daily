// function findtheword(str, word) {

//     let count = 0;
//     for (i = 0; i < str.length; i++) {



//         for (j = 0; j < word.length; j++) {


//             if (str[i + j].toLowerCase() !== word[j]) { //11 + 0  == 0

//                 break;
//             }
//         }

//         if (j == word.length) {

//             count++
//         }
//     }

//     return count;
// }
// console.log(findtheword("My name is Yaseen, Yaseen is a person from Ap and is yaseen name", "name")); // yes
// console.log(findtheword("My name is Yaseen person, Yaseen is a person from Ap and is yaseen name person", "person")); //
// console.log(findtheword("My name is Yaseen person, Yaseen is a person from Ap and is yaseen name person", "yaseen"));

// //-----------------------unique items------------------------

// function unique(arr1) {

//     let newarr = [];

//     for (let i = 0; i < arr1.length; i++) {

//         if (!newarr.includes(arr1[i])) {

//             newarr.push(arr1[i])
//         }
//     }
//     return newarr;
// }

// console.log(unique([2, 3, 4, 5, 6, 1, 2, 3]));


// // ---------------------------repeated----------------------------------------


function repeated(arr) {

    let newarr = [];

    for (let i = 1; i < arr.length; i++) {

        for (j = 0; j < i; j++) {

            if (arr[i] == arr[j] && !newarr.includes(arr[i])) {

                newarr.push(arr[i])
            }
        }
    }
    return newarr
}
console.log(repeated([2, 3, 4, 1, 3, 2, 3, 4, 5,9,9,9,9,9,11,11]));

// ---------------------------union------------------------------------

function union(arr1, arr2) {

    let newarr = [];

    let length = (arr1.length > arr2.length) ? arr1.length : arr2.length;

    for (let i = 0; i < length; i++) {

        if (!arr2.includes(arr1[i])) {

            newarr.push(arr1[i])
        }
    }
    newarr.push(...arr2);
    return newarr;

}
console.log(union([2, 3, 4, 9], [1, 4, 6]))


// --------------------------------intersection----------------------------------------------

function intersection(arr1, arr2) {

    let newarr = [];

    let length = (arr1 > arr2) ? arr1.length : arr2.length


    for (let i = 0; i < length; i++) {

        if (arr2.includes(arr1[i])) {

            newarr.push(arr1[i])
        }

    }

    return newarr

}
console.log(intersection([2, 3, 4, 9], [1, 4, 2, 3, 6]));


// --------------------------------------------ordered matrix---------------------------------------------

function orderedmatrix(a, b) {

    let newarr = [];
    let count = 1;
    for (let i = 0; i < a; i++) {

        let row = [];

        for (let j = 1; j <= b; j++) {

            row.push(count);

            count++
        }
        newarr.push(row)
    }

    return newarr
}
console.log(orderedmatrix(3, 5)) //

