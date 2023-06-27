// // --yaseen

let str = prompt("Enter the str")



function value(val) {

    let obj = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0
    }

    return obj[val]

}

let arr = ["one" , "two" , "three" ,"four" ,"five", "six", "seven", "eight", "nine" ,"zero"]
if (arr.includes(str) ) {

    console.log(value(str))
}
else {
    alert("please enter the correct string ")
}


// function vowelsfirst(str) {


//     let a = str.split("").filter(elem => elem == "a" || elem == "e" || elem == "i" || elem == "o" || elem == "u").join("");

//     let b = str.split("").filter(elem => elem !== "a" && elem !== "e" && elem !== "i" && elem !== "o" && elem !== "u").join("")

//     return a + b
// }

// console.log(vowelsfirst("apple"))