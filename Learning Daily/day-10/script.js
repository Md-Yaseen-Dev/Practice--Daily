// An Ordered Matrix
// Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. Your function needs to create an a × b matrix. a is the first argument and b is the second.

// Examples
// orderedMatrix(5, 5) ➞ [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ]

// orderedMatrix(1, 1) ➞ [[1]]

// orderedMatrix(1, 5) ➞ [[1, 2, 3, 4, 5]]
// Notes
// a is the height of the matrix (y coordinate), and b is the width (x coordinate).
// a and b will always be positive, and the matrix will always be square shaped (in each row are the same amount of columns).
// a and b are integers.



// function orderedMatrix(a, b) {

//     let matrix = [];
//     let count = 1;

//     for (i = 1; i <= a; i++) {

//         const row = []

//         for (j = 1; j<=b; j++){

//             row.push(count);
//             count++
//         }
//         matrix.push(row)
//     }


// return matrix

// }
// console.log(orderedMatrix(7, 5))



// 2.


// carlos is a huge fan of something he calls smooth sentences.

// A smooth sentence is one where the last letter of each word is identical to the first letter the following word (and not case sensitive, so "A" would be the same as "a").

// The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

// Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.

// Examples
// isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

// isSmooth("Someone is outside the doorway") ➞ false

// isSmooth("She eats super righteously") ➞ true
// Notes
// The last and first letters are case insensitive.
// There will be no punctuation in each sentence.

function isSmooth(sentence) {

    let arr = sentence.split(" ");

    for (i = 0; i < arr.length - 1; i++) {

        let currentword = arr[i];
        let nextword = arr[i + 1];

        if (currentword[currentword.length - 1] !== nextword[0]) {
            return false
        }
    }
    return true
}
console.log(isSmooth("Marta appreciated deep perpendiculaar right trapedzoids"))