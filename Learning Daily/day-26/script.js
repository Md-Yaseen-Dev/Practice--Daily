function findtheword(str, word) {

    let count = 0;
    for (i = 0; i < str.length; i++) {


        
        for (j = 0; j < word.length; j++) {

            
                if (str[i + j].toLowerCase() !== word[j] )  { //11 + 0  == 0

                    break;
                }
        }

        if (j == word.length) {

            count++
        }
    }

    return count;
}
console.log(findtheword("My name is Yaseen, Yaseen is a person from Ap and is yaseen name", "name")); // yes

console.log(findtheword("My name is Yaseen person, Yaseen is a person from Ap and is yaseen name person", "person")); //
console.log(findtheword("My name is Yaseen person, Yaseen is a person from Ap and is yaseen name person", "yaseen")); 

