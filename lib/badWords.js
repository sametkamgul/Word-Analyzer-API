var badWords = require('badwords-list');

var badWordsArray = badWords.array;

/**
 * checks the string has bad words or not
 *
 * @param {String} words
 * @return {Boolean}
 */
const hasBadWord = (words) => {
    if (words === undefined || words === null || words === '') return;

    let result = [];

    words.split(' ').forEach((w) => {
        badWordsArray.forEach((bw, i) => {
            if (w === bw) {
                console.log(i);
                result.push(bw);
            }
        });
    });

    return result.length > 0;
};

module.exports = { hasBadWord };
