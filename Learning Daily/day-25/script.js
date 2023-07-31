//------------------------------------------------test-------------------------------------------

// function lcmnum(num1, num2) {

//     let lcm = num1;

//     if (lcm % num1 != 0 || lcm % num2 != 0) {

//         lcm++
//     }

//     return lcm;
// }
// console.log(lcmnum(23, 6));



// ---------------------------------------------hcf-------------------------------------------------

// function hcfNum(num1, num2) {

//     let hcf = num1;

//     if (num1 % hcf != 0 || num2 % hcf != 0) {

//         hcf--
//     }

//     return hcf
// }
// console.log(hcfNum(23, 6));

// -----------------------------------------factorial--------------------------------------------------


// function factorial(num) {

//     let factorial = 1;

//     if (num > 1) {

//         factorial = factorial * num;
//         num--
//     }
//     return factorial;
// }

// console.log(factorial(6));

// ------------------------------------
// var base_convert = function (number, initial_base, change_base) {
//     // if ((initial_base && change_base) < 2 || (initial_base && change_base) > 36)
//     //     return 'Base between 2 and 36';

//     return parseInt(number + " ", initial_base);
// }

// console.log(base_convert(1000, 2, 8));



// -----sortn

// function sortn() {

//     return function (a, b) {

//         if (a < b) {

//             return -1
//         }
//         else if (a > b) {
//             return 1
//         }

//         else {
//             return 0;
//         }
//     }
// }




//-------------------------prime numbers-----------------------------


//   ------------------prime number 1-100---------------------


// function primeNumber() {

//     let primenumbers = [];

//     for (let i = 1; i <= 100; i++) {

//         for (j = 2; j < i; j++) {

//             if (i % j == 0) {
//                 break;

//             }

//         }
//         if (i == j) {
//             primenumbers.push(i)

//         }

//     }
//     return primenumbers;
// }

// console.log(primeNumber())


// -----------------------------prime number using two functions-------------------



// function generatePrimes(limit) {
//     const primes = [];

//     function isPrime(num) {
//         if (num <= 1) return false;

//         //   console.log(num)
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) return false;
//         }

//         return true;
//     }

//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) primes.push(i);
//     }

//     return primes;
// }

// // Example usage
// const limit = 50;
// const primes = generatePrimes(limit);
// console.log("Prime numbers up to", limit, "are:", primes);



// //   --------------------------using flag--------------------------



// function primeNumbers200() {

//     let primenumbers = [];

//     let flag = true;

//     for (let i = 2; i <= 200; i++) {

//         for (j = 2; j < i; j++) {

//             if (i % j == 0) {

//                 flag = false;
//                 break;
//             }

//             flag = true;

//         }
//         if (flag) {
//             primenumbers.push(i);
//         }
//     }
//     return primenumbers;
// }

// console.log(primeNumbers200());


// // ------------------------prime factors-------------------


// function primefactors(num) {

//     let primefactors = [];

//     for (i = 2; i <= num; i++) {

//         if (num % i == 0) {

//             primefactors.push(i)

//             num /= i;

//             i--;
//         }
//     }
//     return primefactors

// }
// console.log(primefactors(250))

// --------bubble sort--------------------


// function sort() {

//     let arr = [5, 3, 4, 2, 1];

//     for (let i = 1; i < arr.length; i++) {

//         for (j = 0; j < i; j++) {

//             if (arr[i] < arr[j]) {

//                 let temp = arr[i];

//                 arr[i] = arr[j];

//                 arr[j] = temp;
//             }

//         }
//     }

//     return arr
// }

// console.log(sort());


// ------------------------last elements--------------

function lastelements(arr, lastelements) {


    let newarr = []
    let count = 0;

    for (let i = arr.length - 1; i >= 0; i--) {


        if (count < lastelements) {

            newarr.push(arr[i])
            count++
        }
    }

    let elem = arr.length - newarr.length;
    return (newarr.length != 0) ? arr.slice(elem): arr.slice(-1)
}

console.log(lastelements([2, 3, 4, 1, 2]));

// arr[4] // arr.length = 5; latelement = 1


// ----------------------another method------------------


function lastelem(arr, last) {

    let newarr = [];

    let elem = arr.length - last;

    for (let i = elem; i < arr.length; i++) {


        newarr.push(arr[i])
    }
    return newarr;
}

console.log(lastelem([2, 3, 4, 1, 2], 3));
