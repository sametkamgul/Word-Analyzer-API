const badWordsChecker = require('../lib/badWords');
const languageDetection = require('../lib/languageDetection');
const generalHelper = require('../lib/general');

const analyze = async (text, searchKeyword) => {
    let result = {};
    let badWords = {};
    let language = {};
    let wordCounter = 0;
    let wordsMap = {};
    let charCounter = 0;
    let search = {};
    let wordsArray = [];
    let charArray = [];
    let charMap = {};
    let sentences = [];
    let integers = [];
    let floats = [];

    badWords = badWordsChecker.hasBadWord(text);
    language = await languageDetection.detect(text);
    wordCounter = generalHelper.wordCounter(text);
    charCounter = generalHelper.charCounter(text);
    hashtag = generalHelper.findHashtag(text);

    if (
        searchKeyword !== null ||
        searchKeyword !== undefined ||
        searchKeyword !== ''
    ) {
        search = generalHelper.findText(text, searchKeyword);
    }

    wordsArray = generalHelper.getWords(text);
    wordsMap = generalHelper.getWordsMap(text);
    charArray = generalHelper.getCharacters(text);
    charMap = generalHelper.getCharactersMap(text);
    sentences = generalHelper.getSentences(text);
    integers = generalHelper.findIntegers(text);
    floats = generalHelper.findFloats(text);

    result.characters = {
        array: charArray,
        length: charArray.length,
        map: charMap,
    };

    result.words = {
        badWords: badWords,
        length: wordCounter,
        array: wordsArray,
        map: wordsMap,
    };

    result.sentences = {
        array: sentences,
        length: sentences.length,
    };

    result.search = search;

    result.numbers = {
        integers: {
            array: integers,
            length: integers.length,
        },
        floats: {
            array: floats,
            length: floats.length,
        },
    };

    return result;
};

module.exports = {
    analyze,
};
