// Any Prime Number in Range
// Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise.

// Examples
// primeInRange(10, 15) ➞ true
// // Prime numbers in range: 11, 13

// primeInRange(62, 66) ➞ false
// // No prime numbers in range.

// primeInRange(3, 5) ➞ true
// // Prime numbers in range: 3, 5
// Notes
// n2 is always greater than n1.
// n1 and n2 are always positive.
// 0 and 1 aren't prime numbers.


function primeNumber(num) {

    for (let i = 2; i < num; i++) {

        if (num % i == 0) {

            return false
        }
    }

    return true
}

// console.log(primeNumber(16));


// -----------------------this is one method of solving primeInRange---------------------------

function primeInRange(num1, num2) {

    let newarr = [];
    let flag = true
    for (j = num1; j <= num2; j++) {

        for (i = 2; i < num1; i++) {
            if (j % i == 0) {
                flag = false;
                break;
            }
            flag = true;
        }
        if (flag) {
            newarr.push(j)
        }

    }
    return flag
}

console.log(primeInRange(8, 11));


// ---------------------------------this is another way of solving prime numbers------------------------------------------------

function primerange(num1, num2) {


    for (let i = num1; i <= num2; i++) {

        if (primeNumber(i)) {
            return true
        }
    }
    return false
}

console.log(primerange(9, 17))