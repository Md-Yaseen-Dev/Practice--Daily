// //  return random number

// // function randomNum() {

// //     return (Math.random() * 100).toFixed(0)
// // }

// // console.log(randomNum());

// // password


function password() {

    let str = "abcdefghijklmnopqrstuvwxyz1234567890"

    let str1 = ""


    for (i = 0; i < 6; i++) {

        let val = (Math.random() * 36).toFixed(0);

        str1 += str.charAt(val)
    }
    return str1
}
console.log(password());

// // return duplicate integer of an array


function duplicateInt(arr) {

    let newArr = [];

    for (i = 0; i < arr.length; i++) {

        for (j = 0; j < i; j++) {

            if (arr[i] == arr[j]) {

                newArr.push(arr[i])
            }
        }
    }
    return newArr

}

console.log(duplicateInt([1, 2, 3, 4, 3, 5, 6]));
console.log(duplicateInt([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]));

// array missing

function missingNum(arr) {

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let newArr = [];
    // let flag = false;
    for (i = min; i <= max; i++) {

        // for (j = 0; j < arr.length; j++) {

            // if (arr[j] === i) {
            //     flag = true;
            //     break;
            // }

        // }

        // if (!flag) {
        //     newArr.push(i);

        // }
        // flag = false;

        if(!arr.includes(i)){

            newArr.push(i)
        }
    }
    return newArr

}

console.log(missingNum([3, 2, 4, 7, 9]))