var badWords = require('badwords-list');

var badWordsArray = badWords.array;

/**
 * checks the string has bad words or not
 *
 * @param {String} words
 * @return {Boolean} - returns the boolean if the given text has a badword or not
 */
const hasBadWord = (words) => {
    if (words === undefined || words === null || words === '') return;

    let result = {};
    let badWords = [];

    words.split(' ').forEach((w) => {
        badWordsArray.forEach((bw, i) => {
            if (w === bw) {
                badWords.push(bw);
            }
        });
    });

    result.list = badWords;
    result.length = badWords.length;

    return result;
};

module.exports = { hasBadWord };
