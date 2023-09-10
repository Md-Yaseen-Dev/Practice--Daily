function convertToRoman(num) {

 let arr = []
  let str = "";
  let num1 = num;
 console.log(num1);
  for (i = 0; i <= num1; i++) {
    arr.push(i)
    if (num1 >= 1000) {
      str += "M";
      arr.push(num1);
      num1 = num1 - 1000;
    } else if (num1 >= 900 && num1 < 1000) {
      str += "CM";
      arr.push(num1);
      num1 = num1 - 900;
    } else if (num1 >= 500) {
      str += "D";
      arr.push(num1);
      num1 = num1 - 500;
    } else if (num1 >= 400 && num1 < 500) {
      str += "CD";
      arr.push(num1);
      num1 = num1 - 400;
    } else if (num1 >= 100) {
      str += "C";
      arr.push(num1);
      num1 = num1 - 100;
    } else if (num1 >= 90 && num1 < 100) {
      str += "XC";
      arr.push(num1);
      num1 = num1 - 90;
    } else if (num1 >= 50) {
      str += "L";
      arr.push(num1);
      num1 = num1 - 50;
    }
    else if (num1 >= 40 && num1 < 50) {
      str += "XL";
      arr.push(num1);
      num1 = num1 - 40;
    } else if (num1 >= 10 ) {
      str += "X";
      arr.push(num1);
      num1 = num1 - 10;
    } else if (num1 == 9) {
      str += "IX";
      arr.push(num1);
      num1 = num1 - 9;
    } else if (num1 >= 5) {
      str += "V";
      arr.push(num1);
      num1 = num1 - 5;
    } else if (num1 == 4) {
      str += "IV";
      arr.push(num1);
      num1 = num1 - 4;
    } else if (num1 > 0) {
      str += "I";
      arr.push(num1);
      num1 = num1 - 1;
    }
  }
  return str;
}
console.log(convertToRoman(49));
console.log(convertToRoman(149));
