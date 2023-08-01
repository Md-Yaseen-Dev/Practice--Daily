function intersection(arr1, arr2) {
    let newArr = [];

    for (i = 0; i < arr1.length; i++) {

        for (j = 0; j < arr2.length; j++) {

            if (arr1[i] == arr2[j]){
                newArr.push(arr1[i])
            }
            
        }
    }
    return newArr
}
console.log(intersection([2, 3, 4, 5], [1, 2, 3, 0]));


// function sortArr(arr) {

//     for (i = 1; i < arr.length; i++) {

//         for (j = 0; j < i; j++) {

//             if (arr[i] < arr[j]) {

//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;

//             }

//         }
//     }
//     return arr;

// }

// console.log(sortArr([1, 3, 2, 4]));


function stringsort(str) {

    let alphabets = "abcdefghiklmnopqrstuvwxyz"
    let str1 = ""
    
    for (j = 0; j < alphabets.length; j++) {

        for (k = 0; k < str.length; k++) {

            if (alphabets[j] == str[k]) {

                str1 += alphabets[j]
            }
        }

    }
    return str1
}
console.log(stringsort("mohammadyaseen"))

