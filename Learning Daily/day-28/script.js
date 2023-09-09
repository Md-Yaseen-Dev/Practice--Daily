// function palindrome(str) {
//     const arr = [];
//     let newstr = ""
//     let str1 = str.toLowerCase();

//     for(j=0; j < str1.length; j++){

//         if (str1[j] >= "a" || str[j] >= 1){
//            newstr +=  str1[j]
//            arr.push(str1[j])
//         }
// }
//    return arr
//   }

//   console.log(palindrome("_eye"));
// console.log(palindrome("RaceCar"));
// console.log(palindrome("Race Car"));
// console.log(palindrome("A man, a plan, a canal, panama"));
// console.log(palindrome("A man, a plan, a canal, nama"));

// function convertToRoman(num) {

//  let arr = []
//   let str = "";
//   let num1 = num;
//  console.log(num1);
//   for (i = 0; i <= num1; i++) {
//     arr.push(i)
//     if (num1 >= 1000) {
//       str += "M";
//       arr.push(num1);
//       num1 = num1 - 1000;
//     } else if (num1 >= 900 && num1 < 1000) {
//       str += "CM";
//       arr.push(num1);
//       num1 = num1 - 900;
//     } else if (num1 >= 500) {
//       str += "D";
//       arr.push(num1);
//       num1 = num1 - 500;
//     } else if (num1 >= 400 && num1 < 500) {
//       str += "CD";
//       arr.push(num1);
//       num1 = num1 - 400;
//     } else if (num1 >= 100) {
//       str += "C";
//       arr.push(num1);
//       num1 = num1 - 100;
//     } else if (num1 >= 90 && num1 < 100) {
//       str += "XC";
//       arr.push(num1);
//       num1 = num1 - 90;
//     } else if (num1 >= 50) {
//       str += "L";
//       arr.push(num1);
//       num1 = num1 - 50;
//     }
//     else if (num1 >= 40 && num1 < 50) {
//       str += "XL";
//       arr.push(num1);
//       num1 = num1 - 40;
//     } else if (num1 >= 10 ) {
//       str += "X";
//       arr.push(num1);
//       num1 = num1 - 10;
//     } else if (num1 == 9) {
//       str += "IX";
//       arr.push(num1);
//       num1 = num1 - 9;
//     } else if (num1 >= 5) {
//       str += "V";
//       arr.push(num1);
//       num1 = num1 - 5;
//     } else if (num1 == 4) {
//       str += "IV";
//       arr.push(num1);
//       num1 = num1 - 4;
//     } else if (num1 > 0) {
//       str += "I";
//       arr.push(num1);
//       num1 = num1 - 1;
//     }
//   }
//   return str;
// }
// console.log(convertToRoman(49));
// console.log(convertToRoman(149));

// --------------------------------------------
// function rot13(str) {
//     return str;
//   }

//   console.log(rot13("SERR PBQR PNZC"));

// function rot13(str) {

//     let newstr = "";
//     let count =0;
//     let Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     for(let i = 0; i< str.length; i++){

//       if(str[i] >="A" && str[i] <= "M"){

//        count = Alphabets.indexOf(str[i])

//         newstr += Alphabets[count+13]

//       }
//       else if(str[i] >="N" && str[i] <= "Z"){
//         count = Alphabets.indexOf(str[i]);
//         newstr += Alphabets[count-13];
//       }
//       else{
//      newstr += str[i]
//       }
//     }

//     return newstr

//     }
// -----------------------------------------------------------------------------------------------------

function telephoneCheck(str) {

   var str = str.replaceAll(" ", "");

   // for removing parameters ()
  if (str.includes("(", "") && str.includes(")", "")) {
    str = str.replaceAll("(", "");
    str = str.replaceAll(")", "");
  }
//   removing hipens instead first one because -1 here - counts as hipen
 if(str[str.length-5] == "-" && str[0] != "-"){

      str = str.replaceAll("-","");

   }
//   if length of the string is 10 start with 5 .if first value is 1 the length have to be 11.
if(str[0] == 1 && str.length == 11 || str.length == 10 && str[0] == 5){

    return true
  }
 
return false;
}
console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("(555) 555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("555 555 5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("-1 555 555 5555")); // true
console.log(telephoneCheck("1 (757) 622-7382"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("1 555-555-5555") );
console.log(telephoneCheck("(555)555-5555"));0
console.log(telephoneCheck("1 555) 555-5555"));

// // --------------------------------------------------------------
// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]
// Get Help
// Tests

function checkCashRegister(price, cash, cid) {
    // Define the currency values and their names
    const currencyUnit = [
      { name: "PENNY", value: 0.01 },
      { name: "NICKEL", value: 0.05 },
      { name: "DIME", value: 0.1 },
      { name: "QUARTER", value: 0.25 },
      { name: "ONE", value: 1 },
      { name: "FIVE", value: 5 },
      { name: "TEN", value: 10 },
      { name: "TWENTY", value: 20 },
      { name: "ONE HUNDRED", value: 100 }
    ];
  
    // Calculate the change due
    let changeDue = cash - price;
  
    // Calculate the total cash in the drawer
    let totalCid = 0;
    for (let i = 0; i < cid.length; i++) {
      totalCid += cid[i][1];
    }
    totalCid = parseFloat(totalCid.toFixed(2)); // Avoid floating-point precision issues
  
    // Check if there's not enough change in the drawer
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    // Check if there's exact change in the drawer
    if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    // Calculate change from highest to lowest currency units
    const changeArr = [];
    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      const currencyName = currencyUnit[i].name;
      const currencyValue = currencyUnit[i].value;
      let availableCurrency = cid[i][1];
  
      let changeAmount = 0;
  
      while (changeDue >= currencyValue && availableCurrency > 0) {
        changeDue -= currencyValue;
        changeDue = parseFloat(changeDue.toFixed(2));
        availableCurrency = availableCurrency - currencyValue;
        availableCurrency = parseFloat(availableCurrency.toFixed(2));
        changeAmount += currencyValue;
      }
  
      if (changeAmount > 0) {
        changeArr.push([currencyName, changeAmount]);
      }
    }
  
    // If changeDue is not zero, return INSUFFICIENT_FUNDS
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: changeArr };
  }
  
  // Example usage:
  console.log(
    checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ])
  );
  