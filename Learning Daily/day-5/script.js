// -------------------yaseen-----------------


function hcf(num1, num2) {
    let hcf = num1;
    while (num1 % hcf != 0 || num2 % hcf != 0) {

        hcf--

    }
    return hcf
}


console.log(hcf(24, 18));


// --------------lcm -------------------------


function Lcm(num1, num2) {

    let lcm = num1;

    while (lcm % num1 != 0 || lcm % num2 != 0) {

        lcm++

    }

    return lcm
}

console.log(Lcm(17, 5))


// -----------------factorial----------------------------

function factorial(num) {

    let str = 1;
    for (i = num; i > 0; i--) {


        str = i * str
    }

    return str;
}

console.log(factorial(6))


// ---using while loop


function facorial1(num1) {

    let str = 1;

    while (num1 > 0) {

        str = num1 * str;

        num1--
    }
    return str;
}

console.log(facorial1(3));

//---fibonacci key

function fibonacci(n) {

    let newArr = [1, 1]


    for (let i = 0; i < n; i++) {

        newArr.push(newArr[i] + newArr[i + 1])
    }
    return newArr
}

console.log(fibonacci(10));

