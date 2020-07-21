// CHALLENGE 1

const addition = (array) => {
    return array.reduce((a, b) => a + b, 0);
}




// CHALLENGE 2



const equalStrings = (string1, string2) => {
    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
}






// CHALLENGE 3


const initials = (name) => {
    let names = name.split(` `);
    let arr = [];
    for (let i = 0; i < names.length; i++) {
        initial = names[i].substring(0, 1).toUpperCase();
        arr.push(initial);
    }
    return arr.join(``);
}






// CHALLENGE 4



const oddsEvens = (array) => {
    let evens = [];
    let odds = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evens.push(array[i]);
        } else {
            odds.push(array[i]);
        }
    }
    return `evens: [${evens}], odds: [${odds}]`;

}





// CHALLENGE 5




const totalVandC = (string) => {
    let array = string.split(``);
    let total = 0;
    let vowels = 0;
    let consonants = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == `a` || array[i] == `e` || array[i] == `i` || array[i] == `o` || array[i] == `u`) {
            vowels++;
            total++;
        } else {
            consonants++;
            total++;
        }
    }
    return `total: ${total}, vowels: ${vowels}, consonants: ${consonants}`;
}



module.exports = {
    addition,
    equalStrings,
    initials,
    oddsEvens,
    totalVandC
};