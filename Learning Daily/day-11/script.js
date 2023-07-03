//  find the word

// function findtheword(str, word) {

// let count = 0;
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
// console.log(findtheword("My name is Yaseen and Yaseen is good person, Yaseen is form AP", "yaseen"));


// unique element

function unique(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {

        for (j = 0; j < arr.length; j++) {

            if (i !== j && arr[i] == arr[j]) {
                break;
            }
        }
        if (j == arr.length) {

            newArr.push(arr[i])
        }

    }
    return newArr
}

console.log(unique([1, 2, 3, 4, 2, 4, 3,]))