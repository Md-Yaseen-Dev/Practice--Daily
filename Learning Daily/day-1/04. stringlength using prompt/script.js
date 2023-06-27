// ------yaseen------


// console.log(str.split("").reverse().join(""));


// ----- using for loop----------------


//     let str = prompt("Enter the something here");

//     for (i = str.length; i > 0; i--) {

//         console.log(str[i - 1])

    
// }


// using function-------------------

    let str = prompt("Enter the something here");

function word() {

    let newStr = ""
    for (i = str.length; i > 0; i--) {

        // console.log(str[i - 1])
         
        newStr += str[i-1]

    }
    return newStr;
}



console.log(word())