// ---hcf

function hcf(num1, num2) {

    let hcf = num1;

    while (num1 % hcf != 0 || num2 % hcf != 0) {

        hcf--
    }
    return hcf
}

console.log(hcf(18, 24))



// lcm

function lcm(num1, num2) {

    let lcm = num1;

    while (lcm % num1 != 0 || lcm % num2 != 0) {

        lcm++
    }
    return lcm
}
console.log(lcm(18, 24));


// multiples

// let Prompt = prompt("enter the number")


// function multiple(num) {

//     for (i = 1; i <= 10; i++) {

//         console.log(`${num} * ${i} = ${i * num}`)
//     }
// }

// multiple(Prompt);


// ---- factor

function factor(num) {

    let newarr = [];

    for (i = 1; i <= num; i++) {


        if (num % i == 0) {

            newarr.push(i)
        }

    }

    return newarr;

}

console.log(factor(20));


// prime-factorization

function primefractorization(num) {

    let newArr = [];


    for (let i = 2; i <= num; i++) {

        if (num % i == 0) {
            newArr.push(i)
            num /= i;
            i--
        }

    }
    return newArr;
}

console.log(primefractorization(250));

// min


function max(arr) {

    let maxnum = arr[0];

    for (i = 1; i < arr.length; i++) {

        if (arr[i] > maxnum) {

            maxnum = arr[i]
        }
    }
    return maxnum;
}

console.log(max([2, 35, 56, 79, 456, 73]));


// ------min-------

function min(arr) {

    let minnum = arr[0];

    for (i = 1; i < arr.length; i++) {

        if (arr[i] < minnum) {

            minnum = arr[i]
        }
    }
    return minnum;
}

console.log(min([2, 35, 56, 79, 456, 73]));


function average(arr) {

    let sum = 0;

    for (i = 0; i < arr.length; i++) {

        sum += arr[i]
    }
    return sum / arr.length;
}
console.log(average([2, 34, 5, 6, 3]));