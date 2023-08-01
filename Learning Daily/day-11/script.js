//  find the word

function findtheword(str, word) {

    let count = 0;
    for (i = 0; i < str.length; i++) {


        
        for (j = 0; j < word.length; j++) {

            
                if (str[i + j].toLowerCase() !== word[j] )  { //11 + 0  == 0

                    break;
                }
        }

        if (j == word.length) {

            count++
        }
    }

    return count;
}
console.log(findtheword("My name is Yaseen , Yaseen is a person from Ap.", "person"));


// unique element

// function unique(arr) {
//     let newArr = []
//     for (i = 0; i < arr.length; i++) {

//         for (j = 0; j < arr.length; j++) {

//             if (i !== j && arr[i] == arr[j]) {
//                 break;
//             }
//         }
//         if (j == arr.length) {

//             newArr.push(arr[i])
//         }

//     }
//     return newArr
// }

// console.log(unique([1, 2, 3, 4, 2, 4,3,5]));


function repeated(arr) {

    let newArr = [];

    for (i = 1; i < arr.length; i++) {

        for (j = 0; j < i; j++) {

            if (arr[i] == arr[j] && !newArr.find(elem => elem === arr[j])) {

                newArr.push(arr[i]);
            }
        }
    }

    return newArr;
}
console.log(repeated([1, 2, 3, 4, 3, 4, 2, 3, 5]));


