// --prime factorization


function primeFactor(num) {

    let newArr = [];


    for (i = 2; i <= num; i++) {

        if (num % i == 0) {
            newArr.push(i);
            num = num / i;
            i--
        }


    }
    return newArr
}

// console.log(primeFactor(30))


// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1


function amountTocoins(amount, arr) {

    let newArr = [];


    for (let i = 0; i < arr.length; i++) {

        if (amount >= arr[i]) {
            amount = amount - arr[i]; // 46 = 46-25  // 21 - 10 = 11 -10 =1 =1
            newArr.push(arr[i]);
            i--
        }
    }

    return newArr;
}

// console.log(amountTocoins(46, [25, 10, 5, 2, 1]));


// Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.


function armstrong(num) {
    let sum = 0
    let Arr = String(num).split("");

    for (let i = 0; i < Arr.length; i++) {

        sum += Arr[i] * Arr[i] * Arr[i];

    }

    return (sum == num) ? "it is an armstrong number" : "Not an armstrong number"
}

// console.log(armstrong(371));
// console.log(armstrong(378));



// According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".


function happynum(num) {
    let sum = 0
    let digit;

    while (num > 0) {
        digit = num % 10;
        sum += digit * digit
        num = Math.floor(num / 10)

    }
    if (sum == 1) {

        return "im happy"
    }
    else if (sum == 4 || sum == num) {

        return "im sad"
    }
    else {
        return happynum(num)
    }
}
console.log(happynum(74))
// console.log(num1[0] * num1[0] + num1[1] * num1[1])