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
    let result = {};
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
 * @param {String} searchKeywords - string(s) to be searched
 * @return {Object} - returns the the word, exact count and similar one as object
 */
const findText = (words, searchKeywords) => {
    let result = [];

    // null check
    if (searchKeywords === null || searchKeywords === undefined) return result;

    let searchKeywordsArray = searchKeywords.split(',');

    if (searchKeywordsArray.length > 0) {
        searchKeywordsArray.forEach((keyword) => {
            let searchResult = {
                keyword: keyword,
                exactCount: 0,
                similarCount: 0,
            };

            if (keyword === '') return result;

            words.split(' ').filter((w) => {
                if (w === keyword) {
                    searchResult.exactCount++;
                }

                if (w.includes(keyword)) {
                    searchResult.similarCount++;
                }
            });

            result.push(searchResult);
        });
    }

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
    let counter = 0;
    let previousIndex = -1;
    let currentIndex = -1;

    const { withoutWhiteSpace } = getCharacters(words);

    withoutWhiteSpace.array.forEach((ch) => {
        counter = withoutWhiteSpace.array.indexOf(ch);

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
    getSpecialCharacters
};
