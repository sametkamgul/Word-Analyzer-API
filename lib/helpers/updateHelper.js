const generalHelper = require('./generalHelper');

/**
 * removes character(s) from given string
 *
 * @param {String} text - input text
 * @param {String} characters - single or multiple characters seperated by comma to be removed
 * @return {String} - updated text will be returned
 */
const removeCharacters = (text, characters) => {
    let result = '';

    charactersArray = characters.split(',');

    charactersArray.forEach((ch) => {
        result = text.replaceAll(ch, '');
    });

    return result;
};

module.exports = {
    removeCharacters,
};

/**
 * replace character(s) from given string
 *
 * @param {String} text - input text
 * @param {String} characters - single or multiple characters seperated by comma to be removed
 * @return {String} - updated text will be returned
 */
const replaceCharacters = (text, characters, newCharacter) => {
    let result = text;

    charactersArray = characters.split(',');

    charactersArray.forEach((ch) => {
        result = result.replaceAll(ch, newCharacter);
    });

    return result;
};

/**
 * removes word(s) from given string
 *
 * @param {String} text - input text
 * @param {String} words - single or multiple words seperated by comma to be removed
 * @return {String} - updated text will be returned
 */
const removeWords = (text, words) => {
    let result = '';

    wordsArray = words.split(',');

    wordsArray.forEach((ch) => {
        result = text.replaceAll(ch, '');
    });

    return result;
};

/**
 * replace word(s) from given string
 *
 * @param {String} text - input text
 * @param {String} words - single or multiple words seperated by comma to be removed
 * @return {String} - updated text will be returned
 */
const replaceWords = (text, words, newWord) => {
    let result = text;

    wordsArray = words.split(',');

    wordsArray.forEach((w) => {
        result = result.replaceAll(w, newWord);
    });

    return result;
};

module.exports = {
    removeCharacters,
    replaceCharacters,
    removeWords,
    replaceWords,
};
