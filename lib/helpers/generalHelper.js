/**
 * calculates length of the sentence as words
 *
 * @param {String} text
 * @return {Number} - length
 */
const wordCounter = (text) => {
    if (!isEmpty(text)) {
        return text.split(' ').length;
    } else {
        return 0;
    }
};

/**
 * calculates length of the text as chars
 *
 * @param {String} text
 * @return {Number} - length
 */
const charCounter = (text) => {
    if (!isEmpty(text)) {
        return text.length;
    } else {
        return 0;
    }
};

/**
 * calculates the words in the given text splitted by whitespace(' ').
 *
 * @param {String} text
 * @return {Array} - returns Array of words
 */
const getWords = (text) => {
    let result = [];

    text.split(' ').forEach((w) => {
        // remove dot(.) from end of the string for last words for the sentence
        if (w.endsWith('.')) {
            w = w.slice(0, w.length - 1);
        }

        result.push(w);
    });

    return result;
};

/**
 * calculates the characters used in the given text.
 *
 * @param {String} text
 * @return {Object} - returns Arrays of char map with and without whitespace
 */
const getCharacters = (text) => {
    let result = {};
    let resultWithWhiteSpace = [];
    let resultWithoutWhiteSpace = [];

    text.split('').forEach((ch) => {
        resultWithWhiteSpace.push(ch);

        if (ch !== ' ') {
            resultWithoutWhiteSpace.push(ch);
        }
    });

    result.withoutWhiteSpace = {
        array: resultWithoutWhiteSpace.sort(),
        length: resultWithoutWhiteSpace.length,
    };

    result.withWhiteSpace = {
        array: resultWithWhiteSpace.sort(),
        length: resultWithWhiteSpace.length,
    };

    return result;
};

/**
 * calculates the word frequency in the given text. case sensitive and non-sensitive results
 *
 * @param {string} text
 * @return {Object} - returns words map
 */
const getWordsMap = (text) => {
    let result = {};

    const wordsArray = getWords(text);

    wordsArray.forEach((ch) => {
        result[ch] = result[ch] + 1 || 1;
    });

    return result;
};

/**
 * calculates the character frequency in the given text. case sentitive and non-sensitive results
 *
 * @param {String} text
 * @return {Object} - returns char map
 */
const getCharactersMap = (text) => {
    let result = {};

    const { withoutWhiteSpace } = getCharacters(text);

    withoutWhiteSpace.array.forEach((ch) => {
        result[ch] = result[ch] + 1 || 1;
    });

    return result;
};

/**
 * gets sentences from string by splitting with dot and a space(". ") character
 *
 * @param {String} text
 * @return {Object} - return object of words array, array length
 */
const getSentences = (text) => {
    let result = [];

    text.split('. ').forEach((s) => {
        if (s !== '') {
            // remove dot from last sentence in the text. split is not removing since last sentence has no empty space
            if (s[s.length - 1] === '.') {
                s = s.substring(0, s.length - 1);
            }
            
            result.push(s.trim());
        }
    });

    return result;
};

/**
 * calculates the special characters usage.(except a-z, A-Z and 0-9 charset)
 *
 * @param {String} text
 * @return {Array} - returns array of object and its length
 */
const getSpecialCharacters = (text) => {
    let result = [];

    if (!isEmpty(text)) {
        const regex = /[^A-Za-z0-9]/g; // regular expression to match non-alphanumeric characters
        const specialChars = text.match(regex); // get an array of special characters in the string

        if (!isEmpty(specialChars)) {
            result = specialChars;
        }
    }

    return result;
};

/**
 * calculates the special character frequency in the given text.
 *
 * @param {String} text
 * @return {Object} - returns char map
 */
const getSpecialCharacterMap = (text) => {
    let result = {};

    if (!isEmpty(text)) {
        const specialChars = getSpecialCharacters(text);

        if (!isEmpty(specialChars)) {
            specialChars.forEach((ch) => {
                result[ch] = result[ch] + 1 || 1;
            });
        }
    }

    return result;
};

/**
 * searchs integers in the text
 *
 * @param {String} text
 * @return {Object} - returns objects containts array of integers and length
 */
const findIntegers = (text) => {
    let result = [];

    const textArray = getWords(text);

    textArray.filter((t) => {
        if (!isNaN(t) && !t.includes('.') && !t.includes(',')) {
            const n = parseInt(t);

            result.push(n);
        }
    });

    return result;
};

/**
 * searchs floats in the text
 *
 * @param {String} text
 * @return {Object} - returns objects containts array of floats and length
 */
const findFloats = (text) => {
    let result = [];

    const textArray = getWords(text);

    textArray.filter((t) => {
        if (!isNaN(t) && t.includes('.')) {
            const f = parseFloat(t);

            result.push(f);
        }
    });

    return result;
};

/**
 * checks the variable is empty or not. checks null, undefined and <''> empty string
 * @param {any}
 * @return {Boolean}
 */
const isEmpty = (variable) => {
    if (variable !== null && variable !== undefined && variable !== '') {
        return false;
    } else {
        return true;
    }
};

/**
 * checks if the parameter found in the config or not
 *
 * @param {String} config - comma seperated values
 * @param {String} parameter - analyze request config parameter
 * @return {Boolean}
 */
const isParamRequested = (config, parameter) => {
    if (!isEmpty(config)) {
        if (!isEmpty(parameter)) {
            const configArr = config.split(',');

            let result = configArr.filter(
                (c) => c.trim().toLowerCase() === parameter.toLowerCase()
            );

            return result.length > 0;
        } else {
            return false;
        }
    } else {
        return true;
    }
};

module.exports = {
    wordCounter,
    charCounter,
    getWords,
    getCharacters,
    getWordsMap,
    getCharactersMap,
    getSentences,
    getSpecialCharacters,
    getSpecialCharacterMap,
    findIntegers,
    findFloats,
    isEmpty,
    isParamRequested,
};
