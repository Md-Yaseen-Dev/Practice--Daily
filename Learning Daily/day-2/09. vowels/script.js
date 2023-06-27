
function vowels(str){

    let arr =  str.split("");

   return arr.filter(elem => elem == "a" || elem == "e" || elem == "i" || elem == "o" || elem == "u").length;
}

console.log(vowels("celebration"))
console.log(vowels("yaseen"));