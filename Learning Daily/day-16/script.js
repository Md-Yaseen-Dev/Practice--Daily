function median(arr) {
    let index;
    for (i = 1; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if (arr.length % 2 != 0) {
        index = (arr.length + 1) / 2;
        return arr[index - 1]


    } else {
        index = (arr.length) / 2;
        return (arr[index - 1] + arr[index]) / 2

    }
}

console.log(median([2, 3, 4, 5, 7, 6, 1, 9, 8, 11, 10, 14]));

// -----------------
function highestElem(arr) {
    let maxvalue = 0;
    let secondmaxvalue = 0;
    for (j = 0; j < arr.length; j++) {
        if (arr[j] > maxvalue) {
            secondmaxvalue = maxvalue;
            maxvalue = arr[j];
        } else if (maxvalue > arr[j] && arr[j] > secondmaxvalue) {

            secondmaxvalue = arr[j]
        }
    }
    return secondmaxvalue
}

console.log(highestElem([2, 3, 4, 5, 7, 6, 21, 1, 9, 8, 11, 10, 14, 23, 18]))



// ---- using in built function
function findstrwithoutspace(str) {

    return str.split(" ").join("")

}
console.log(findstrwithoutspace("I am a progrommer"));


function withoutspacestring(str) {

    let str1 = "";
    for (let i = 0; i < str.length; i++) {

        if (str[i] != " ") {

            str1 += str[i]
        }
    }
    return str1

}
console.log(withoutspacestring("this is string without space"))