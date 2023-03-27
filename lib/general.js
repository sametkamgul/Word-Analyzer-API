const wordCounter = (words) => {
    if (words === null || words === undefined || words === '') return 0;

    return words.split(' ').length;
};

const charCounter = (words) => {
    if (words === null || words === undefined || words === '') return 0;

    return words.length;
};

/**
 * finds a hashtag if the given text has one or more
 *
 * @param {String} words
 * @return {Array} - returns Array of hashtags with and without dash('#') character
 */
const findHashtag = (words) => {
    let result = [];
    let withHashChar = [];
    let withoutHashChar = [];

    if (words === null || words === undefined || words === '') return result;

    words.split(' ').filter((w) => {
        if (w[0] === '#') {
            withHashChar.push(w);
            withoutHashChar.push(w.substring(1, w.length));
        }
    });

    result.withHashChar = withHashChar;
    result.withoutHashChar = withoutHashChar;

    return result;
};

/**
 * search a string in the given string.
 *
 * @param {String} words
 * @param {String} word - string to be searched
 * @return {Object} - returns the the word, exact count and similar one as object
 */
const findText = (words, word) => {
    let result = {
        word: word,
        exactCount: 0,
        similarCount: 0,
    };

    words.split(' ').filter((w) => {
        if (w === word) {
            result.exactCount++;
        }
    });

    words.split(' ').filter((w) => {
        if (w.includes(word)) {
            result.similarCount++;
        }
    });

    return result;
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

    result.withoutWhiteSpace = resultWithoutWhiteSpace.sort();
    result.withWhiteSpace = resultWithWhiteSpace.sort();

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

    return result;
};

/**
 * calculates the character frequency in the given text. case sentitive and non-sensitive results
 *
 * @param {String} words
 * @return {Object} - returns char map
 */
const getCharactersMap = (words) => {
    let result = {};
    let counter = 0;
    let previousIndex = -1;
    let currentIndex = -1;

    const charactersObject = getCharacters(words);

    charactersObject.withoutWhiteSpace.forEach((ch) => {
        counter = charactersObject.withoutWhiteSpace.indexOf(ch);

        if (counter > previousIndex) {
            counter++;

            previousIndex = currentIndex;
        }

        result[ch] = counter;
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
    let result = {};
    let sentenceArray = [];

    words.split('.').forEach((s) => {
        if (s !== '') {
            sentenceArray.push(s.trim());
        }
    });

    result.sentenceArray = sentenceArray;
    result.length = sentenceArray.length;

    return result;
};

module.exports = {
    wordCounter,
    charCounter,
    findHashtag,
    findText,
    findText,
    getWords,
    getCharacters,
    getWordsMap,
    getCharactersMap,
    getSentences,
};
