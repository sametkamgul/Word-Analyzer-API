const wordCounter = (words) => {
    if (words === null || words === undefined || words === '') return 0;

    return words.split(' ').length;
};

const charCounter = (words) => {
    if (words === null || words === undefined || words === '') return 0;

    return words.length;
};



/**
 * calculates the words in the given text splitted by whitespace(' ').
 *
 * @param {String} words
 * @return {Array} - returns Array of words
 */
const getWords = (words) => {
    let result = [];

    words.split(' ').forEach((w) => {
        result.push(w);
    });

    return result;
};

/**
 * calculates the characters used in the given text.
 *
 * @param {String} words
 * @return {Object} - returns Arrays of char map with and without whitespace
 */
const getCharacters = (words) => {
    let result = {};
    let resultWithWhiteSpace = [];
    let resultWithoutWhiteSpace = [];

    words.split('').forEach((ch) => {
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
 * @param {string} words
 * @return {Object} - returns words map
 */
const getWordsMap = (words) => {
    let result = {};

    // FIXME: implementation  not working correctly

    let counter = 0;
    let previousIndex = -1;
    let currentIndex = -1;

    const wordsArray = getWords(words);

    wordsArray.forEach((ch) => {
        counter = wordsArray.indexOf(ch);

        if (counter > previousIndex) {
            counter++;

            previousIndex = currentIndex;
        }

        result[ch] = counter;
    });

    return result;
};

/**
 * calculates the character frequency in the given text. case sentitive and non-sensitive results
 *
 * @param {String} words
 * @return {Object} - returns char map
 */
const getCharactersMap = (words) => {
    // FIXME: implementation  not working correctly
    let result = {};

    const { withoutWhiteSpace } = getCharacters(words);

    withoutWhiteSpace.array.forEach((ch) => {
        result[ch] = result[ch] + 1 || 1;
    });

    return result;
};

/**
 * gets sentences from string by splitting with dot(.) character
 *
 * @param {String} words
 * @return {Object} - return object of words array, array length
 */
const getSentences = (words) => {
    let result = [];

    words.split('.').forEach((s) => {
        if (s !== '') {
            result.push(s.trim());
        }
    });

    return result;
};

/**
 * calculates the special characters usage.(except a-z, A-Z and 0-9 charset)
 *
 * @param {String} text
 * @return {Object} - returns array of object and its length
 */
const getSpecialCharacters = (text) => {
    let result = {
        array: [],
        length: 0,
    };

    // TODO: do implementation

    return result;
};

/**
 * searchs integers in the words
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
 * searchs floats in the words
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

module.exports = {
    wordCounter,
    charCounter,
    getWords,
    getCharacters,
    getWordsMap,
    getCharactersMap,
    getSentences,
    getSpecialCharacters,
    findIntegers,
    findFloats,
};
