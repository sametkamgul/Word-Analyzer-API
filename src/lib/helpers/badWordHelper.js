var badWords = require('badwords-list');
const { isEmpty } = require('./generalHelper');

var badWordsArray = badWords.array;

/**
 * checks the string has bad words or not
 *
 * @param {String} text
 * @return {Boolean} - returns the boolean if the given text has a badword or not
 */
const hasBadWord = (text) => {
    let result = {
        array: [],
        length: 0,
    };

    if (!isEmpty(text)) {
        let badWords = [];

        text.split(' ').forEach((w) => {
            badWordsArray.forEach((bw, i) => {
                if (w === bw) {
                    badWords.push(bw);
                }
            });
        });

        result.array = badWords;
        result.length = badWords.length;
    }

    return result;
};

module.exports = { hasBadWord };
