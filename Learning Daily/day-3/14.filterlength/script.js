
function filter(arr) {


    return arr.filter(elem => elem.length == 3)
}

console.log(filter(["yaseen", "ahsan sir", "ali", "anash", "fayaz", "com"]));


function myfunction(arr1, length) {

    let newArr = [];

    for (let i = length; i > 0; i--) {

        newArr.push(arr1[arr1.length - i])
    }
    if (length > 5) {

        return arr1
    }
    else {

        return (newArr.length == 0) ? arr1[arr1.length - 1] : newArr;


    }

}
console.log(myfunction([1, 2, 3, 4, 5,]));


function evenNUm(arr) {

    return arr.reduce((a, b) => a + b)
}

console.log(evenNUm([1, 2, 3, 4, 5, 6, 7, 55, 10, 8]));
