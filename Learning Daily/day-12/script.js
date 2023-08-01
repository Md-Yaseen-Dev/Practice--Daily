// Triangular Number Sequence
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

// Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

// Examples
// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220
// Notes
// Check the Resources for info on triangular number sequence.

// function triangle(n) {
//     let num = 0;
//     for (i = 0; i <= n; i++) {

//         num += i
//     }
//     return num;
// }
// console.log(triangle(1));
// console.log(triangle(6));
// console.log(triangle(215));




// 2. Converting One Binary String to Another
// Write a function that returns the minimum number of swaps to convert the first binary string into the second.

// Examples
// minSwaps("1100", "1001") ➞ 1

// minSwaps("110011", "010111") ➞ 1

// minSwaps("10011001", "01100110") ➞ 4
// Notes
// Both binary strings will be of equal length.
// Both binary strings will have an equal number of zeroes and ones.
// A swap is switching two elements in a string (swaps do not have to be adjacent).



function minSwaps(str1, str2) {

    let count = 0;
    for (i = 0; i < str1.length/2; i++) {

        if (str1[i] !== str2[i]) {
            count++
        }
    }
    return count
}

console.log(minSwaps("1100", "1001"));
console.log(minSwaps("110011", "010111") );
console.log(minSwaps("10011001", "01100110") );


// 3.
// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
// Notes
// There is exactly one space between each word and no punctuation is used.


function reverseOdd(str) {

        let str2 = str.split(" ");

        let newStr = ""

        for (i = 0; i < str2.length; i++) {


            for (j = str2[i].length - 1; j >= 0; j--) {

                if (str2[i].length % 2 !== 0) {

                    newStr += str2[i][j];

                }
                else {
                    newStr += str2[i];
                    break;

                }

            }

            newStr += " "

        }
        return newStr;



    // let str2 = str.split(" ");

    // let Arr = []

    // for (i = 0; i < str2.length; i++) {

    //     if (str2[i].length % 2 !== 0) {

    //         Arr.push(str2[i].split("").reverse().join(""))
    //     }

    //     else {
    //         Arr.push(str2[i])
    //     }
    // }
    // return Arr.join(" ")
}
console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));