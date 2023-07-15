// function matrix(arr) {
//     console.log(arr.length);

//     for (let i = 0; i < arr.length; i++) {


//         for (j = 0; j < arr[i].length; j++) {

//             if (arr[i].includes(0)) {

//                 arr[i][j] = 0;
//             }
//         }
//     }
//     return arr
// }
// console.log(matrix(
//     [[1, 1, 0, 1],
//     [2, 1, 2, 1],
//     [1, 1, 4, 0]]))


// Input: arr[][] ={ { 1, 1, 0, 1 }, { 0, 0, 0, 0 }, { 1, 1, 0, 1}, { 0, 1, 0, 1 } } 
// Output: 
// 111 
// 111 
// 011 
// Explanation: 
// Initially, the matrix is as follows: 
// arr[][] = { { 1, 1, 0, 1 }, 
//               { 0, 0, 0, 0 }, 
//              { 1, 1, 0, 1 }, 
//             { 0, 1, 0, 1 } } 
// Removing the 2nd row modifies the matrix to: 
// arr[][] = { { 1, 1, 0, 1 }, 
//                { 1, 1, 0, 1 }, 
//               { 0, 1, 0, 1 } } 
// Removing the 3rd column modifies the matrix to: 
// arr[][] = { { 1, 1, 1 }, 
//                { 1, 1, 1 }, 
//               { 0, 1, 1 } } 

// Input: arr={{0, 1}, {0, 1}} 
// Output: 
// 1 
// 1 


function matrix1(arr) {

    let newarr = [];

    for (i = 0; i < arr.length; i++) {


        for (j = 0; j < arr[i].length; j++) {


            if (arr[i][j] == 0) {

                newarr.push([i, j])
            }

        }

    }

    for (i = 0; i < newarr.length; i++) {


        const [row, col] = newarr[i];



        for (k = 0; k < arr.length; k++) {

            arr[row][k] = 0


        }

        for (l = 0; l < arr[i].length; l++) {

            arr[l][col] = 0;
        }


    }

    return arr

}

console.log(matrix1([[1, 1, 1], [1, 0, 1], [1, 1, 1]]))
// console.log(matrix1([[0,1], [0,1]]))


// function matrix2(arr) {

//     let m = arr.length;
//     let n = arr[0].length;

//     for (i = 0; i < m; i++) {

//         for (j = 0; j < n; j++) {

//             if (!arr[i][j] ) {
//                 col[j] = 1;
//                 row[j] = 1;
//             }
//         }
//     }
// return arr
// }
// console.log(matrix2([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));