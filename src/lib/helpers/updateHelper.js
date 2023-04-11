const generalHelper = require('./generalHelper');

/**
 * removes character(s) or word(s) from given string
 *
 * @param {String} text - input text
 * @param {String} keywords - single or multiple characters or words seperated by comma to be removed
 * @return {String} - updated text will be returned
 */
const remove = (text, keywords) => {
    let result = text;

    keywordArray = keywords.split(',');

    // remove whitespace
    if (keywordArray.length > 0) {
        keywordArray = keywordArray.map((m) => m.trim());
    }

    keywordArray.forEach((ch) => {
        result = result.replaceAll(ch, '');
    });

    return result;
};

/**
 * replace character(s) or word(s) from given string
 *
 * @param {String} text - input text
 * @param {String} keywords - single or multiple characters  or words seperated by comma to be removed
 * @return {String} - updated text will be returned
 */
const replace = (text, keywords, newKeyword) => {
    let result = text;

    keywordArray = keywords.split(',');

    // remove whitespace
    if (keywordArray.length > 0) {
        keywordArray = keywordArray.map((m) => m.trim());
    }

    keywordArray.forEach((ch) => {
        result = result.replaceAll(ch, newKeyword);
    });

    return result;
};

module.exports = {
    remove,
    replace,
};
