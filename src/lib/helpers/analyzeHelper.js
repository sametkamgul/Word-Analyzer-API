const badWordsChecker = require('./badWordHelper');
const languageDetection = require('./languageDetectionHelper');
const generalHelper = require('./generalHelper');
const searchHelper = require('./searchHelper');
const { analyzeResponseParams } = require('../constants/constants');

const analyze = async (text, searchKeywords, config) => {
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
    let configArr = [];
    let specialCharsArray = [];
    let specialCharsMap = {};
    let hashtags = {};
    let mentions = {};

    // config null check
    if (!generalHelper.isEmpty(config)) {
        configArr = config.split(',');
    }

    if (
        generalHelper.isParamRequested(config, analyzeResponseParams.language)
    ) {
        language = await languageDetection.detect(text);

        result.language = language;
    }

    // root object - search check
    if (
        !generalHelper.isEmpty(searchKeywords) ||
        generalHelper.isParamRequested(config, analyzeResponseParams.search)
    ) {
        search = searchHelper.findText(text, searchKeywords);

        result.search = search;
    }

    // root object - characters check
    if (
        generalHelper.isParamRequested(config, analyzeResponseParams.characters)
    ) {
        charCounter = generalHelper.charCounter(text);
        charArray = generalHelper.getCharacters(text);
        charMap = generalHelper.getCharactersMap(text);
        
        result.characters = {
            array: charArray,
            length: charArray.length,
            map: charMap,
        };
    }

    // root object - special character check 
    if (generalHelper.isParamRequested(config, analyzeResponseParams.specialCharacters)) {
        specialCharsArray = generalHelper.getSpecialCharacters(text);
        specialCharsMap = generalHelper.getSpecialCharacterMap(text);
    
        result.specialChars = {
            array: specialCharsArray,
            length: specialCharsArray.length,
            map: specialCharsMap,
        };

    }

    // root object - words check
    if (generalHelper.isParamRequested(config, analyzeResponseParams.words)) {
        wordCounter = generalHelper.wordCounter(text);
        wordsArray = generalHelper.getWords(text);
        wordsMap = generalHelper.getWordsMap(text);
        badWords = badWordsChecker.hasBadWord(text);

        result.words = {
            badWords: badWords,
            length: wordCounter,
            array: wordsArray,
            map: wordsMap,
        };
    }

    // root object - hashtag check
    if (generalHelper.isParamRequested(config, analyzeResponseParams.hashtags)) {
        hashtags = searchHelper.findHashtags(text);

        result.hashtags = hashtags;
    }

    // root object - mention check
    if (generalHelper.isParamRequested(config, analyzeResponseParams.mentions)) {
        mentions = searchHelper.findMentions(text);

        result.mentions = mentions;
    }

    // root object - sentences check
    if (
        generalHelper.isParamRequested(config, analyzeResponseParams.sentences)
    ) {
        sentences = generalHelper.getSentences(text);

        result.sentences = {
            array: sentences,
            length: sentences.length,
        };
    }

    // root object - numbers check
    if (generalHelper.isParamRequested(config, analyzeResponseParams.numbers)) {
        integers = generalHelper.findIntegers(text);
        floats = generalHelper.findFloats(text);

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
    }

    return result;
};

module.exports = {
    analyze,
};
