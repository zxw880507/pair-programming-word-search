const transpose = require(`./transpose`);
const wordSearch = (letters, word) => {
    let reverse = word.split('').reverse().join('');
    return test(letters, word) ||
        test(transpose(letters), word) ||
        test(letters, reverse) ||
        test(transpose(letters), reverse)

};
const test = function(letters, word) {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}




module.exports = wordSearch;