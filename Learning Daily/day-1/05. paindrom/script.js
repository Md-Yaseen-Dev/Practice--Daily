let str = prompt("Enter the something here");

function word() {

    let newStr = ""
    for (i = str.length; i > 0; i--) {

        newStr += str[i - 1]

    }

    if (str == newStr){

        return "this is paindrom"
    }

    else{
        return "this is not paindrom"
    }
}

console.log(word())