// ---yaseen


function doublestr(str) {

    return str.split("").map(elem => elem.repeat(2)).join("");

}

console.log(doublestr("something"))