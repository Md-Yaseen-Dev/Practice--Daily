
//---yaseen

function reverse(arr) {

    let newArr = [];

    let length = arr.length;

    for (i = 0; i < length; i++) {

        newArr.push(arr.pop());

        // newArr.push(arr[arr.length - i-1])

    }


    // for (i = arr.length; i > 0; i--) {

    // newArr.push(arr.pop());


    // }

    return newArr;
}

console.log(reverse([1, 2, 3, 4, 5]));


// function reverse1(arr) {

//     return arr.reverse();
// }

// console.log(reverse1([1, 2, 3, 4, 5, 6]));

