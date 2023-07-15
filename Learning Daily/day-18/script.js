// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223
// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// uhz-xpgc-kvm

// function palindrome(input) {

//     let str = "";
//     for (let i = input.length - 1; i >= 0; i--) {

//         str += input[i]

//     }

//     return (str == input) ? "It is plaindrome" : "It is not a plaindrome"
// }
// console.log(palindrome("madam"))
// console.log(palindrome(3223));


// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function combination(str) {

    let str1 = ""
    let newArr = []
    for (let i = 0; i < str.length; i++) {


        for (let j = i; j < str.length; j++) {

            // if (i <= j) {
                str1 += str[j];
            // }
            newArr.push(str1) ;  // d , do, dog
        }

        str1 = "";
    }
    return newArr
}
console.log(combination("dog"))