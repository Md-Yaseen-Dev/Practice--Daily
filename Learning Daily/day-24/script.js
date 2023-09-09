// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function falseval(arr) {

    let newarr = []
    arr.forEach((elem) => {

        if (isNaN(elem) == false && elem != 0 && typeof elem == "number") {

            newarr.push(elem)
        }
    })
    return newarr
}

console.log(falseval([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// console.log(typeof undefined)


// ---------------

// Write a JavaScript function to sort the following array of objects by title value.
// Sample object :

// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//    ];

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
]



// using only properties
function sorton(prop) {

    return function (a, b) {

        if (a[prop] < b[prop]) {
            return -1;
        }
        else if (a[prop] > b[prop]) {
            return 1;
        }
        else {
            return 0
        }
    }
}

// using array and properties

function sort1(arr, prop) {

    arr.sort(function (a, b) {

        if (a[prop] < b[prop]) {
            return -1;
        }
        else if (a[prop] > b[prop]) {
            return 1;
        }
        else {
            return 0
        }
    })
}


console.log(library.sort(sorton("title")));

console.log(library.sort(sort1(library,"libraryID")))

// library.sort(sort1(library,"libraryID"))

// console.log(library)