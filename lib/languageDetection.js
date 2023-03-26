const languageDetect = require('text-language-detector');

// languageDetect('Thank you very much.').then((res) => console.log(res));

/**
 * detects the language of the text
 *
 * @param {String} words
 * @return {Object} - matched language and language code
 */
const detect = async (words) => {
    let result = {};
    if (words === null || words === undefined || words === '') return result;

    result = await languageDetect(words);

    return {
        code: result.match_language_data.names,
        name: result.match_language,
    };
};

module.exports = { detect };
